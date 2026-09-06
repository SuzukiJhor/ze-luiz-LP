import { ChevronLeft, ChevronRight } from "lucide-react"

interface PaginationProps { totalPages: number, loading?: boolean, page: number, handlePageChange: (newPage: number) => void }

export function Pagination({ totalPages, loading = false, page, handlePageChange }: PaginationProps) {

    return (
        totalPages > 1 && (
            <div className='flex items-center justify-center gap-3 mt-20 relative z-20'>

                <button
                   disabled={page === 1 || loading}
                    onClick={() => handlePageChange(page - 1)}
                    className='inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium
                bg-surface-variant/80 text-white/90 border border-white/10
                hover:bg-surface-variant hover:text-white hover:border-white/20 hover:shadow-lg hover:shadow-black/20
                active:scale-95 transition-all duration-200 ease-out
                disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-surface-variant/80 
                disabled:hover:border-white/10 disabled:hover:shadow-none disabled:active:scale-100
                cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/50'
                >
                    <ChevronLeft className='w-4 h-4' />
                    <span>Anterior</span>
                </button>

                <div className='flex items-center px-4 py-2 rounded-full bg-black/20 border border-white/5 backdrop-blur-md'>
                    <span className='text-xs font-medium tracking-wide text-white/60 uppercase mr-1.5'>
                        Página
                    </span>
                    <span className='text-sm font-semibold text-white'>
                        {page}
                    </span>
                    <span className='text-sm font-light text-white/40 mx-1.5'>
                        /
                    </span>
                    <span className='text-sm font-medium text-white/70'>
                        {totalPages}
                    </span>
                </div>

                <button
                    disabled={page === totalPages || loading}
                    onClick={() => handlePageChange(page + 1)}
                    className='inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium
                bg-surface-variant/80 text-white/90 border border-white/10
                hover:bg-surface-variant hover:text-white hover:border-white/20 hover:shadow-lg hover:shadow-black/20
                active:scale-95 transition-all duration-200 ease-out
                disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-surface-variant/80 
                disabled:hover:border-white/10 disabled:hover:shadow-none disabled:active:scale-100
                cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/50'
                >
                    <span>Próximo</span>
                    <ChevronRight className='w-4 h-4' />
                </button>
            </div>
        )
    )

}