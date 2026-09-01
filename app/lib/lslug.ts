export function generateSlugUrl(id: number | string, title: string): string {
    const cleanTitle = title
        .normalize('NFD')
        .replace(/[\u0300-\u03fF]/g, '')
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9 -]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
    return `${id}-${cleanTitle}`
}

export function extractIdFromSlug(slugParam: string): number | null {
    const match = slugParam.match(/^(\d+)/)
    if (!match) return null
    return Number(match[1])
}