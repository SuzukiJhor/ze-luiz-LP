'use client'

import { motion } from 'framer-motion'

export default function TextTimeline () {
  return (
    <section className='relative py-32 px-6 bg-surface overflow-hidden'>
      <div
        className='absolute top-0 left-0 w-full h-56
            bg-linear-to-b from-background via-background/60 to-transparent
            pointer-events-none z-10'
      />

      <div className='max-w-4xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='text-primary tracking-[0.3em] uppercase mb-4'>
            Professor Doutor
          </h2>

          <h1 className='text-4xl md:text-5xl font-serif font-bold text-white'>
            Zé Luiz Cavalcante
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className='space-y-8 text-lg leading-relaxed text-muted'
        >
          <p>
            Uma vida dedicada à docência. A trajetória docente teve início em
            1997, aos 16 anos, como professor de Informática em Itaíba–PE, onde
            concluiu o Magistério. Em 1999, de volta à terra natal, passou a
            ministrar aulas como professor substituto de Matemática na Escola
            Estadual José Emílio de Melo.
          </p>

          <p>
            Em 2003, formou-se em Licenciatura em Ciências, com habilitação em
            Matemática, pela AESA–CESA, em Arcoverde, e ingressou no serviço
            público como professor do município de Tupanatinga, tomando posse no
            dia de seu aniversário. Posteriormente, concluiu a Especialização em
            Programação para o Ensino de Matemática pela UPE, em 2006.
          </p>

          <p>
            Aprovado como professor de Matemática nas redes estaduais de
            Pernambuco e da Paraíba, atuou no ensino de Matemática e Física. Em
            Sertânia–PE, lecionou na Escola Olavo Bilac, conhecida como
            “Academia Verde e Branco”, e também no Colégio Pequeno Príncipe, da
            rede privada.
          </p>

          <p>
            Na Paraíba, exerceu a docência nos municípios da Prata e de
            Monteiro, na Escola Estadual José Leite de Souza. Nesse período,
            iniciou sua trajetória no ensino superior, atuando no curso de
            Pedagogia da UVA, em 2008.
          </p>

          <p>
            Em 2011, tornou-se professor efetivo do IFPB – Campus Campina
            Grande. No mesmo ano, concluiu o Mestrado em Ensino de Ciências e
            Matemática pela UEPB e, em 2018, o Doutorado pelo PPGECM–UFRPE.
          </p>

          <p>
            É professor efetivo do Curso de Licenciatura em Matemática da
            Universidade Estadual da Paraíba (CCHE–UEPB), onde coordenou o
            Núcleo de Arte e Cultura, atuou como coordenador do PIBID Matemática
            no período de 2012 a 2022, fundou o NEPEMAT e a Reunião de Estudos
            em Didática da Matemática.
          </p>

          <p>
            Também exerceu a função de Diretor Adjunto (2014–2016) e atualmente
            atua como Diretor do Centro (2023–2025).
          </p>

          <p>
            Foi Coordenador Nacional do Grupo 14 — Didática da Matemática — da
            Sociedade Brasileira de Educação Matemática (SBEM).
          </p>

          <p>
            Atualmente é docente permanente do Programa de Pós-Graduação em
            Ensino de Ciências e Matemática da UFPE, atuando na formação inicial
            e continuada de professores e participando de grupos de pesquisa na
            área de Educação Matemática.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
