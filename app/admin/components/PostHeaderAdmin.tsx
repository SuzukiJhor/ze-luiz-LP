import { Plus } from 'lucide-react'

export default function PostHeaderAdmin({
  setShowModal
}: {
  setShowModal: (value: boolean) => void
}) {
  return (
    <header className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6 mb-12">

      <div>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold">
          Gerenciar Conteúdo
        </h1>

        <p className="text-white/50 text-sm sm:text-base">
          Publique poesias, artigos e materiais didáticos.
        </p>
      </div>

      <button
        onClick={() => setShowModal(true)}
        className="
          bg-primary hover:bg-primary/80 text-white
          px-5 sm:px-6 py-3
          rounded-xl
          flex items-center justify-center gap-2
          transition-all
          shadow-lg shadow-primary/20
          w-full sm:w-auto
        "
      >
        <Plus size={20} />
        Nova Publicação
      </button>

    </header>
  )
}