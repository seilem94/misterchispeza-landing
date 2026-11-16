export const contactFormSecurity = {
  tokenField: 'cf-turnstile-response',
  action: 'contact',
  maxTokenLength: 2048,
} as const

export const contactFormContent = {
  subject: 'Nuevo mensaje desde la web',
  submit: 'Enviar',
  pending: 'Enviando...',
  success: 'Mensaje enviado correctamente. Te estamos redirigiendo.',
  verificationLabel: 'Verificación anti-spam',
  privacy: 'Al enviar aceptas nuestro aviso de privacidad.',
  fields: [
    {
      label: 'Nombre *',
      id: 'nombre',
      name: 'nombre',
      type: 'text',
      placeholder: 'Tu nombre',
    },
    {
      label: 'Email *',
      id: 'email',
      name: 'email',
      type: 'email',
      placeholder: 'tu.correo@empresa.com',
    },
    {
      label: 'Teléfono *',
      id: 'telefono',
      name: 'telefono',
      type: 'tel',
      placeholder: '+569 1234 5678',
    },
    {
      label: 'Ubicación *',
      id: 'ubicacion',
      name: 'ubicacion',
      type: 'text',
      placeholder: 'Valparaíso, V Región',
    },
    {
      label: 'Mensaje *',
      id: 'mensaje',
      name: 'mensaje',
      type: 'textarea',
      placeholder: '¿Qué necesitas?',
    },
  ],
  errors: {
    configuration:
      'El formulario no está disponible en este momento. Intenta más tarde.',
    fields: 'Revisa los datos del formulario e intenta de nuevo.',
    captcha: 'No se pudo validar la verificación anti-spam. Intenta de nuevo.',
    delivery: 'No se pudo enviar el formulario. Por favor intenta de nuevo.',
    network: 'Error de red. Por favor intenta más tarde.',
  },
} as const
