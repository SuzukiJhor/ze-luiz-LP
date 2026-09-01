import { Footer } from '@/app/components/Footer'
import { Navbar } from '@/app/components/Navbar'
import { getPostByIdAction, getPostBySlugAction, getPostsAction } from '@/app/actions/posts'
import { Post } from '@/app/types/post'
import { Loader2 } from 'lucide-react'
import PostView from './components/PostView'
import GoBack from './components/GoBack'
import { generateSlugUrl } from '@/app/lib/lslug'
import { Metadata } from 'next'

interface PageProps {
  params: Promise<{ id: string; slug?: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params
  const identifier = resolvedParams.slug || resolvedParams.id

  if (!identifier) {
    return { title: 'Publicação não encontrada' }
  }

  const { post } = resolvedParams.slug
    ? await getPostBySlugAction(resolvedParams.slug)
    : await getPostByIdAction(identifier)

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

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params
  const slug = resolvedParams.slug
  const id = resolvedParams.id

  let post: Post | null = null
  let posts: Post[] = []

  try {
    const { posts: fetchedPosts } = await getPostsAction({
      published: true,
      limit: 100,
    })
    posts = (fetchedPosts as Post[]) || []

    if (slug) {
      const { post: postBySlug } = await getPostBySlugAction(slug)
      post = (postBySlug as Post) || posts.find((p) => generateSlugUrl(p.id, p.title) === slug) || null
    } else if (id) {
      post = posts.find((p) => p.id === Number(id)) || null
    }
  } catch (error) {
    console.error('Erro ao carregar o post no servidor:', error)
  }

  if (!post) {
    const parentPath = '/poesia'
    const parentName = 'Poesia & Música'

    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-background text-white px-6 pt-32">
          <div className="max-w-3xl mx-auto">
            <GoBack parentPath={parentPath} parentName={parentName} />
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