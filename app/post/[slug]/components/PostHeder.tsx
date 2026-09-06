import { Post } from '@/app/types/post'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Calendar } from 'lucide-react'

export default function PostHeader ({ post }: { post: Post }) {
  return (
    <header className='mb-14'>
      <div className='flex items-center gap-4 mb-6'>
        <span className='px-3 py-1 rounded-full bg-primary/20 text-primary text-xs uppercase tracking-wider'>
          {post.category}
        </span>

        <div className='flex items-center gap-2 text-sm text-muted-foreground'>
          <Calendar size={14} />

          {post.createdAt &&
            format(new Date(post.createdAt), "d 'de' MMMM, yyyy", {
              locale: ptBR
            })}
        </div>
      </div>

      <h1 className='text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight'>
        {post.title}
      </h1>

      {post.subtitle && (
        <p className='text-xl text-muted italic border-l-2 border-primary pl-6'>
          {post.subtitle}
        </p>
      )}
    </header>
  )
}
