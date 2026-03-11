export default function DashboardSkeleton () {
  return (
    <div className='space-y-8 animate-pulse'>
      {/* Skeleton dos Cards de Estatísticas */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {[1, 2, 3].map(i => (
          <div
            key={i}
            className='h-32 bg-white/5 rounded-2xl border border-white/10'
          />
        ))}
      </div>

      {/* Skeleton da Lista de Posts */}
      <div className='space-y-4'>
        {[1, 2, 3, 4].map(i => (
          <div
            key={i}
            className='h-20 bg-white/5 rounded-xl border border-white/5 w-full'
          />
        ))}
      </div>
    </div>
  )
}
