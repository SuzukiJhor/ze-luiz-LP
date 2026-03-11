import { Plus } from 'lucide-react'

export default function PostHeaderAdmin ({
  setShowModal
}: {
  setShowModal: (value: boolean) => void
}) {
  return (
    <>
      <header className='flex justify-between items-center mb-12'>
        <div>
          <h1 className='text-4xl font-serif font-bold'>Gerenciar Conteúdo</h1>
          <p className='text-white/50'>
            Publique poesias, artigos e materiais didáticos.
          </p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className='bg-primary hover:bg-primary/80 text-white px-6 py-3 rounded-xl flex items-center gap-2 transition-all shadow-lg shadow-primary/20'
        >
          <Plus size={20} /> Nova Publicação
        </button>
      </header>
    </>
  )
}
