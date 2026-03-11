'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

import bgTexture from '../assets/bg-texture.jpg'
import professor from '../assets/professional.png'

export default function SectionAbout () {
  return (
    <section className='relative min-h-screen flex items-center overflow-hidden'>
      <div
        className='absolute top-0 left-0 w-full h-40 
                bg-linear-to-b from-background via-background/80 to-transparent 
                z-10 pointer-events-none'
      />

      <div
        className='absolute bottom-0 left-0 w-full h-40 
            bg-linear-to-t from-background via-background/80 to-transparent 
            z-10 pointer-events-none'
      />

      <div className='absolute inset-0 z-0'>
        <Image
          src={bgTexture}
          alt='Textura artística'
          fill
          priority
          className='object-cover opacity-40'
        />

        <div className='absolute inset-0 bg-linear-to-r from-[#2b1d16]/90 via-black/70 to-transparent' />

        <motion.div
          initial={{ x: '-60%' }}
          animate={{ x: '120%' }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'linear'
          }}
          className='absolute inset-0 pointer-events-none'
        >
          <div className='w-[40%] h-full bg-linear-to-r from-transparent via-white/10 to-transparent blur-3xl' />
        </motion.div>
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center'>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            initial='hidden'
            animate='visible'
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.25
                }
              }
            }}
            className='text-5xl md:text-7xl font-bold leading-tight mb-6'
          >
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 }
              }}
              className='block'
            >
              Professor
            </motion.span>

            <motion.span
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 }
              }}
              className='block text-primary'
            >
              Poeta
            </motion.span>

            <motion.span
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 }
              }}
              className='block text-white/80 text-4xl md:text-5xl font-medium'
            >
              e Pesquisador
            </motion.span>
          </motion.h1>

          <p className='text-xl text-muted leading-relaxed mb-8 max-w-xl'>
            Uma vida dedicada à educação, à arte e à formação de professores.
            Entre a matemática e a poesia nasce uma trajetória em que o
            conhecimento se transforma em expressão humana.
          </p>

          <Link
            href='docente'
            className='inline-flex items-center text-primary text-lg font-medium hover:gap-3 transition-all'
          >
            Conhecer trajetória
            <ArrowRight className='ml-2 w-5 h-5' />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          whileHover={{ scale: 1.03, rotate: 0.5 }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1]
          }}
          className='relative flex justify-center'
        >
          <div className='absolute -inset-10 bg-[#8b5a2b]/25 blur-[120px] rounded-full' />

          <div className='absolute inset-0 bg-primary/10 blur-3xl rounded-full scale-125' />

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className='relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl backdrop-blur-sm'
          >
            <Image
              src={professor}
              alt='Professor'
              className='object-cover'
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
