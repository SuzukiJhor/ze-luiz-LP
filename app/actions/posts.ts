'use server'

import { revalidatePath } from 'next/cache'
import { prisma } from '../lib/prisma' // Importe sua instância do Prisma
import { PostSection } from '@prisma/client' // Use o enum gerado pelo Prisma

// Buscar todos os posts do Neon
export async function getPostsAction () {
  try {
    const posts = await prisma.post.findMany({
      orderBy: { createdAt: 'desc' } // Opcional: posts mais recentes primeiro
    })
    return posts
  } catch (error) {
    console.error('Erro ao buscar posts:', error)
    return []
  }
}

export async function savePostAction (formData: FormData) {
  const id = formData.get('id')

  // Extração dos dados do FormData
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
      // Lógica de EDITAR no Prisma
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
          // updatedAt é atualizado automaticamente pelo Prisma
        }
      })
    } else {
      // Lógica de CRIAR no Prisma
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

    // Revalidar as rotas para atualizar o cache
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
    // Primeiro buscamos o estado atual
    const post = await prisma.post.findUnique({
      where: { id: Number(id) },
      select: { published: true }
    })

    if (!post) return { error: 'Post não encontrado' }

    // Invertemos o valor de published
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
