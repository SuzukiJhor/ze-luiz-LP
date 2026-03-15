'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { Footer } from '@/app/components/Footer'
import { Navbar } from '@/app/components/Navbar'
import { getPostsAction } from '@/app/actions/posts'
import { Post } from '@/app/types/post'
import { Loader2 } from 'lucide-react'
import PostView from './components/PostView'
import GoBack from './components/GoBack'

export default function Page() {
  const params = useParams()

  const [post, setPost] = useState<Post | null>(null)
  const [posts, setPosts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  const isPoesia = post?.section === 'POESIA'
  const parentPath = isPoesia ? '/poesia' : '/poesia'
  const parentName = 'Poesia & Música'

  const id = Array.isArray(params.id) ? params.id[0] : params.id

  useEffect(() => {
    async function fetchPost() {
      if (!id) return

      try {
        setLoading(true)

        const allPosts = await getPostsAction()

        setPosts(allPosts)

        const filtered = allPosts.filter(
          post => post.published === true
        ) as Post[]

        const foundPost = filtered.find(p => p.id === Number(id))

        if (foundPost) setPost(foundPost as Post)
      } catch (error) {
        console.error('Erro ao carregar o post:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPost()
  }, [id])

  if (loading) {
    return (
      <>
        <Navbar />

        <div className='min-h-screen flex items-center justify-center bg-background text-white'>
          <Loader2 className='w-8 h-8 animate-spin text-primary' />
        </div>
      </>
    )
  }

  if (!post) {
    return (
      <>
        <Navbar />

        <div className="min-h-screen bg-background text-white px-6 pt-32 ">
          <div className='max-w-3xl mx-auto'>

            <GoBack parentPath={parentPath} parentName={parentName} />

            <div className="flex items-center justify-center mt-32">
              <div className="text-center">
                <h1 className="text-2xl font-serif mb-2">
                  Publicação não encontrada
                </h1>

                <p className="text-muted text-sm">
                  O link pode estar quebrado ou a postagem foi removida.
                </p>
              </div>
            </div>
          </div>

        </div>

        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />

      <PostView
        post={post}
        posts={posts}
      />

      <Footer />
    </>
  )
}