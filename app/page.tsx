"use client";

import SectionPoeta from "./components/SectionPoeta";
import SectionAbout from "./components/SectionAbout";
import { Navbar } from "./components/Navbar";
import Fragment from "./components/Fragment";
import { Footer } from "./components/Footer";
import Hero from "./components/Hero";
import Quote from "./components/Quote";

export default function Home() {

  return (
    <>
      <Navbar />
      <Hero />
      <SectionAbout />
      <Quote />
      <SectionPoeta />
      <Fragment />
      <Footer />
    </>
  )
}