'use client'

import { useFormStatus } from 'react-dom'
import { Loader2 } from 'lucide-react'

export function SubmitButton () {
  const { pending } = useFormStatus()

  return (
    <button
      type='submit'
      disabled={pending}
      className='w-full flex items-center justify-center gap-2 bg-primary text-white font-medium py-3 rounded-lg hover:opacity-90 transition disabled:opacity-50'
    >
      {pending && <Loader2 className='animate-spin' size={18} />}

      {pending ? 'Entrando...' : 'Entrar'}
    </button>
  )
}
