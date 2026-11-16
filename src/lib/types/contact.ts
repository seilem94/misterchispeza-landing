export type FormState =
  | { status: 'idle' }
  | { status: 'success' }
  | { status: 'error'; error: string }
