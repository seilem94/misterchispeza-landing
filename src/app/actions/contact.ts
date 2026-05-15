'use server'

export type FormState = {
  success?: boolean;
  error?: string;
};

export async function submitContactForm(prevState: FormState, formData: FormData): Promise<FormState> {
  const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
  
  if (!formId) {
    console.error('Falta el ID de Formspree (NEXT_PUBLIC_FORMSPREE_ID)');
    return { error: 'Error de configuración del servidor.' };
  }

  // Se podría incluir también la validación del Turnstile aquí usando la clave secreta
  // Para este ejemplo, mantenemos el comportamiento anterior que pasaba la data a Formspree

  // Extraemos solo los campos relevantes, ignorando los tokens internos de React ($ACTION_REF...)
  const cleanData = {
    nombre: formData.get('nombre'),
    email: formData.get('email'),
    telefono: formData.get('telefono'),
    ubicacion: formData.get('ubicacion'),
    mensaje: formData.get('mensaje'),
    _subject: formData.get('_subject'),
    'cf-turnstile-response': formData.get('cf-turnstile-response'),
  };

  // Prevenimos el spam si _gotcha fue llenado por un bot
  if (formData.get('_gotcha')) {
    return { success: true };
  }

  try {
    const response = await fetch(`https://formspree.io/f/${formId}`, {
      method: 'POST',
      body: JSON.stringify(cleanData),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    });

    if (response.ok) {
      return { success: true };
    } else {
      const data = await response.json();
      console.error('Error de Formspree:', data);
      return { error: data.error || 'Error al enviar el formulario.' };
    }
  } catch (error) {
    console.error('Error de red al enviar el formulario:', error);
    return { error: 'Error de red. Por favor intenta más tarde.' };
  }
}
