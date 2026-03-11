import { Post } from '@/app/types/post'
import { motion, AnimatePresence } from 'framer-motion'
import { Edit, FileText, Globe, Lock, PenTool, Trash2 } from 'lucide-react'

export default function PostsList ({
  posts,
  refreshData,
  handleDelete,
  handleEdit,
  startTransition,
  togglePublishAction
}: {
  posts: Post[]
  refreshData: () => void
  handleDelete: (id: number | string) => void
  handleEdit: (post: Post) => void
  startTransition: (callback: () => void) => void
  togglePublishAction: (id: number | string) => Promise<void>
}) {
  return (
    <>
      <div className='bg-white/5 border border-white/10 rounded-2xl overflow-hidden'>
        <table className='w-full text-left'>
          <thead className='bg-white/5 text-sm uppercase tracking-wider text-white/60'>
            <tr>
              <th className='p-6'>Título</th>
              <th className='p-6'>Seção</th>
              <th className='p-6'>Status</th>
              <th className='p-6 text-right'>Ações</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-white/10'>
            <AnimatePresence>
              {posts.map(item => (
                <motion.tr
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  key={item.id}
                  className='hover:bg-white/2 transition-colors group'
                >
                  <td className='p-6 font-medium'>
                    <div className='flex items-center gap-3'>
                      {item.section === 'POESIA' ? (
                        <PenTool size={16} className='text-purple-400' />
                      ) : (
                        <FileText size={16} className='text-blue-400' />
                      )}
                      {item.title}
                    </div>
                  </td>
                  <td className='p-6 text-sm'>
                    <span
                      className={`px-3 py-1 rounded-full text-[10px] font-bold ${
                        item.section === 'POESIA'
                          ? 'bg-purple-500/10 text-purple-400'
                          : 'bg-blue-500/10 text-blue-400'
                      }`}
                    >
                      {item.section}
                    </span>
                  </td>
                  <td className='p-6'>
                    <button
                      onClick={() =>
                        startTransition(() =>
                          togglePublishAction(item.id).then(refreshData)
                        )
                      }
                      className={`flex items-center gap-2 text-sm ${
                        item.published ? 'text-green-400' : 'text-orange-400'
                      }`}
                    >
                      {item.published ? (
                        <Globe size={14} />
                      ) : (
                        <Lock size={14} />
                      )}
                      {item.published ? 'Público' : 'Rascunho'}
                    </button>
                  </td>
                  <td className='p-6 text-right'>
                    <div className='flex justify-end gap-2 '>
                      <button
                        onClick={() => handleEdit(item)}
                        className='p-2 bg-white/10 rounded-lg text-white '
                      >
                        <Edit size={18} />
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className='p-2 hover:bg-red-500/10 rounded-lg text-white/70 hover:text-red-500'
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </table>
      </div>
    </>
  )
}
