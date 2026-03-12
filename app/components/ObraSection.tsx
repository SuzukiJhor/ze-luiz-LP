'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import mandala from '../assets/profile03.jpg'

export default function ObraSection () {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  const easeProfessional = [0.22, 1, 0.36, 1]

  const fadeInUp: any = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: easeProfessional }
    }
  }

  const scaleIn: any = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: easeProfessional }
    }
  }

  return (
    <section
      id='obra'
      className={`relative py-24 px-6 md:px-12 lg:px-24 overflow-hidden
        /* MANTIDO O FUNDO ESCURO: Transição para um Azul/Grafite Profundo */
        bg-linear-to-b from-background via-[#0a0f1a] to-[#020617]`}
    >
      <motion.div
        className='max-w-7xl mx-auto'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        {/* Cabeçalho da Seção com Linha Animada */}
        <div className='flex items-center gap-6 mb-16'>
          <motion.h2
            variants={fadeInUp}
            className='text-5xl md:text-7xl font-black tracking-tighter text-primary uppercase'
          >
            A OBRA
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className='h-0.5 flex-1 bg-primary/30 hidden md:block'
          />
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-12 gap-16 items-center'>
          {/* Lado do Texto */}
          <div className='lg:col-span-7 space-y-8 order-1 lg:order-2'>
            <header className='space-y-4'>
              <motion.span
                variants={fadeInUp}
                className='text-primary font-mono tracking-[0.3em] text-sm uppercase block'
              >
                Identidade & Origem
              </motion.span>
              <motion.blockquote
                variants={fadeInUp}
                className='border-l-4 border-primary pl-6 italic text-slate-100 text-3xl md:text-4xl font-medium leading-tight'
              >
                “Nasci e me criei Cavalcante, mas a poesia me quis candeeiro”.
              </motion.blockquote>
            </header>

            <motion.div
              variants={containerVariants}
              className='space-y-6 text-slate-400 leading-relaxed text-lg'
            >
              <motion.p variants={fadeInUp}>
                O porquê do Candeeiro é uma pergunta recorrente: desde quando o
                menino José Luiz Cavalcante passou a se chamar Zé Luiz do
                Candeeiro? Essa história remonta ao ano de 2008...
              </motion.p>

              <motion.p variants={fadeInUp}>
                Em meados de 2012, o encontro com <strong>Robson Araújo</strong>{' '}
                e <strong>Redlhey Michael</strong> fez com que criássemos o{' '}
                <span className='text-primary font-semibold italic'>
                  Candeeiro Encantado
                </span>
                ...
              </motion.p>

              {/* Box de Citação / Destaque */}
              <motion.div
                variants={fadeInUp}
                className='bg-secondary/20 p-6 rounded-lg border-l-2 border-primary/30 space-y-4 shadow-sm'
              >
                <p>O que nos unia era o “Candeeiro”:</p>
                <p className='italic text-foreground/80'>
                  — Quem vai tocar? Zé Luiz! Que Zé Luiz? Da UEPB? Sim, Zé Luiz
                  do Candeeiro.
                </p>
                <p className='font-black text-primary text-2xl uppercase tracking-tighter'>
                  Estava, portanto, batizado!
                </p>
              </motion.div>

              <motion.p
                variants={fadeInUp}
                className='text-xs font-light uppercase tracking-[0.2em] text-primary/80 pt-4'
              >
                A mandala foi concebida pelos artistas Matheus e Rosângela da
                Parabólica Design.
              </motion.p>
            </motion.div>
          </div>

          <motion.div
            variants={scaleIn}
            className='lg:col-span-5 relative group order-2 lg:order-1'
          >
            <div className='absolute inset-0 bg-white rounded-full blur-[110px] opacity-90 pointer-events-none scale-90' />

            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className='absolute inset-0 bg-primary rounded-full blur-[130px] pointer-events-none'
            />

            <div className='relative z-10 flex justify-center'>
              <motion.div
                whileHover={{ rotate: 5, scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                <Image
                  src={mandala}
                  alt='Mandala Zé Luiz do Candeeiro'
                  width={500}
                  height={500}
                  priority
                  className='w-full max-w-sm md:max-w-md drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-300'
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
