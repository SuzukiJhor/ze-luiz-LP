'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, Trash2 } from 'lucide-react'

interface DeleteModalProps {
  onClose: () => void
  onConfirm: () => void
  isPending: boolean
}

export function DeleteModal ({
  onClose,
  onConfirm,
  isPending
}: DeleteModalProps) {
  return (
    <div className='fixed inset-0 bg-black/80 backdrop-blur-sm z-110 flex items-center justify-center p-4'>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className='bg-zinc-900 border border-white/10 p-6 rounded-2xl max-w-sm w-full shadow-2xl'
      >
        <div className='flex items-center justify-center w-12 h-12 bg-red-500/10 rounded-full mb-4 mx-auto'>
          <AlertTriangle className='text-red-500' size={24} />
        </div>

        <h3 className='text-xl font-bold text-center mb-2'>
          Excluir Publicação?
        </h3>
        <p className='text-white/60 text-center text-sm mb-6'>
          Esta ação é irreversível. O conteúdo será removido permanentemente.
        </p>

        <div className='flex gap-3'>
          <button
            onClick={onClose}
            className='flex-1 px-4 py-2 rounded-xl hover:bg-white/5 transition-colors'
          >
            Cancelar
          </button>
          <button
            onClick={onConfirm}
            disabled={isPending}
            className='flex-1 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl flex items-center justify-center gap-2 transition-all disabled:opacity-50'
          >
            {isPending ? (
              'Excluindo...'
            ) : (
              <>
                <Trash2 size={16} /> Excluir
              </>
            )}
          </button>
        </div>
      </motion.div>
    </div>
  )
}
