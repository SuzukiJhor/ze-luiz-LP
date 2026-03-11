'use client'

import { useEffect, useState } from 'react'

import { Navbar } from '../components/Navbar'
import LoginModal from './components/LoginModal'
import { useRouter } from 'next/navigation'

export default function Login () {
  const router = useRouter()
  const [auth, setAuth] = useState(false)

  useEffect(() => {
    if (auth) {
      router.push('/admin')
    }
  }, [auth, router])

  return (
    <>
      <Navbar />
      <LoginModal onSuccess={() => setAuth(true)} />
    </>
  )
}
