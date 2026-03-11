import { Ghost } from 'lucide-react'
import { motion } from 'framer-motion'

export default function EmptyPosts () {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='flex flex-col items-center justify-center py-24 px-4 text-center border border-dashed border-white/10 rounded-3xl bg-white/5'
    >
      <div className='bg-primary/10 p-4 rounded-full mb-4'>
        <Ghost className='w-10 h-10 text-primary/40' />
      </div>
      <p className='text-muted-foreground max-w-xs mx-auto text-sm leading-relaxed'>
        Ainda não há poesias ou músicas publicadas nesta coleção. Volte em breve
        para novos versos.
      </p>
    </motion.div>
  )
}
