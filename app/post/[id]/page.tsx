'use client'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { Footer } from '@/app/components/Footer'
import { Navbar } from '@/app/components/Navbar'
import { getPostsAction } from '@/app/actions/posts' // Importando a action do Prisma
import { Post } from '@/app/types/post'
import { Loader2 } from 'lucide-react'
import PostView from './components/PostView'

export default function Page () {
  const params = useParams()
  const [post, setPost] = useState<Post | null>(null)
  const [loading, setLoading] = useState(true)

  // Extrair o ID da URL com segurança
  const id = Array.isArray(params.id) ? params.id[0] : params.id

  useEffect(() => {
    async function fetchPost () {
      if (!id) return

      try {
        setLoading(true)
        const allPosts = await getPostsAction()
        // No Prisma, o ID é numérico, então convertemos o id da URL
        const foundPost = allPosts.find(p => p.id === Number(id))

        if (foundPost) {
          setPost(foundPost as Post)
        }
      } catch (error) {
        console.error('Erro ao carregar o post:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPost()
  }, [id]) // Re-executa se o ID mudar

  // 1. Estado de Carregamento
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

  // 2. Estado de Não Encontrado
  if (!post) {
    return (
      <>
        <Navbar />
        <div className='min-h-screen flex items-center justify-center bg-background text-white'>
          <div className='text-center'>
            <h1 className='text-2xl font-serif mb-2'>
              Publicação não encontrada
            </h1>
            <p className='text-muted text-sm'>
              O link pode estar quebrado ou a postagem foi removida.
            </p>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  // 3. Renderização do Post
  return (
    <>
      <Navbar />
      <PostView post={post} />
      <Footer />
    </>
  )
}
