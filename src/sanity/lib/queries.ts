import { groq } from 'next-sanity'

export const postsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    subtitle,
    "slug": slug.current,
    publishedAt,
    "author": author->name,
    "categories": categories[]->title,
    body,
    "mainImage": mainImage.asset->url,
    "mainImageAlt": mainImage.alt
  }
`

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    subtitle,
    "slug": slug.current,
    publishedAt,
    "author": author->name,
    "categories": categories[]->title,
    body,
    "mainImage": mainImage.asset->url,
    "mainImageAlt": mainImage.alt
  }
` 