'use client'

import { motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'
import { Post } from '@/app/types/post'
import { useEffect, useState } from 'react'
import { PostCard } from '@/app/components/PostCard'
import { getPostsAction } from '@/app/actions/posts'
import EmptyPosts from '@/app/poesia/components/EmptyState'
import DocenciaPostTitleSection from './DocenciaPostTitleSection'

export default function DocenciaPostsSection() {
    const [posts, setPosts] = useState<Post[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchData() {
            try {
                const allPosts = await getPostsAction()

                const filtered = allPosts.filter(
                    post => post.published && post.section === 'DOCENCIA'
                ) as Post[]

                setPosts(filtered)
            } catch (error) {
                console.error('Erro ao carregar posts de docência:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    return (
        <section className='relative py-20 px-6 bg-surface'>
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
        </section>
    )
}