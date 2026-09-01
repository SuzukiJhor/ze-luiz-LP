'use server'

import { prisma } from '../lib/prisma'
import { revalidatePath } from 'next/cache'
import sanitizeHtml from 'sanitize-html'
import { PostSection } from '../types/post'
import { extractIdFromSlug } from '../lib/lslug'

interface GetPostOptions {
  section?: PostSection | 'ALL' | string | null
  published?: boolean
  page?: number
  limit?: number
}

export async function getPostsAction(options: GetPostOptions = {}) {
  const { section, published = true, page = 1, limit = 9 } = options
  const skip = (page - 1) * limit
  const shouldFilterSection = Boolean(section) && section !== 'ALL'

  try {
    const where = {
      ...(published !== undefined && { published }),
      ...(shouldFilterSection && { section: section as PostSection }),
    }

    const [posts, total] = await Promise.all([
      prisma.post.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit,
      }),
      prisma.post.count({ where }),
    ])

    return {
      posts,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    }
  } catch (error) {
    console.error('Erro ao buscar posts:', error)
    return { posts: [], pagination: { total: 0, page: 1, limit, totalPages: 0 } }
  }
}

export async function savePostAction(formData: FormData) {
  const id = formData.get('id')

  const title = formData.get('title') as string
  const subtitle = formData.get('subtitle') as string
  const rawContent = formData.get('content') as string

  const content = sanitizeHtml(rawContent, {
    allowedTags: [
      'p', 'b', 'i', 'em', 'strong', 'u',
      'ul', 'ol', 'li',
      'a', 'blockquote', 'br',
      'h1', 'h2', 'h3',
      'span', 'div'
    ],
    allowedAttributes: {
      a: ['href', 'target', 'rel'],
      span: ['style'],
      p: ['style']
    }
  })
  const section = formData.get('section') as PostSection
  const category = formData.get('category') as string
  const coverImage = formData.get('coverImage') as string
  const document = formData.get('document') as string
  const audio = formData.get('audio') as string

  try {
    if (id && id !== '') {
      await prisma.post.update({
        where: { id: Number(id) },
        data: {
          title,
          subtitle,
          content,
          section,
          category,
          coverImage: coverImage || null,
          document: document || null,
          audio: audio || null
        }
      })
    } else {
      await prisma.post.create({
        data: {
          title,
          subtitle,
          content,
          section,
          category,
          published: false,
          coverImage: coverImage || null,
          document: document || null,
          audio: audio || null
        }
      })
    }

    revalidatePath('/admin')
    revalidatePath('/docente')
    revalidatePath('/poesia')

    return { success: true }
  } catch (error) {
    console.error('Erro ao salvar post:', error)
    return { error: 'Falha ao salvar no banco de dados' }
  }
}

export async function deletePostAction(id: number | string) {
  try {
    await prisma.post.delete({
      where: { id: Number(id) }
    })

    revalidatePath('/admin')
    return { success: true }
  } catch (error) {
    console.error('Erro ao deletar post:', error)
    return { error: 'Falha ao remover post' }
  }
}

export async function togglePublishAction(id: number | string) {
  try {
    const post = await prisma.post.findUnique({
      where: { id: Number(id) },
      select: { published: true }
    })

    if (!post) return { error: 'Post não encontrado' }

    await prisma.post.update({
      where: { id: Number(id) },
      data: { published: !post.published }
    })

    revalidatePath('/admin')
    return { success: true }
  } catch (error) {
    console.error('Erro ao alterar status:', error)
    return { error: 'Falha ao alterar status de publicação' }
  }
}

export async function getPostByIdAction(id: number | string) {
  const numericId = Number(id)
  if (isNaN(numericId) || numericId <= 0) {
    return { error: 'ID inválido fornecido.' }
  }

  try {
    const post = await prisma.post.findUnique({
      where: { id: numericId },
    })
    if (!post) {
      return { error: 'Publicação não encontrada.' }
    }
    return { post }
  } catch (error) {
    console.error(`Erro ao buscar post com ID ${id}:`, error)
    return { error: 'Falha ao buscar publicação no banco de dados.' }
  }
}

export async function getPostBySlugAction(slugParam: string) {
  const numericId = extractIdFromSlug(slugParam)
  if (!numericId || isNaN(numericId) || numericId <= 0) {
    return { error: 'URL ou ID inválido fornecido.' }
  }
  try {
    const post = await prisma.post.findUnique({
      where: { id: numericId },
    })
    if (!post) {
      return { error: 'Publicação não encontrada.' }
    }
    return { post }
  } catch (error) {
    console.error(`Erro ao buscar post:`, error)
    return { error: 'Falha ao buscar publicação no banco de dados.' }
  }
}