'use client'

import { motion } from 'framer-motion'

export default function Loading () {
  return (
    <div className='fixed inset-0 z-100 flex items-center justify-center bg-background'>
      <div className='relative flex flex-col items-center gap-4'>
        {/* Círculo de luz pulsante (Candeeiro) */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className='w-24 h-24 bg-primary/20 rounded-full blur-2xl absolute'
        />

        {/* Ícone ou Elemento Central */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'linear'
          }}
          className='relative w-12 h-12 border-2 border-primary/30 border-t-primary rounded-full'
        />

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className='text-xs font-mono tracking-[0.3em] text-primary uppercase animate-pulse'
        >
          Acesa a chama...
        </motion.span>
      </div>
    </div>
  )
}
