'use client'

import Hero from './components/Hero'
import Quote from './components/Quote'
import { Navbar } from './components/Navbar'
import Fragment from './components/Fragment'
import { Footer } from './components/Footer'
import SectionAbout from './components/SectionAbout'
import SectionPoeta from './components/SectionPoeta'

export default function Home () {
  return (
    <>
      <Navbar />
      <Hero />
      <SectionPoeta />
      <Quote />
      <SectionAbout />
      <Fragment />
      <Footer />
    </>
  )
}
