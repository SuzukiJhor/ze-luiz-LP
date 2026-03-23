'use client'

import { Post } from '@/app/types/post'
import {
  X,
  Save,
  Clock,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { FileUpload } from './FileUpload'
import { RichTextEditor } from './RichTextEditor'

interface EditPostFormProps {
  post: Post
  onClose: () => void
  onSave: (formData: FormData) => void
  isPending: boolean
}

export function EditPostForm({
  post,
  onClose,
  onSave,
  isPending
}: EditPostFormProps) {

  const [coverImage, setCoverImage] = useState<string | null>(post.coverImage ?? null)
  const [documentUrl, setDocumentUrl] = useState<string | null>(post.document ?? null)
  const [audioUrl, setAudioUrl] = useState<string | null>(post.audio ?? null)
  const [isUploading, setIsUploading] = useState(false)

  return (
    <div className='fixed inset-0 backdrop-blur-sm bg-black/40 z-105 flex items-center justify-center p-4 md:p-6'>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className='bg-surface border border-white/10 p-6 md:p-8 rounded-3xl w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl'
      >

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
            className='p-2 hover:bg-white/5 rounded-full text-white/50 transition-colors cursor-pointer'
          >
            <X size={24} />
          </button>
        </div>

        <form action={onSave} className='grid grid-cols-1 md:grid-cols-3 gap-6'>

          <input type='hidden' name='id' value={post.id} />

          <div className='md:col-span-2 space-y-4'>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <input
                name='title'
                defaultValue={post.title}
                className='w-full bg-background border border-border p-3 rounded-xl outline-none text-white'
                required
              />

              <input
                name='subtitle'
                defaultValue={post.subtitle}
                className='w-full bg-background border border-border p-3 rounded-xl outline-none text-white'
              />
            </div>

            <RichTextEditor
              name="content"
              initialValue={post.content}
            />

          </div>

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
                </select>

                <input
                  name='category'
                  defaultValue={post.category}
                  className='w-full bg-surface-muted border border-border p-2 rounded-lg text-sm text-white outline-none'
                  required
                />
              </div>

              <div className='space-y-4 pt-2'>

                <label className='text-[10px] uppercase tracking-widest font-bold text-muted block'>
                  Arquivos e Mídias
                </label>

                <FileUpload
                  type="image"
                  value={coverImage}
                  onChange={setCoverImage}
                  onUploadingChange={setIsUploading}
                />

                <input
                  type='hidden'
                  name='coverImage'
                  value={coverImage ?? ''}
                />

                <FileUpload
                  type="pdf"
                  value={documentUrl}
                  onChange={setDocumentUrl}
                  onUploadingChange={setIsUploading}
                />

                <input
                  type='hidden'
                  name='document'
                  value={documentUrl ?? ''}
                />

                <FileUpload
                  type="audio"
                  value={audioUrl}
                  onChange={setAudioUrl}
                  onUploadingChange={setIsUploading}
                />

                <input
                  type='hidden'
                  name='audio'
                  value={audioUrl ?? ''}
                />
              </div>
            </div>

            <button
              type='submit'
              disabled={isPending || isUploading}
              className='w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg shadow-primary/20 disabled:opacity-50'
            >
              {(isPending || isUploading)
                ? 'Atualizando...'
                : <>
                  <Save size={20} /> Salvar Alterações
                </>
              }
            </button>

          </div>

        </form>
      </motion.div>
    </div>
  )
}