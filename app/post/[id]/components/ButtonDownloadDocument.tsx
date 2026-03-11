import { Post } from '@/app/types/post'
import { Download } from 'lucide-react'

export default function ButtonDownloadDocument ({ post }: { post: Post }) {
  return (
    <>
      {post.document && (
        <div className='mt-16 pt-8 border-t border-border'>
          <h3 className='text-white font-serif text-xl mb-4'>Material Anexo</h3>

          <a
            href={post.document}
            target='_blank'
            className='inline-flex items-center gap-3 px-6 py-4 rounded-xl
                bg-background/40 backdrop-blur-md border border-border
                hover:border-primary/40 transition'
          >
            <Download size={18} className='text-primary' />
            Baixar Documento
          </a>
        </div>
      )}
    </>
  )
}
