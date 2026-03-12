'use client'

import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Post } from '../types/post'
import { getPostsAction } from '../actions/posts'

export default function Fragment () {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData () {
      try {
        const allPosts = await getPostsAction()

        const filtered = allPosts.filter(
          post =>
            post.published && post.subtitle !== null && post.subtitle !== ''
        ) as Post[]

        setPosts(filtered)
      } catch (error) {
        console.error('Erro ao carregar posts:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (!posts.length || loading) return null

  return (
    <section className='py-24 md:py-32 bg-surface'>
      <div className='max-w-7xl mx-auto px-6'>
        {/* HEADER */}

        <div className='flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-12 md:mb-16'>
          <div>
            <h2 className='text-3xl md:text-4xl font-bold mb-3'>Fragmentos</h2>

            <p className='text-muted'>Últimas publicações e reflexões</p>
          </div>

          {/* BOTÃO DESKTOP */}

          <Link
            href='/poesia'
            className='hidden md:flex items-center text-primary hover:opacity-80 transition'
          >
            Ver tudo
            <ArrowRight className='w-4 h-4 ml-2' />
          </Link>
        </div>

        {/* POSTS */}

        <div className='grid md:grid-cols-2 gap-6 md:gap-8'>
          {posts.map(item => (
            <motion.div
              key={item.id}
              whileHover={{ y: -10 }}
              className='relative h-80 md:h-100 rounded-xl overflow-hidden group'
            >
              <img
                src={item.coverImage}
                alt={item.title}
                className='object-cover w-full h-full group-hover:scale-105 transition duration-700'
              />

              <div className='absolute inset-0 bg-linear-to-t from-background via-background/60 to-transparent' />

              <div className='absolute bottom-0 p-6 md:p-8'>
                <span className='text-primary text-xs md:text-sm uppercase tracking-widest'>
                  {item.section}
                </span>

                <h3 className='text-xl md:text-3xl font-bold mt-2'>
                  {item.title}
                </h3>

                <p className='text-muted mt-2 line-clamp-2 text-sm md:text-base'>
                  {item.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTÃO MOBILE */}

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
