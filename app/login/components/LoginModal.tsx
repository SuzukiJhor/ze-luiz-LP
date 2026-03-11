'use client'

import { useState } from 'react'
import { loginAction } from '@/app/actions/auth'
import { Lock, Mail } from 'lucide-react'
import { SubmitButton } from './SubmitButton'
import LoginHeader from './LoginHeader'

export default function LoginModal ({ onSuccess }: { onSuccess: () => void }) {
  const [error, setError] = useState('')

  async function handleSubmit (formData: FormData) {
    setError('')

    const result = await loginAction(formData)

    if (result?.error) {
      setError(result.error)
    } else {
      onSuccess()
    }
  }

  return (
    <div className='fixed inset-0 bg-background/80 backdrop-blur-md flex items-center justify-center px-6'>
      <div className='relative w-full max-w-md'>
        <div className='absolute inset-0 bg-linear-to-r from-primary/20 via-transparent to-primary/20 blur-2xl opacity-40' />

        <div className='relative bg-surface border border-white/10 rounded-2xl shadow-2xl p-10'>
          <LoginHeader />

          <form action={handleSubmit} className='space-y-5'>
            <div className='relative'>
              <Mail className='absolute left-3 top-3 text-white/40' size={18} />

              <input
                name='email'
                type='email'
                placeholder='E-mail'
                required
                className='w-full pl-10 pr-3 py-3 bg-white/5 border border-white/10 text-white rounded-lg outline-none focus:border-primary transition'
              />
            </div>

            <div className='relative'>
              <Lock className='absolute left-3 top-3 text-white/40' size={18} />

              <input
                name='password'
                type='password'
                placeholder='Senha'
                required
                className='w-full pl-10 pr-3 py-3 bg-white/5 border border-white/10 text-white rounded-lg outline-none focus:border-primary transition'
              />
            </div>

            {error && (
              <div className='bg-red-500/10 border border-red-500/30 text-red-400 text-sm px-3 py-2 rounded'>
                {error}
              </div>
            )}

            <SubmitButton />
          </form>

          <p className='text-center text-xs text-muted mt-6'>
            Painel exclusivo do administrador
          </p>
        </div>
      </div>
    </div>
  )
}
