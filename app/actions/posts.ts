'use server'

import { prisma } from '../lib/prisma'
import { revalidatePath } from 'next/cache'
import { PostSection } from '@prisma/client'

export async function getPostsAction () {
  try {
    const posts = await prisma.post.findMany({
      orderBy: { createdAt: 'desc' }
    })
    return posts
  } catch (error) {
    console.error('Erro ao buscar posts:', error)
    return []
  }
}

export async function savePostAction (formData: FormData) {
  const id = formData.get('id')

  const title = formData.get('title') as string
  const subtitle = formData.get('subtitle') as string
  const content = formData.get('content') as string
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

export async function deletePostAction (id: number | string) {
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

export async function togglePublishAction (id: number | string) {
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
