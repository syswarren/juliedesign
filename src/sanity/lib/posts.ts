import { client } from './client'
import { postsQuery, postBySlugQuery } from './queries'

export interface Post {
  _id: string
  title: string
  slug: string
  publishedAt: string
  author?: string
  categories?: string[]
  body: any
  mainImage?: string
  mainImageAlt?: string
}

export async function getPosts(): Promise<Post[]> {
  if (!client) {
    console.warn('Sanity client not configured, returning empty posts array')
    return []
  }
  return await client.fetch(postsQuery)
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  if (!client) {
    console.warn('Sanity client not configured, returning null')
    return null
  }
  return await client.fetch(postBySlugQuery, { slug })
} 