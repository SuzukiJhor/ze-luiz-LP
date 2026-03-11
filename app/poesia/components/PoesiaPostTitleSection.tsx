import { motion } from 'framer-motion'
import { BookText } from 'lucide-react'

export default function PoesiaPostTitleSection ({ title }: { title: string }) {
  return (
    <div className='text-center space-y-4 max-w-3xl mx-auto mb-20'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <BookText className='w-12 h-12 mx-auto mb-6 text-primary' />
        <h1 className='text-4xl md:text-5xl font-serif font-bold text-muted-foreground mb-4'>
          {title}
        </h1>
        <p className='text-lg text-muted-foreground '>
          Expressões artísticas, composições musicais e versos que contam
          histórias do sertão e da vida.
        </p>
      </motion.div>
    </div>
  )
}
