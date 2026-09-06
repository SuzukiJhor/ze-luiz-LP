'use client'

import { motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { PostCard } from '@/app/components/PostCard'
import EmptyPosts from '@/app/poesia/components/EmptyState'
import DocenciaPostTitleSection from './DocenciaPostTitleSection'
import { Pagination } from '@/app/components/Pagination'
import { usePostContext } from '@/app/context/PostsContext'

export default function DocenciaPostsSection() {
    const { posts, pagination, loading, fetchPosts } = usePostContext()
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        fetchPosts({
            section: 'DOCENCIA',
            published: true,
            limit: 6,
            page: pagination.page || 1,
        })
    }, [pagination.page])

    const handlePageChange = (newPage: number) => {
        fetchPosts({
            section: 'DOCENCIA',
            published: true,
            limit: 6,
            page: newPage,
        })

        sectionRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    }

    return (
        <section ref={sectionRef} className='relative py-20 px-6 bg-surface'>
            <DocenciaPostTitleSection title='Publicações Acadêmicas & Docência' />

            <div className='max-w-6xl mx-auto'>
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
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <PostCard post={post} />
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>

            <Pagination
                totalPages={pagination.totalPages}
                page={pagination.page}
                loading={loading}
                handlePageChange={handlePageChange}
            />
        </section>
    )
}