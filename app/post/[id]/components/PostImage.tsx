import { Post } from '@/app/types/post'

export default function PostImage ({ post }: { post: Post }) {
  return (
    <>
      {post?.coverImage && (
        <div className='relative w-full h-[60vh] md:h-[70vh] overflow-hidden bg-black'>
          <img
            src={post.coverImage}
            alt={post.title}
            className='w-full h-full object-cover object-center scale-105 animate-fade-in transition-transform duration-700'
            style={{ opacity: 0.5 }}
          />

          <div className='absolute inset-0 bg-linear-to-t from-background via-background/40 to-transparent' />

          <div className='absolute inset-0 bg-black/20' />

          <div className='absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent' />
        </div>
      )}
    </>
  )
}
