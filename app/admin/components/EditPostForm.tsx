'use client'

import { Post } from '@/app/types/post'
import {
  X,
  Save,
  Clock,
  Music,
  FileText,
  Image as ImageIcon
} from 'lucide-react'
import { motion } from 'framer-motion'

interface EditPostFormProps {
  post: Post
  onClose: () => void
  onSave: (formData: FormData) => void
  isPending: boolean
}

export function EditPostForm ({
  post,
  onClose,
  onSave,
  isPending
}: EditPostFormProps) {
  return (
    <div className='fixed inset-0 backdrop-blur-sm bg-black/40 z-[105] flex items-center justify-center p-4 md:p-6'>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className='bg-surface border border-white/10 p-6 md:p-8 rounded-3xl w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl'
      >
        {/* Cabeçalho */}
        <div className='flex justify-between items-start mb-8'>
          <div>
            <div className='flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest mb-1'>
              <Clock size={14} /> Editando Publicação
            </div>
            <h2 className='text-2xl font-serif font-bold text-white'>
              {post.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className='p-2 hover:bg-white/5 rounded-full text-white/50 transition-colors'
          >
            <X size={24} />
          </button>
        </div>

        <form action={onSave} className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {/* Campo oculto com o ID */}
          <input type='hidden' name='id' value={post.id} />

          {/* Coluna da Esquerda: Textos (2/3 da largura) */}
          <div className='md:col-span-2 space-y-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='space-y-1'>
                <label className='text-[10px] uppercase text-white/40 ml-1'>
                  Título
                </label>
                <input
                  name='title'
                  defaultValue={post.title}
                  placeholder='Título da publicação'
                  className='w-full bg-background border border-border p-3 rounded-xl focus:border-primary outline-none text-white transition-all'
                  required
                />
              </div>
              <div className='space-y-1'>
                <label className='text-[10px] uppercase text-white/40 ml-1'>
                  Subtítulo
                </label>
                <input
                  name='subtitle'
                  defaultValue={post.subtitle}
                  placeholder='Subtítulo'
                  className='w-full bg-background border border-border p-3 rounded-xl focus:border-primary outline-none text-white transition-all'
                />
              </div>
            </div>

            <div className='space-y-1'>
              <label className='text-[10px] uppercase text-white/40 ml-1'>
                Conteúdo
              </label>
              <textarea
                name='content'
                rows={12}
                defaultValue={post.content}
                placeholder='Escreva seu poema ou conteúdo aqui...'
                className='w-full bg-background border border-border p-4 rounded-xl focus:border-primary outline-none text-white transition-all font-body'
                required
              />
            </div>
          </div>

          {/* Coluna da Direita: Configurações e Mídias (1/3 da largura) */}
          <div className='space-y-4'>
            <div className='p-4 bg-background border border-border rounded-xl space-y-4'>
              <div>
                <label className='text-[10px] uppercase tracking-widest font-bold text-muted mb-2 block'>
                  Configurações
                </label>
                <select
                  name='section'
                  defaultValue={post.section}
                  className='w-full bg-surface-muted border border-border p-2 rounded-lg text-sm mb-3 text-white outline-none'
                >
                  <option value='POESIA'>Poesia & Música</option>
                  <option value='DOCENCIA'>Docência</option>
                  <option value='MUSICA'>Música</option>
                </select>
                <input
                  name='category'
                  defaultValue={post.category}
                  placeholder='Categoria (ex: Acadêmico)'
                  className='w-full bg-surface-muted border border-border p-2 rounded-lg text-sm text-white outline-none'
                  required
                />
              </div>

              <div className='space-y-3 pt-2'>
                <label className='text-[10px] uppercase tracking-widest font-bold text-muted block'>
                  Arquivos e Mídias (URLs)
                </label>

                <div className='flex items-center gap-2 bg-surface-muted p-2 rounded-lg border border-border'>
                  <ImageIcon size={16} className='text-primary' />
                  <input
                    name='coverImage'
                    defaultValue={post.coverImage}
                    placeholder='URL da Capa'
                    className='bg-transparent text-xs w-full text-white outline-none'
                  />
                </div>

                <div className='flex items-center gap-2 bg-surface-muted p-2 rounded-lg border border-border'>
                  <FileText size={16} className='text-blue-400' />
                  <input
                    name='document'
                    defaultValue={post.document}
                    placeholder='URL do PDF'
                    className='bg-transparent text-xs w-full text-white outline-none'
                  />
                </div>

                <div className='flex items-center gap-2 bg-surface-muted p-2 rounded-lg border border-border'>
                  <Music size={16} className='text-purple-400' />
                  <input
                    name='audio'
                    defaultValue={post.audio}
                    placeholder='URL do Áudio'
                    className='bg-transparent text-xs w-full text-white outline-none'
                  />
                </div>
              </div>
            </div>

            <div className='flex flex-col gap-3'>
              <button
                type='submit'
                disabled={isPending}
                className='w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/20 disabled:opacity-50'
              >
                {isPending ? (
                  'Atualizando...'
                ) : (
                  <>
                    <Save size={20} /> Salvar Alterações
                  </>
                )}
              </button>

              <button
                type='button'
                onClick={onClose}
                className='w-full py-3 text-sm text-white/40 hover:text-white transition-colors'
              >
                Cancelar Edição
              </button>
            </div>
          </div>
        </form>
      </motion.div>
    </div>
  )
}
