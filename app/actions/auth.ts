'use server'

import { cookies } from 'next/headers'
import { prisma } from '../lib/prisma'
import { SignJWT } from 'jose'
import { redirect } from 'next/navigation'

const SECRET_KEY = new TextEncoder().encode(process.env.JWT_SECRET)

export async function logoutAction () {
  const cookieStore = await cookies()
  cookieStore.delete('auth_token')
  redirect('/')
}

export async function loginAction (formData: FormData) {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  const user = await prisma.user.findUnique({ where: { email } })

  if (!user || user.password !== password) {
    return { error: 'Credenciais inválidas' }
  }

  const token = await new SignJWT({ userId: user.id, role: 'admin' })
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('2h')
    .sign(SECRET_KEY)

  const cookieStore = await cookies()
  cookieStore.set('auth_token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60 * 2 // 2 horas
  })

  return { success: true }
}
