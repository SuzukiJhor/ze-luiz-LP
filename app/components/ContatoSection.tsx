'use client'

import { motion } from 'framer-motion'
import { Mail, Send } from 'lucide-react'

export default function ContatoSection () {
  const azulCandeeiro = 'text-primary'
  const azulBotao = 'bg-primary hover:bg-primary/90'

  // Variantes para animação de entrada
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  const itemLeft: any = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  }

  const itemRight: any = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  }

  return (
    <section id="contato" className='relative py-24 px-6 md:px-12 lg:px-24 bg-linear-to-b from-background via-[#0a0f1a] to-[#020617] overflow-hidden'>
      <motion.div
        className='max-w-7xl mx-auto'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-start'>
          {/* Coluna de Informações */}
          <motion.div className='space-y-6 md:space-y-8' variants={itemLeft}>
            <header className='space-y-4'>
              <motion.h2
                variants={itemLeft}
                className={`text-5xl md:text-7xl font-black tracking-tighter ${azulCandeeiro} uppercase leading-none`}
              >
                CONTATO
              </motion.h2>
              <motion.p
                variants={itemLeft}
                className='text-2xl md:text-4xl font-serif italic text-slate-100 leading-tight md:leading-snug'
              >
                Adquirir livros ou outras mídias? Levar a luz do Candeeiro para
                seu evento cultural ou acadêmico?
              </motion.p>
            </header>

            <motion.p
              variants={itemLeft}
              className='text-lg md:text-xl text-slate-400 leading-relaxed max-w-md'
            >
              Impressões? Sentimentos? Reflexões acadêmicas? É prazer falar
              contigo!
            </motion.p>

            <motion.div variants={itemLeft} className='pt-4'>
              <a
                href='mailto:contato@zeluizdocandeeiro.com.br'
                className={`inline-flex items-center gap-3 text-lg md:text-2xl font-semibold ${azulCandeeiro} hover:brightness-125 transition-all break-all group`}
              >
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <Mail size={24} className='shrink-0' />
                </motion.div>
                contato@zeluizdocandeeiro.com.br
              </a>
            </motion.div>
          </motion.div>

          {/* Coluna do Formulário - Glassmorphism com Animação */}
          <motion.div
            variants={itemRight}
            whileHover={{ y: -5 }}
            className='bg-white/5 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden'
          >
            {/* Brilho laranja sutil animado */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.15, 0.1]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              className='absolute -top-24 -right-24 w-64 h-64 bg-[#c26b2b] rounded-full blur-[100px] pointer-events-none'
            />

            <form className='space-y-6 relative z-10'>
              <div className='grid grid-cols-1 gap-6'>
                <div className='space-y-2'>
                  <label
                    htmlFor='nome'
                    className={`text-xs uppercase tracking-widest font-bold ${azulCandeeiro}`}
                  >
                    Nome
                  </label>
                  <input
                    type='text'
                    id='nome'
                    placeholder='Como se chama?'
                    className='w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-primary transition-all focus:ring-1 focus:ring-primary/30'
                  />
                </div>

                <div className='space-y-2'>
                  <label
                    htmlFor='email'
                    className={`text-xs uppercase tracking-widest font-bold ${azulCandeeiro}`}
                  >
                    E-mail
                  </label>
                  <input
                    type='email'
                    id='email'
                    placeholder='seu@email.com'
                    className='w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-primary transition-all focus:ring-1 focus:ring-primary/30'
                  />
                </div>
              </div>

              <div className='space-y-2'>
                <label
                  htmlFor='mensagem'
                  className={`text-xs uppercase tracking-widest font-bold ${azulCandeeiro}`}
                >
                  Mensagem
                </label>
                <textarea
                  id='mensagem'
                  rows={4}
                  placeholder='Escreva aqui...'
                  className='w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-primary transition-all resize-none focus:ring-1 focus:ring-primary/30'
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type='submit'
                className={`w-full ${azulBotao} text-white font-black tracking-widest py-5 rounded-xl flex items-center justify-center gap-3 transition-all group shadow-xl shadow-primary/10`}
              >
                ENVIAR MENSAGEM
                <Send
                  size={20}
                  className='group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform'
                />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
