'use client'

import Hero from './components/Hero'
import Quote from './components/Quote'
import { Navbar } from './components/Navbar'
import Fragment from './components/Fragment'
import { Footer } from './components/Footer'
import SectionAbout from './components/SectionAbout'
import SectionPoeta from './components/SectionPoeta'
import ObraSection from './components/ObraSection'
import ContatoSection from './components/ContatoSection'

export default function Home () {
  return (
    <>
      <Navbar />
      <Hero />
      <SectionPoeta />
      <Quote />
      <SectionAbout />
      <ObraSection />
      <ContatoSection />
      <Fragment />
      <Footer />
    </>
  )
}
