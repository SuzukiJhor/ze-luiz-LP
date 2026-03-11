import { Post } from '@/app/types/post'

export default function StatsCards ({ posts }: { posts: Post[] }) {
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mb-16'>
        <div className='bg-surface border border-border p-5 rounded-2xl'>
          <p className='text-muted text-xs uppercase font-bold tracking-wider'>
            Total
          </p>
          <h3 className='text-3xl font-serif mt-1'>{posts.length}</h3>
        </div>

        <div className='bg-surface border border-border p-5 rounded-2xl'>
          <p className='text-muted text-xs uppercase font-bold tracking-wider'>
            Publicados
          </p>
          <h3 className='text-3xl font-serif mt-1 text-green-400'>
            {posts.filter(p => p.published).length}
          </h3>
        </div>

        <div className='bg-surface border border-border p-5 rounded-2xl'>
          <p className='text-muted text-xs uppercase font-bold tracking-wider'>
            Rascunhos
          </p>
          <h3 className='text-3xl font-serif mt-1 text-orange-400'>
            {posts.filter(p => !p.published).length}
          </h3>
        </div>

        <div className='bg-surface border border-border p-5 rounded-2xl'>
          <p className='text-muted text-xs uppercase font-bold tracking-wider'>
            Poesias
          </p>
          <h3 className='text-3xl font-serif mt-1 text-primary'>
            {posts.filter(p => p.section === 'POESIA').length}
          </h3>
        </div>
      </div>
    </>
  )
}
