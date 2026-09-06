'use client'

import { motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { PostCard } from '@/app/components/PostCard'
import PoesiaPostTitleSection from './PoesiaPostTitleSection'
import EmptyPosts from './EmptyState'
import { Pagination } from '@/app/components/Pagination'
import { usePostContext } from '@/app/context/PostsContext'

export default function PoesiaPostsSection() {
  const { posts, pagination, loading, fetchPosts } = usePostContext()
  const [currentPage, setCurrentPage] = useState(1)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    fetchPosts({
      section: 'POESIA',
      published: true,
      limit: 6,
      page: currentPage,
    })
  }, [currentPage])

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage)

    sectionRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return (
    <section ref={sectionRef} className='relative py-32 px-6 bg-surface overflow-hidden'>
      <div
        className='absolute top-0 left-0 w-full h-56 
      bg-linear-to-b from-background via-background/60 to-transparent 
      pointer-events-none z-10'
      />

      <PoesiaPostTitleSection title='Poesia & Música' />

      <div className='max-w-6xl mx-auto'>
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 6, repeat: Infinity }}
          className='absolute -top-10 -left-10 text-6xl opacity-10'
        >
          ✦
        </motion.div>

        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 7, repeat: Infinity }}
          className='absolute -bottom-10 -right-10 text-6xl opacity-10'
        >
          ✦
        </motion.div>

        <section>
          <div className='flex items-center mb-8'>
            <h2 className='text-2xl font-serif font-bold text-white'>
              Coleção Completa
            </h2>
          </div>

          {loading ? (
            <div className='flex justify-center py-20'>
              <Loader2 className='w-8 h-8 animate-spin text-primary' />
            </div>
          ) : posts.length === 0 ? (
            <EmptyPosts />
          ) : (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {posts.map((post, idx) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className={idx % 3 === 0 ? 'sm:col-span-2' : 'col-span-1'}
                >
                  <PostCard post={post} />
                </motion.div>
              ))}
            </div>
          )}
        </section>
      </div>

      <div
        className='absolute bottom-0 left-0 w-full h-56 
      bg-linear-to-t from-background via-background/60 to-transparent 
      pointer-events-none'
      />

      <Pagination
        totalPages={pagination?.totalPages || 1}
        page={currentPage}
        loading={loading}
        handlePageChange={handlePageChange}
      />
    </section>
  )
}