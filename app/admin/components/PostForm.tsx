'use client'

import {
  X,
  Music,
  FileText,
  Image as ImageIcon,
  Save,
  Send
} from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { FileUpload } from './FileUpload'

interface PostFormProps {
  onClose: () => void
  onSave: (formData: FormData) => void
  isPending: boolean
}

export function PostForm({ onClose, onSave, isPending }: PostFormProps) {

  const [coverImage, setCoverImage] = useState<string | null>(null)
  const [documentUrl, setDocumentUrl] = useState<string | null>(null)
  const [audioUrl, setAudioUrl] = useState<string | null>(null)
  const [isUploading, setIsUploading] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      className='overflow-hidden mb-12'
    >
      <div className='bg-surface border border-border rounded-2xl p-6 md:p-8 shadow-sm'>

        <div className='flex justify-between items-center mb-6'>
          <h2 className='text-xl font-serif font-bold flex items-center gap-2'>
            <Send size={20} className='text-primary' />
            Nova Publicação
          </h2>

          <button
            onClick={onClose}
            className='text-sm text-muted hover:text-foreground flex items-center gap-1 transition-colors cursor-pointer'
          >
            <X size={16} /> Cancelar
          </button>
        </div>

        <form action={onSave} className='grid grid-cols-1 md:grid-cols-3 gap-6'>

          <div className='md:col-span-2 space-y-4'>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <input
                name='title'
                placeholder='Título da publicação'
                className='w-full bg-background border border-border p-3 rounded-xl outline-none'
                required
              />

              <input
                name='subtitle'
                placeholder='Subtítulo'
                className='w-full bg-background border border-border p-3 rounded-xl outline-none'
              />
            </div>

            <textarea
              name='content'
              rows={8}
              placeholder='Escreva seu poema ou conteúdo aqui...'
              className='w-full bg-background border border-border p-4 rounded-xl outline-none'
              required
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
                  className='w-full bg-surface-muted border border-border p-2 rounded-lg text-sm mb-3 outline-none'
                >
                  <option value='POESIA'>Poesia & Música</option>
                  <option value='DOCENCIA'>Docência</option>
                </select>

                <input
                  name='category'
                  placeholder='Categoria (ex: Acadêmico)'
                  className='w-full bg-surface-muted border border-border p-2 rounded-lg text-sm outline-none'
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

                <input type="hidden" name="coverImage" value={coverImage ?? ''} />

                <FileUpload
                  type="pdf"
                  value={documentUrl}
                  onChange={setDocumentUrl}
                  onUploadingChange={setIsUploading}
                />

                <input type="hidden" name="document" value={documentUrl ?? ''} />

                <FileUpload
                  type="audio"
                  value={audioUrl}
                  onChange={setAudioUrl}
                  onUploadingChange={setIsUploading}
                />

                <input type="hidden" name="audio" value={audioUrl ?? ''} />

              </div>
            </div>

            <button
              type='submit'
              disabled={isPending || isUploading}
              className='w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/20 disabled:opacity-50'
            >
              {(isPending || isUploading) ? (
                'Salvando...'
              ) : (
                <>
                  <Save size={20} /> Publicar
                </>
              )}
            </button>

          </div>

        </form>

      </div>
    </motion.div>
  )
}