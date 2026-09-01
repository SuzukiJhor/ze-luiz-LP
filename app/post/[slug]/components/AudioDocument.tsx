import { Post } from '@/app/types/post'

export default function AudioDocument ({ post }: { post: Post }) {
  return (
    <>
      {post.audio && (
        <div className='mb-12'>
          <audio controls className='w-full'>
            <source src={post.audio} />
          </audio>
        </div>
      )}
    </>
  )
}
