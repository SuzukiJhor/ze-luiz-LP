export type PostSection = 'POESIA' | 'DOCENCIA' | 'MUSICA'

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
