'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen } from 'lucide-react'
import { useState } from 'react'

export default function Timeline () {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const timeline = [
    {
      year: '1997',
      title: 'Início da Docência',
      description:
        'Aos 16 anos iniciou sua jornada como professor de informática em Itaíba–PE.',
      content: `
Uma vida dedicada à docência. A trajetória docente teve início em
1997, aos 16 anos, como professor de Informática em Itaíba–PE,
onde concluiu o Magistério.
            `
    },
    {
      year: '2003',
      title: 'Licenciatura em Matemática',
      description:
        'Formou-se em Licenciatura em Ciências com habilitação em Matemática pela AESA–CESA.',
      content: `
Em 2003, formou-se em Licenciatura em Ciências, com habilitação em
Matemática, pela AESA–CESA, em Arcoverde. Nesse período consolidou
sua formação docente e ampliou sua atuação no ensino da Matemática.
            `
    },
    {
      year: '2011',
      title: 'Professor do IFPB',
      description:
        'Ingressou como professor efetivo do Instituto Federal da Paraíba.',
      content: `
Em 2011 tornou-se professor efetivo do Instituto Federal da Paraíba,
Campus Campina Grande. Nesse mesmo período concluiu o Mestrado em
Ensino de Ciências e Matemática pela Universidade Estadual da Paraíba.
            `
    },
    {
      year: '2018',
      title: 'Doutorado',
      description: 'Concluiu doutorado em Ensino de Ciências e Matemática.',
      content: `
Em 2018 concluiu o Doutorado em Ensino de Ciências e Matemática
pelo Programa de Pós-Graduação em Ensino de Ciências e Matemática
(PPGECM–UFRPE), aprofundando suas pesquisas em Didática da Matemática.
            `
    },
    {
      year: 'Atual',
      title: 'UEPB / Pesquisa',
      description:
        'Professor da Universidade Estadual da Paraíba e pesquisador em Educação Matemática.',
      content: `
Atualmente é professor efetivo da Universidade Estadual da Paraíba,
atuando no Curso de Licenciatura em Matemática (CCHE–UEPB).
Também participa da formação inicial e continuada de professores
e integra grupos de pesquisa na área de Educação Matemática,
além de atuar no Programa de Pós-Graduação em Ensino de Ciências
e Matemática da UFPE.
            `
    }
  ]

  return (
    <section className='relative py-32 px-6 bg-surface overflow-hidden'>
      <div className='text-center space-y-4 max-w-3xl mx-auto mt-2'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <BookOpen className='w-12 h-12 mx-auto mb-6 text-primary' />

          <h1 className='text-4xl md:text-5xl font-serif font-bold text-white mb-4'>
            Vida Acadêmica & Docência
          </h1>

          <p className='text-lg text-muted-foreground'>
            Um registro de projetos educacionais, publicações acadêmicas e
            reflexões sobre o ensino.
          </p>
        </motion.div>
      </div>

      <div
        className='absolute top-0 left-0 w-full h-40 
                bg-linear-to-b from-background via-background/80 to-transparent 
                pointer-events-none z-10'
      />

      <div className='max-w-4xl mx-auto text-center relative mt-16'>
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 6, repeat: Infinity }}
          className='absolute -top-16 -left-16 text-6xl opacity-10'
        >
          ✦
        </motion.div>

        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 7, repeat: Infinity }}
          className='absolute -bottom-16 -right-16 text-6xl opacity-10'
        >
          ✦
        </motion.div>

        <div className='max-w-5xl mx-auto'>
          <h2 className='text-4xl font-bold text-primary text-center mb-12'>
            Trajetória
          </h2>

          <p className='text-center text-muted-foreground text-sm mb-16'>
            Clique em uma etapa da linha do tempo para ler mais detalhes
          </p>

          <div className='relative border-l border-border pb-32'>
            {timeline.map((item, index) => (
              <div key={index}>
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  onClick={() =>
                    setSelectedIndex(selectedIndex === index ? null : index)
                  }
                  className='ml-10 mb-6 cursor-pointer group relative'
                >
                  <span className='absolute -left-3 top-2 w-6 h-6 bg-primary rounded-full border-4 border-background' />

                  <div className='p-4 rounded-lg transition-all duration-300 group-hover:bg-white/5 flex flex-col items-center text-center'>
                    <p className='text-sm text-primary mb-2'>{item.year}</p>

                    <h3 className='text-xl font-semibold mb-3 group-hover:text-primary transition'>
                      {item.title}
                    </h3>

                    <p className='text-muted leading-relaxed max-w-md'>
                      {item.description}
                    </p>

                    <p className='text-xs text-primary opacity-0 group-hover:opacity-100 transition mt-3'>
                      Clique para expandir
                    </p>
                  </div>
                </motion.div>

                <AnimatePresence>
                  {selectedIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35 }}
                      className='overflow-hidden ml-10 mb-10'
                    >
                      <div className='border border-border bg-white/5 rounded-lg p-6 text-left max-w-xl'>
                        <p className='text-sm text-muted leading-relaxed whitespace-pre-line'>
                          {item.content}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
