'use client'

import texture from '../assets/bg-texture.jpg'
import poeta from '../assets/poeta.webp'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function SectionPoeta () {
  return (
    <section className='relative py-40 px-6 overflow-hidden'>
      <div
        className='absolute top-0 left-0 w-full h-40 
        bg-linear-to-b from-background via-background/80 to-transparent 
        z-10 pointer-events-none'
      />

      {/* BACKGROUND */}
      <div className='absolute inset-0 -z-10'>
        <Image
          src={texture}
          alt='Textura artística'
          fill
          className='object-cover opacity-30'
          priority
        />

        <div className='absolute inset-0 bg-linear-to-r from-[#0b1324]/95 via-[#0b1324]/80 to-black/70' />
        <motion.div
          initial={{ x: '-60%' }}
          animate={{ x: '120%' }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'linear'
          }}
          className='absolute inset-0 pointer-events-none'
        >
          <div className='w-[35%] h-full bg-linear-to-r from-transparent via-white/10 to-transparent blur-3xl' />
        </motion.div>
      </div>

      <div className='relative z-20 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-24 items-center'>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className='order-1 lg:order-2'
        >
          <h2 className='text-primary tracking-[0.35em] uppercase mb-4'>
            O Poeta
          </h2>

          <h3 className='text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-10 leading-tight'>
            O Poeta do <br />
            <span className='text-primary'>Candeeiro</span>
          </h3>

          <div className='space-y-6 text-lg text-white/70 leading-relaxed'>
            <p>
              Enraizado em Monteiro – PB, Zé Luiz do Candeeiro nasceu em
              Tupanatinga, entre o agreste e sertão pernambucano, em 19 de maio
              de 1981.
            </p>

            <p>
              Filho de Seu José Cavalcanti de Albuquerque e de Dona Izita dos
              Santos, carrega na própria história a marca de uma origem humilde
              profundamente ligada à caatinga, à cultura popular e às
              manifestações do seu povo.
            </p>

            <p>
              Descendente dos negros do carrasco e trazendo no sangue a tradição
              da Mestra Mariquinha do Samba de Coco, constrói uma obra em que
              poesia, música e memória caminham juntas.
            </p>

            <p>
              Poeta, cantor e compositor, é Doutor em Ensino de Ciências e
              Matemática e atua na formação de professores na Universidade
              Estadual da Paraíba.
            </p>
          </div>

          <blockquote className='mt-12 text-2xl italic text-primary border-l-4 border-primary pl-6'>
            “Ser Candeeiro é iluminar caminhos.”
          </blockquote>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1]
          }}
          viewport={{ once: true }}
          className='relative flex justify-center order-2 lg:order-1'
        >
          <div className='absolute -inset-16 bg-[#c98a3d]/30 blur-[120px] rounded-full' />

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className='relative z-10'
          >
            <Image
              src={poeta}
              alt='Zé Luiz do Candeeiro'
              className='object-cover rounded-2xl shadow-[0_40px_80px_rgba(0,0,0,0.6)]'
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
