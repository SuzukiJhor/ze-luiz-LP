'use client'

import Link from 'next/link'
import Image from 'next/image'
import mandala from '../assets/mandala-remove.png'
import { BookOpen, Music } from 'lucide-react'
import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion'

export default function Hero () {
  const { scrollY } = useScroll()

  const y = useTransform(scrollY, [0, 500], [0, -150])

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove (e: React.MouseEvent<HTMLDivElement>) {
    const { clientX, clientY, currentTarget } = e
    const { width, height, left, top } = currentTarget.getBoundingClientRect()

    const x = (clientX - left - width / 2) / 40
    const y = (clientY - top - height / 2) / 40

    mouseX.set(x)
    mouseY.set(y)
  }

  return (
    <section
      onMouseMove={handleMouseMove}
      className='relative min-h-screen flex items-center justify-center overflow-hidden bg-background transition-colors duration-500'
    >
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.25),transparent_60%)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]' />
      </div>

      <div
        className='absolute bottom-0 left-0 w-full h-40 
        bg-linear-to-t from-background via-background/80 to-transparent 
        z-10 pointer-events-none'
      />

      <motion.div
        style={{
          y,
          x: mouseX,
          rotateY: mouseX,
          rotateX: mouseY
        }}
        className='absolute inset-0 flex items-start md:items-center justify-center pt-24 md:pt-0 pointer-events-none'
      >
        <Image
          src={mandala}
          alt='Mandala decorativa'
          fill
          className='object-contain opacity-30 md:opacity-35 scale-110 md:scale-125 mix-blend-multiply dark:mix-blend-screen'
        />
      </motion.div>

      <div className='absolute inset-0 bg-white/15 dark:bg-black/30 transition-colors duration-500' />

      <div className='absolute inset-0 flex items-center justify-center pointer-events-none'>
        <div className='w-80 h-80 md:w-125 md:h-125 bg-primary/5 dark:bg-primary/10 blur-[120px] rounded-full' />
      </div>

      <div className='max-w-7xl mx-auto px-6 text-center relative z-20 flex flex-col items-center justify-center min-h-[80vh]'>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className='text-primary tracking-[0.35em] uppercase mb-6 text-xs md:text-sm font-medium'>
            Cultura & Educação
          </h2>

          <h1 className='text-4xl md:text-6xl lg:text-7xl font-semibold font-display mb-8 leading-[1.1] tracking-tight'>
            <span className='block text-zinc-800 dark:text-white/90 transition-colors duration-500'>
              Zé Luiz do
            </span>

            <span className='block bg-linear-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent dark:from-white dark:via-white dark:to-white/60'>
              Candeeiro
            </span>
          </h1>

          <p className='text-lg md:text-xl text-zinc-600 dark:text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed font-body'>
            Um espaço dedicado à{' '}
            <span className='text-primary font-medium'>poesia</span>, à{' '}
            <span className='text-primary font-medium'>música</span> e à arte de{' '}
            <span className='text-primary font-medium'>educar.</span>
          </p>

          <div className='flex flex-col sm:flex-row gap-6 justify-center'>
            <Link
              href='/docente'
              className='px-8 py-4 rounded-full bg-surface-muted hover:bg-surface border border-border text-foreground backdrop-blur flex items-center gap-3 transition-all hover:shadow-md'
            >
              <BookOpen className='w-5 h-5 text-primary' />
              Trajetória Docente
            </Link>

            <Link
              href='/poesia'
              className='px-8 py-4 rounded-full bg-primary text-primary-foreground flex items-center gap-3 shadow-lg dark:shadow-primary/20 hover:scale-105 transition-all'
            >
              <Music className='w-5 h-5' />
              Poesia & Música
            </Link>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className='absolute bottom-10 left-1/2 -translate-x-1/2 z-20'
      >
        <div className='w-6 h-10 border-2 border-zinc-400 dark:border-white/20 rounded-full flex justify-center p-1'>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className='w-1.5 h-1.5 bg-zinc-600 dark:bg-white rounded-full'
          />
        </div>
      </motion.div>
    </section>
  )
}
