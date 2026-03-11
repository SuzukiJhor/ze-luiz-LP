'use client'

import Link from 'next/link'
import { format } from 'date-fns'
import { Post } from '../types/post'
import { ptBR } from 'date-fns/locale'
import { Calendar, FileText, Music } from 'lucide-react'

interface PostCardProps {
  post: Post
  variant?: 'default' | 'compact'
}

export function PostCard ({ post, variant = 'default' }: PostCardProps) {
  const isDocencia = true
  return (
    <Link href={`/post/${post.id}`}>
      <article
        className={`
        group relative rounded-xl overflow-hidden transition-all duration-300
        bg-background/40 backdrop-blur-md border border-border
        hover:border-primary/40 hover:-translate-y-1 hover:shadow-2xl
        ${
          variant === 'compact'
            ? 'flex items-center gap-4 p-4'
            : 'flex flex-col h-full'
        }
        `}
      >
        {variant === 'default' && (
          <div className='aspect-video w-full overflow-hidden relative bg-black/20'>
            {post.coverImage ? (
              <img
                src={post.coverImage}
                alt={post.title}
                className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-105'
              />
            ) : (
              <div className='w-full h-full flex items-center justify-center bg-linear-to-br from-primary/10 to-transparent'>
                {isDocencia ? (
                  <FileText className='w-12 h-12 text-primary/30' />
                ) : (
                  <Music className='w-12 h-12 text-primary/30' />
                )}
              </div>
            )}

            <div className='absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent' />

            <div className='absolute top-4 right-4'>
              <span
                className='px-3 py-1 text-xs font-medium uppercase tracking-wider 
                  rounded-full backdrop-blur-md border border-white/10
                  bg-background/70 text-primary'
              >
                {post.category}
              </span>
            </div>
          </div>
        )}

        <div
          className={`flex flex-col flex-1 ${
            variant === 'default' ? 'p-6' : ''
          }`}
        >
          <div className='flex items-center gap-2 text-xs text-muted-foreground mb-3'>
            <Calendar size={14} />

            {post.createdAt &&
              format(new Date(post.createdAt), "d 'de' MMMM, yyyy", {
                locale: ptBR
              })}
          </div>

          <h3
            className={`
            font-serif font-bold text-white transition-colors line-clamp-2
            group-hover:text-primary
            ${variant === 'default' ? 'text-xl mb-2' : 'text-lg mb-1'}
            `}
          >
            {post.title}
          </h3>

          {variant === 'default' && post.subtitle && (
            <p className='text-sm text-muted leading-relaxed mb-4 line-clamp-2'>
              {post.subtitle}
            </p>
          )}

          {variant === 'default' && (
            <div
              className='mt-auto pt-4 flex items-center text-sm font-medium text-primary
                            opacity-0 group-hover:opacity-100
                            transition-all duration-300
                            transform translate-y-2 group-hover:translate-y-0'
            >
              Ler publicação
              <span className='ml-2'>→</span>
            </div>
          )}
        </div>
      </article>
    </Link>
  )
}
