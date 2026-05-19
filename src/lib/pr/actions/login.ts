'use server'

import { redirect } from 'next/navigation'
import { login } from '@/lib/pr/auth'

export interface LoginState {
  ok: boolean
  message: string
}

export async function loginAction(
  _prev: LoginState,
  formData: FormData,
): Promise<LoginState> {
  const email = String(formData.get('email') ?? '')
  const password = String(formData.get('password') ?? '')

  if (!email || !password) {
    return { ok: false, message: 'Email y password requeridos.' }
  }

  const res = await login(email, password)
  if (!res.ok) {
    return { ok: false, message: res.reason }
  }

  redirect('/admin/pr-autopilot')
}
