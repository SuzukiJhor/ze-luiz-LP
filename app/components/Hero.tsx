'use client'

import { BookOpen, Music } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero () {
  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden bg-background transition-colors duration-500'>
      {/* Gradiente de transição para a próxima seção */}
      <div
        className='absolute bottom-0 left-0 w-full h-40 
                bg-linear-to-t from-background via-background/80 to-transparent 
                z-10 pointer-events-none'
      />

      {/* Imagem de Fundo com opacidade adaptável */}
      <div
        className='absolute inset-0 bg-cover bg-center opacity-10 dark:opacity-20 grayscale-[50%] dark:grayscale-0 transition-all duration-700'
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop)'
        }}
      />

      {/* Overlay: No light é um véu branco, no dark é preto */}
      <div className='absolute inset-0 bg-white/40 dark:bg-black/60 transition-colors duration-500' />

      {/* Glow central dinâmico */}
      <div className='absolute inset-0 flex items-center justify-center pointer-events-none'>
        <div className='w-100 h-100 md:w-150 md:h-150 bg-primary/10 dark:bg-primary/20 blur-[120px] md:blur-[160px] rounded-full' />
      </div>

      <div className='max-w-7xl mx-auto px-6 text-center relative z-20 flex flex-col items-center justify-center min-h-[80vh]'>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className='text-primary tracking-[0.3em] uppercase mb-6 text-sm md:text-base font-medium'>
            Cultura & Educação
          </h2>

          <h1 className='text-5xl md:text-7xl lg:text-8xl font-bold font-display mb-8 leading-[1.05] tracking-tight'>
            {/* Texto principal: zinc no light, white no dark */}
            <span className='block text-zinc-900 dark:text-white drop-shadow-sm dark:drop-shadow-[0_10px_40px_rgba(0,0,0,0.9)] transition-colors duration-500'>
              Zé Luiz do
            </span>

            {/* Candeeiro com gradiente que se adapta */}
            <span className='block bg-linear-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent dark:from-white dark:via-white dark:to-white/60'>
              Candeeiro
            </span>
          </h1>

          <p className='text-xl md:text-2xl text-zinc-600 dark:text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed font-body'>
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

      {/* Mouse Scroll Indicator */}
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
