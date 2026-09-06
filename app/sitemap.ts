import { MetadataRoute } from 'next'
import { getPostsAction } from '@/app/actions/posts'
import { Post } from '@/app/types/post'
import { generateSlugUrl } from './lib/lslug'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.zeluizdocandeeiro.com.br').replace(/\/$/, '');
    let posts: Post[] = []

    try {
        const response = await getPostsAction({
            published: true,
            limit: 1000,
        })
        posts = (response.posts as Post[]) || []
    } catch (error) {
        console.error('Erro ao buscar posts para o sitemap:', error)
    }

    const postUrls: MetadataRoute.Sitemap = posts.map((post) => {
        const slugUrl = generateSlugUrl(post.id, post.title)
        return {
            url: `${baseUrl}/post/${slugUrl}`,
            lastModified: new Date(post.updatedAt || post.createdAt),
            changeFrequency: 'monthly',
            priority: 0.8,
        }
    })


    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/poesia`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/docente`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.9,
        },
    ]

    return [...staticRoutes, ...postUrls]
}