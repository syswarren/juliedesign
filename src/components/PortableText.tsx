'use client'

import { PortableText as PortableTextComponent } from '@portabletext/react'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'

const components = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <div className="relative aspect-video my-6">
          <Image
            src={urlFor(value).url()}
            alt={value.alt || 'Post image'}
            fill
            sizes="(max-width: 640px) 100vw, 600px"
            className="rounded-lg object-cover"
          />
        </div>
      )
    },
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
      return (
        <a
          href={value.href}
          rel={rel}
          className="text-blue-400 hover:text-blue-300 underline"
        >
          {children}
        </a>
      )
    },
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-xl font-bold text-white mb-4 page-text">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-lg font-semibold text-white mb-3 page-text">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-base font-medium text-white mb-2 page-text">{children}</h3>
    ),
    normal: ({ children }: any) => (
      <p className="text-true-gray-300 mb-4 paragraph-text">{children}</p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-blue-400 pl-4 italic text-true-gray-300 mb-4 paragraph-text">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-inside text-true-gray-300 mb-4 space-y-1 paragraph-text">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-inside text-true-gray-300 mb-4 space-y-1 paragraph-text">
        {children}
      </ol>
    ),
  },
  listItem: ({ children }: any) => (
    <li className="text-true-gray-300 paragraph-text">{children}</li>
  ),
}

interface PortableTextProps {
  value: any
  className?: string
}

export default function PortableText({ value, className = '' }: PortableTextProps) {
  return (
    <div className={`max-w-none ${className}`}>
      <PortableTextComponent value={value} components={components} />
    </div>
  )
} 