'use client'

import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { generateSlugUrl } from '../lib/lslug'
import { usePostContext } from '../context/PostsContext'

export default function Fragment() {
  const { posts, loading, fetchPosts } = usePostContext()
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    fetchPosts({
      published: true,
      limit: 9,
    })
  }, [])

  if (!posts.length || loading) return null

  return (
    <section ref={sectionRef} className='py-24 md:py-32 bg-surface'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-12 md:mb-16'>
          <div>
            <h2 className='text-3xl md:text-4xl font-bold mb-3'>Fragmentos</h2>
            <p className='text-muted'>Últimas publicações e reflexões</p>
          </div>

          <Link
            href='/poesia'
            className='hidden md:flex items-center text-primary hover:opacity-80 transition'
          >
            Ver tudo
            <ArrowRight className='w-4 h-4 ml-2' />
          </Link>
        </div>

        <div className='grid md:grid-cols-2 gap-6 md:gap-8'>
          {posts.map((item) => {
            const slugUrl = generateSlugUrl(item.id, item.title)
            return (
              <motion.div
                key={item.id}
                whileHover={{ y: -10 }}
                className='relative h-80 md:h-100 rounded-xl overflow-hidden group'
              >
                {item.coverImage && (
                  <img
                    src={item.coverImage}
                    alt={item.title}
                    className='object-cover w-full h-full group-hover:scale-105 transition duration-700'
                  />
                )}

                <div className='absolute inset-0 bg-linear-to-t from-background via-background/60 to-transparent' />

                <div className='absolute bottom-0 p-6 md:p-8'>
                  <span className='text-primary text-xs md:text-sm uppercase tracking-widest'>
                    {item.section}
                  </span>

                  <h3 className='text-xl md:text-3xl font-bold mt-2'>
                    {item.title}
                  </h3>
                  <Link href={`/post/${slugUrl}`}>
                    <div
                      className={`
                      prose prose-invert prose-lg max-w-none
                      ${item.section === 'POESIA'
                          ? 'font-serif text-center'
                          : 'font-sans text-left'
                        }
                    `}
                    >
                      <div dangerouslySetInnerHTML={{ __html: item.content }} />
                    </div>
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>

        <div className='flex justify-center mt-10 md:hidden'>
          <Link
            href='/poesia'
            className='flex items-center gap-2 text-primary font-medium'
          >
            Ver tudo
            <ArrowRight className='w-4 h-4' />
          </Link>
        </div>
      </div>
    </section>
  )
}