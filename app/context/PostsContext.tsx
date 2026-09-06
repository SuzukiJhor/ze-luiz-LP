'use client'

import { createContext, useContext, useState, useCallback, ReactNode } from 'react'
import { PostSection } from '../types/post'
import { deletePostAction, getPostsAction, savePostAction, togglePublishAction } from '../actions/posts'


// Adapte o tipo do Post com base no seu schema do Prisma

export interface Post {
    id: number
    title: string
    subtitle: string
    content: string
    section: PostSection
    document?: string
    audio?: string
    category: string
    published: boolean
    coverImage?: string
    createdAt: string | Date
    updatedAt: string | Date
}

interface Pagination {
    total: number
    page: number
    limit: number
    totalPages: number
}

interface CacheKeyParams {
    section?: PostSection | 'ALL' | string | null
    published?: boolean
    page?: number
    limit?: number
}

interface PostContextType {
    posts: Post[]
    pagination: Pagination
    loading: boolean
    currentFilters: CacheKeyParams
    fetchPosts: (options?: CacheKeyParams, forceRefresh?: boolean) => Promise<void>
    savePost: (formData: FormData) => Promise<{ success?: boolean; error?: string }>
    deletePost: (id: number | string) => Promise<{ success?: boolean; error?: string }>
    togglePublish: (id: number | string) => Promise<{ success?: boolean; error?: string }>
}

const PostContext = createContext<PostContextType | undefined>(undefined)

interface PostProviderProps {
    children: ReactNode
    initialPosts?: Post[]
    initialPagination?: Pagination
    initialFilters?: CacheKeyParams
}

export function PostProvider({
    children,
    initialPosts = [],
    initialPagination = { total: 0, page: 1, limit: 9, totalPages: 0 },
    initialFilters = { section: 'ALL', published: true, page: 1, limit: 9 }
}: PostProviderProps) {
    const [posts, setPosts] = useState<Post[]>(initialPosts)
    const [pagination, setPagination] = useState<Pagination>(initialPagination)
    const [currentFilters, setCurrentFilters] = useState<CacheKeyParams>(initialFilters)
    const [loading, setLoading] = useState(false)

    // Cache interno em memória estruturado por chave de filtros ex: "ALL-published-page1"
    const [cache, setCache] = useState<Record<string, { posts: Post[]; pagination: Pagination }>>(() => {
        const key = `${initialFilters.section || 'ALL'}-${initialFilters.published ?? true}-${initialFilters.page || 1}`
        return initialPosts.length > 0 ? { [key]: { posts: initialPosts, pagination: initialPagination } } : {}
    })

    const generateCacheKey = (options: CacheKeyParams) => {
        return `${options.section || 'ALL'}-${options.published ?? true}-${options.page || 1}`
    }

    // Função para buscar posts: usa o cache se existir, senão chama a Server Action
    const fetchPosts = useCallback(
        async (options: CacheKeyParams = {}, forceRefresh = false) => {
            const mergedFilters = { ...currentFilters, ...options }
            const cacheKey = generateCacheKey(mergedFilters)

            // 1. Caso os dados já estejam no Cache e não seja um refresh forçado, usa o Context
            if (!forceRefresh && cache[cacheKey]) {
                setPosts(cache[cacheKey].posts)
                setPagination(cache[cacheKey].pagination)
                setCurrentFilters(mergedFilters)
                return
            }

            // 2. Senão, faz a request via Server Action
            setLoading(true)
            try {
                const result = await getPostsAction(mergedFilters)
                const fetchedPosts = (result.posts || []) as Post[]
                const fetchedPagination = result.pagination

                // Atualiza os estados
                setPosts(fetchedPosts)
                setPagination(fetchedPagination)
                setCurrentFilters(mergedFilters)

                // Salva a resposta no Cache
                setCache((prev) => ({
                    ...prev,
                    [cacheKey]: { posts: fetchedPosts, pagination: fetchedPagination }
                }))
            } catch (error) {
                console.error('Erro ao carregar posts no Context:', error)
            } finally {
                setLoading(false)
            }
        },
        [cache, currentFilters]
    )

    // Handlers para ações de mutação (Salvar, Deletar, Alterar Status)
    const savePost = async (formData: FormData) => {
        setLoading(true)
        const result = await savePostAction(formData)
        if (result.success) {
            setCache({}) // Invalida o cache client-side para forçar busca atualizada
            await fetchPosts(currentFilters, true)
        }
        setLoading(false)
        return result
    }

    const deletePost = async (id: number | string) => {
        setLoading(true)
        const result = await deletePostAction(id)
        if (result.success) {
            setCache({})
            await fetchPosts(currentFilters, true)
        }
        setLoading(false)
        return result
    }

    const togglePublish = async (id: number | string) => {
        setLoading(true)
        const result = await togglePublishAction(id)
        if (result.success) {
            setCache({})
            await fetchPosts(currentFilters, true)
        }
        setLoading(false)
        return result
    }

    return (
        <PostContext.Provider
            value={{
                posts,
                pagination,
                loading,
                currentFilters,
                fetchPosts,
                savePost,
                deletePost,
                togglePublish
            }}
        >
            {children}
        </PostContext.Provider>
    )
}

export function usePostContext() {
    const context = useContext(PostContext)
    if (!context) {
        throw new Error('usePostContext deve ser usado dentro de um PostProvider')
    }
    return context
}