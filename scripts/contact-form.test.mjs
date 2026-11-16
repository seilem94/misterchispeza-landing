import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { runInNewContext } from 'node:vm'
import test from 'node:test'
import ts from 'typescript'

const root = fileURLToPath(new URL('../', import.meta.url))
const formspreeUrl = 'https://formspree.io/f/testform'

// Ejecuta el código real con HTTP y entorno aislados. Nunca usa .env ni la red.
function harness(replies = [], env = {}) {
  const calls = []
  const cache = new Map()

  function load(relativePath) {
    if (cache.has(relativePath)) return cache.get(relativePath)

    const source = readFileSync(resolve(root, relativePath), 'utf8')
    const compiled = ts.transpileModule(source, {
      compilerOptions: {
        module: ts.ModuleKind.CommonJS,
        target: ts.ScriptTarget.ES2020,
      },
    }).outputText
    const exports = {}
    cache.set(relativePath, exports)

    runInNewContext(
      compiled,
      {
        exports,
        require(specifier) {
          assert.equal(specifier, '@/lib/constants/contact')
          return load('src/lib/constants/contact.ts')
        },
        process: {
          env: {
            NEXT_PUBLIC_FORMSPREE_ID: 'testform',
            NEXT_PUBLIC_TURNSTILE_SITE_KEY: 'test-site-key',
            ...env,
          },
        },
        FormData,
        AbortSignal,
        async fetch(url, options) {
          const reply = replies[calls.length]
          calls.push({ url, options })
          assert.ok(reply, 'Llamada HTTP inesperada')
          if (reply instanceof Error) throw reply
          return typeof reply === 'function' ? reply() : reply
        },
      },
      { filename: relativePath },
    )
    return exports
  }

  const { submitContactForm } = load('src/app/actions/contact.ts')
  return {
    calls,
    async submit(form = contactForm(), previousState = { status: 'idle' }) {
      return structuredClone(await submitContactForm(previousState, form))
    },
  }
}

function contactForm() {
  const data = new FormData()
  for (const [name, value] of Object.entries({
    nombre: 'Prueba de seguridad',
    email: 'security@example.com',
    telefono: '+569 1234 5678',
    ubicacion: 'Entorno de pruebas',
    mensaje: 'Prueba aislada; no enviar al proveedor.',
    'cf-turnstile-response': 'test-token',
  })) {
    data.set(name, value)
  }
  return data
}

for (const key of [
  'NEXT_PUBLIC_TURNSTILE_SITE_KEY',
  'NEXT_PUBLIC_FORMSPREE_ID',
]) {
  test(`rechaza configuración ausente: ${key}, sin HTTP`, async () => {
    const app = harness([], { [key]: undefined })
    assert.equal((await app.submit(contactForm())).status, 'error')
    assert.equal(app.calls.length, 0)
  })
}

test('rechaza un ID de Formspree que altera la ruta', async () => {
  const app = harness([], { NEXT_PUBLIC_FORMSPREE_ID: 'otro/id?captcha=false' })
  assert.equal((await app.submit(contactForm())).status, 'error')
  assert.equal(app.calls.length, 0)
})

test('honeypot no envía ni simula éxito', async () => {
  const app = harness()
  const data = contactForm()
  data.set('_gotcha', 'bot')
  assert.equal((await app.submit(data)).status, 'error')
  assert.equal(app.calls.length, 0)
})

for (const payload of [null, {}]) {
  test(`rechaza una llamada directa sin FormData: ${JSON.stringify(payload)}`, async () => {
    const app = harness()
    assert.equal((await app.submit(payload)).status, 'error')
    assert.equal(app.calls.length, 0)
  })
}

for (const name of ['nombre', 'email', 'telefono', 'ubicacion', 'mensaje']) {
  test(`rechaza ${name} ausente antes de consumir el token`, async () => {
    const app = harness()
    const data = contactForm()
    data.delete(name)
    assert.equal((await app.submit(data)).status, 'error')
    assert.equal(app.calls.length, 0)
  })
}

for (const [name, value] of [
  ['email', 'correo-invalido'],
  ['email', 'correo@example.com\r\nBcc:otro@example.com'],
  ['telefono', '12345'],
  ['nombre', ' '.repeat(20)],
  ['mensaje', 'x'.repeat(5001)],
]) {
  test(`rechaza ${name} inválido o excesivo`, async () => {
    const app = harness()
    const data = contactForm()
    data.set(name, value)
    assert.equal((await app.submit(data)).status, 'error')
    assert.equal(app.calls.length, 0)
  })
}

for (const kind of ['ausente', 'vacío', 'excesivo', 'archivo', 'duplicado']) {
  test(`rechaza token ${kind} sin contactar a proveedores`, async () => {
    const app = harness()
    const data = contactForm()
    const name = 'cf-turnstile-response'
    if (kind === 'ausente') data.delete(name)
    if (kind === 'vacío') data.set(name, '   ')
    if (kind === 'excesivo') data.set(name, 'x'.repeat(2049))
    if (kind === 'archivo') data.set(name, new Blob(['token']), 'token.txt')
    if (kind === 'duplicado') data.append(name, 'otro-token')
    assert.equal(
      (await app.submit(data, { status: 'success' })).status,
      'error',
    )
    assert.equal(app.calls.length, 0)
  })
}

for (const name of ['nombre', 'email', 'telefono', 'ubicacion', 'mensaje']) {
  test(`rechaza archivos y duplicados en ${name}`, async () => {
    for (const kind of ['archivo', 'duplicado']) {
      const app = harness()
      const data = contactForm()
      if (kind === 'archivo') data.set(name, new Blob(['dato']), 'dato.txt')
      else data.append(name, 'otro-valor')
      assert.equal((await app.submit(data)).status, 'error')
      assert.equal(app.calls.length, 0)
    }
  })
}

for (const token of ['token-invalido', 'token-expirado', 'token-reutilizado']) {
  test(`propaga el rechazo de Turnstile desde Formspree: ${token}`, async () => {
    const app = harness([
      Response.json(
        { errors: [{ message: 'CAPTCHA rechazado' }] },
        { status: 422 },
      ),
    ])
    const data = contactForm()
    data.set('cf-turnstile-response', token)
    assert.equal((await app.submit(data)).status, 'error')
    assert.deepEqual(
      app.calls.map((call) => call.url),
      [formspreeUrl],
    )
    assert.equal(
      JSON.parse(app.calls[0].options.body)['cf-turnstile-response'],
      token,
    )
  })
}

test('envía el token una sola vez a Formspree y espera su aceptación', async () => {
  let releaseAcceptance
  const pending = new Promise((resolve) => {
    releaseAcceptance = resolve
  })
  const app = harness([() => pending])
  const data = contactForm()
  data.set('nombre', '  Prueba de seguridad  ')
  data.set('_subject', 'Asunto manipulado')
  data.set('$ACTION_REF_1', 'dato interno')
  data.set('TURNSTILE_SECRET_KEY', 'secreto-falsificado')
  data.set('_captcha', 'false')
  data.set('g-recaptcha-response', 'token-alternativo')
  data.set('cf-turnstile-response', 'token+opaco/sin-modificar=')
  const result = app.submit(data)

  assert.deepEqual(
    app.calls.map((call) => call.url),
    [formspreeUrl],
  )
  releaseAcceptance(Response.json({ ok: true }))
  assert.equal((await result).status, 'success')
  assert.deepEqual(
    app.calls.map((call) => call.url),
    [formspreeUrl],
  )

  assert.equal(app.calls[0].options.method, 'POST')
  assert.equal(app.calls[0].options.headers['Content-Type'], 'application/json')
  assert.equal(app.calls[0].options.headers.Accept, 'application/json')
  const delivery = JSON.parse(app.calls[0].options.body)
  assert.deepEqual(Object.keys(delivery).sort(), [
    '_subject',
    'cf-turnstile-response',
    'email',
    'mensaje',
    'nombre',
    'telefono',
    'ubicacion',
  ])
  assert.equal(delivery.nombre, 'Prueba de seguridad')
  assert.equal(delivery._subject, 'Nuevo mensaje desde la web')
  assert.equal(delivery['cf-turnstile-response'], 'token+opaco/sin-modificar=')
  assert.ok(!JSON.stringify(delivery).includes('secreto-falsificado'))

  for (const { options } of app.calls) {
    assert.equal(options.cache, 'no-store')
    assert.equal(options.redirect, 'error')
    assert.ok(options.signal instanceof AbortSignal)
  }
})

for (const [name, reply] of [
  ['rechazo HTTP', new Response('No aceptado', { status: 422 })],
  ['fallo de red', new TypeError('Network failure')],
  ['timeout', new DOMException('Tiempo agotado', 'TimeoutError')],
]) {
  test(`Formspree ${name}: devuelve error sin aceptar el contacto`, async () => {
    const app = harness([reply])
    const state = await app.submit(contactForm())
    assert.equal(state.status, 'error')
    assert.equal(typeof state.error, 'string')
    assert.equal(app.calls.length, 1)
  })
}

test('el reintento entrega un token nuevo a la validación nativa de Formspree', async () => {
  const app = harness([
    new Response('Error', { status: 503 }),
    Response.json({ ok: true }),
  ])
  const first = await app.submit(contactForm())
  assert.equal(first.status, 'error')
  const retry = contactForm()
  retry.set('cf-turnstile-response', 'nuevo-token')
  assert.equal((await app.submit(retry, first)).status, 'success')
  assert.deepEqual(
    app.calls.map((call) => call.url),
    [formspreeUrl, formspreeUrl],
  )
  assert.equal(
    JSON.parse(app.calls[1].options.body)['cf-turnstile-response'],
    'nuevo-token',
  )
})
