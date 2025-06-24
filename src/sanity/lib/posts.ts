import { client } from './client'
import { postsQuery, postBySlugQuery } from './queries'

export interface Post {
  _id: string
  title: string
  subtitle?: string
  slug: string
  publishedAt: string
  author?: string
  categories?: string[]
  body: any
  mainImage?: string
  mainImageAlt?: string
}

export async function getPosts(): Promise<Post[]> {
  return await client.fetch(postsQuery)
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  return await client.fetch(postBySlugQuery, { slug })
} 