'use server'

import { z } from 'zod'

const ContactSchema = z.object({
  name: z.string().min(2, 'Nombre muy corto'),
  email: z.string().email('Email inválido'),
  whatsapp: z.string().optional().default(''),
  company: z.string().optional().default(''),
  type: z.string().min(1, 'Selecciona un tipo'),
  message: z.string().min(10, 'Cuéntame un poco más'),
  // Honeypot — must stay empty
  website: z.string().max(0).optional(),
})

export type ContactState = {
  ok: boolean
  message: string
  fieldErrors?: Record<string, string[] | undefined>
}

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const parsed = ContactSchema.safeParse(Object.fromEntries(formData))
  if (!parsed.success) {
    return {
      ok: false,
      message: 'Revisa los campos marcados.',
      fieldErrors: parsed.error.flatten().fieldErrors,
    }
  }

  // TODO Fase 2: integrar Resend para email + notificar WhatsApp del asistente.
  // Por ahora hacemos log server-side para verificar el flujo end-to-end.
  console.log('[contact]', parsed.data)

  return { ok: true, message: 'Gracias. Recibirás respuesta en menos de 24 horas.' }
}
