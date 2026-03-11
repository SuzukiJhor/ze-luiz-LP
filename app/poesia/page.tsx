'use client'

import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import PoesiaPostsSection from './components/PoesiaPostSection'

export default function Poesia () {
  return (
    <>
      <Navbar />
      <PoesiaPostsSection />
      <Footer />
    </>
  )
}
