import { Footer } from '@/app/components/Footer'
import { Navbar } from '@/app/components/Navbar'
import { getPostByIdAction, getPostBySlugAction, getPostsAction } from '@/app/actions/posts'
import { Post } from '@/app/types/post'
import PostView from './components/PostView'
import GoBack from './components/GoBack'
import { Metadata } from 'next'

interface PageProps {
  params: Promise<{ id?: string; slug?: string }>
}

// 1. GERAÇÃO DE METADADOS (SERVER-SIDE)
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params
  const { slug, id } = resolvedParams

  let post: Post | null = null

  if (slug) {
    const res = await getPostBySlugAction(slug)
    post = res.post as Post
  } else if (id) {
    const res = await getPostByIdAction(id)
    post = res.post as Post
  }

  if (!post) {
    return { title: 'Publicação não encontrada' }
  }

  const cleanDescription = post.content
    ?.replace(/<[^>]*>/g, '')
    .slice(0, 160)

  return {
    title: `${post.title} | Zé Luiz Cavalcante`,
    description: cleanDescription || 'Artigo publicado por Zé Luiz Cavalcante',
    openGraph: {
      title: post.title,
      description: cleanDescription,
      type: 'article',
      publishedTime: new Date(post.createdAt).toISOString(),
      siteName: 'Zé Luiz Cavalcante',
      images: post.coverImage ? [{ url: post.coverImage }] : [],
    },
  }
}

// 2. PÁGINA PRINCIPAL (SERVER COMPONENT)
export default async function Page({ params }: PageProps) {
  const { slug, id } = await params

  let post: Post | null = null
  let posts: Post[] = []

  try {
    // Busca direta e eficiente do post atual
    if (slug) {
      const res = await getPostBySlugAction(slug)
      post = (res.post as Post) || null
    } else if (id) {
      const res = await getPostByIdAction(id)
      post = (res.post as Post) || null
    }

    // Busca os demais posts (apenas se necessário para sugestões/relacionados dentro do PostView)
    const { posts: fetchedPosts } = await getPostsAction({
      published: true,
      limit: 10,
    })
    posts = (fetchedPosts as Post[]) || []
  } catch (error) {
    console.error('Erro ao carregar o post no servidor:', error)
  }

  if (!post) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-background text-white px-6 pt-32">
          <div className="max-w-3xl mx-auto">
            <GoBack parentPath="/poesia" parentName="Poesia & Música" />
            <div className="flex items-center justify-center mt-32">
              <div className="text-center">
                <h1 className="text-2xl font-serif mb-2">Publicação não encontrada</h1>
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
      <PostView post={post} posts={posts} />
      <Footer />
    </>
  )
}