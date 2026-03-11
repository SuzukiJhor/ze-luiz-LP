'use client'

import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { mockFragments } from '../constant/fragments'
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

        // Aplicando seus filtros: Seção POESIA, Publicado e com Subtítulo
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

  return (
    <section className='py-32 bg-surface'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='flex justify-between items-end mb-16'>
          <div>
            <h2 className='text-4xl font-bold mb-4'>Fragmentos</h2>
            <p className='text-muted'>Últimas publicações e reflexões</p>
          </div>

          <Link
            href='/poesia'
            className='hidden md:flex items-center text-primary'
          >
            Ver tudo
            <ArrowRight className='w-4 h-4 ml-2' />
          </Link>
        </div>

        <div className='grid md:grid-cols-2 gap-8'>
          {posts.map(item => (
            <motion.div
              key={item.id}
              whileHover={{ y: -10 }}
              className='relative h-100 rounded-xl overflow-hidden group'
            >
              <img
                src={item.coverImage}
                alt={item.title}
                className='object-cover w-full h-full group-hover:scale-105 transition duration-700'
              />

              <div className='absolute inset-0 bg-linear-to-t from-background via-background/60 to-transparent' />

              <div className='absolute bottom-0 p-8'>
                <span className='text-primary text-sm uppercase tracking-widest'>
                  {item.section}
                </span>

                <h3 className='text-3xl font-bold mt-2'>{item.title}</h3>

                <p className='text-muted mt-2 line-clamp-2'>{item.content}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
