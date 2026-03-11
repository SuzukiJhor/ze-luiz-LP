'use client'

import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import Dashboard from './components/Dashboard'

export default function AdminPage () {
  return (
    <>
      <Navbar />
      <Dashboard />
      <Footer />
    </>
  )
}
