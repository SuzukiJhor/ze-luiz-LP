import { BookOpen } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Quote () {
  return (
    <section className='py-24 px-6 bg-surface border-y border-border'>
      <BookOpen className='w-12 h-12 text-primary mx-auto mb-6' />

      <div className='max-w-3xl mx-auto text-center relative'>
        <span className='absolute -top-10 -left-6 text-[120px] text-[#8b5a2b]/30 font-serif leading-none'>
          “
        </span>

        <span className='absolute -bottom-16 -right-6 text-[120px] text-[#8b5a2b]/30 font-serif leading-none'>
          ”
        </span>

        <div className='w-20 h-px bg-[#8b5a2b] mx-auto mb-10 opacity-60' />

        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className='text-3xl md:text-4xl font-serif leading-relaxed italic'
        >
          Zé Luiz do Candeeiro é a beleza do cotidiano traduzida em arte.
        </motion.blockquote>

        <cite className='block mt-10 text-[#c9a27b] text-lg not-italic tracking-wide'>
          — Ana Laura Ferreira Cavalcante
        </cite>
      </div>
    </section>
  )
}
