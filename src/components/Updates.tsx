'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/sanity/lib/posts';

interface UpdatesProps {
  posts: Post[];
}

// Utility function to convert date to relative format
function getRelativeDate(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffInMs = now.getTime() - date.getTime();
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  if (diffInDays === 0) {
    return 'today';
  } else if (diffInDays === 1) {
    return 'yesterday';
  } else if (diffInDays < 7) {
    return `${diffInDays}d ago`;
  } else if (diffInDays < 30) {
    const weeks = Math.floor(diffInDays / 7);
    return `${weeks}w ago`;
  } else {
    const months = Math.floor(diffInDays / 30);
    return `${months}mo ago`;
  }
}

// Utility function to extract preview text from portable text content
function getPreviewText(body: any): string {
  if (!body || !Array.isArray(body)) return '';
  
  // Extract text from portable text blocks
  const textBlocks = body
    .filter((block: any) => block._type === 'block' && block.children)
    .map((block: any) => 
      block.children
        .filter((child: any) => child._type === 'span')
        .map((child: any) => child.text)
        .join('')
    )
    .join(' ');
  
  // Clean up the text
  const cleanText = textBlocks.trim();
  
  // Get first 150 characters
  return cleanText.length > 150 ? cleanText.substring(0, 150) + '...' : cleanText;
}

export default function Updates({ posts }: UpdatesProps) {
  // Filter out future posts and sort by date (most recent first)
  const currentDate = new Date();
  const filteredPosts = posts
    .filter(post => {
      const postDate = new Date(post.publishedAt);
      return postDate <= currentDate;
    })
    .sort((a, b) => {
      const dateA = new Date(a.publishedAt);
      const dateB = new Date(b.publishedAt);
      return dateB.getTime() - dateA.getTime(); // Most recent first
    });

  // Show message if no posts
  if (filteredPosts.length === 0) {
    return (
      <div>
        <div className="text-true-gray-400 text-sm">
          No updates available at the moment. Check back soon!
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="space-y-6">
        {filteredPosts.map((post, index) => {
          // Get preview text
          const previewText = getPreviewText(post.body);

          return (
            <Link 
              key={post._id} 
              href={`/now#${post.slug}`}
              className="block py-2 pb-6 last:border-b-0 px-2 -mx-2"
              style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1 min-w-0">
                  {/* Title */}
                  <h3 className="font-semibold text-white page-text mb-1">
                    {post.title}
                  </h3>
                  
                  {/* Subtitle */}
                  {post.subtitle && (
                    <p className="text-true-gray-300 page-text mb-2">
                      {post.subtitle}
                    </p>
                  )}
                  
                  {/* Preview Text */}
                  <p className="text-true-gray-400 page-text text-sm mb-2 line-clamp-2">
                    {previewText}
                  </p>
                  
                  {/* Main Image */}
                  {post.mainImage && (
                    <div className="flex gap-3 mb-2 mt-3 flex-wrap">
                      <div
                        className="cursor-pointer transition-transform duration-300 ease-in-out"
                        style={{ transform: 'rotate(2deg)' }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'rotate(0deg) scale(1.02)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'rotate(2deg)'}
                      >
                        <Image 
                          src={post.mainImage} 
                          alt={post.mainImageAlt || post.title}
                          width={64}
                          height={64}
                          className="w-16 h-16 rounded-xs object-cover flex-shrink-0"
                          style={{ flexShrink: 0 }}
                        />
                      </div>
                    </div>
                  )}

                  {/* Categories */}
                  {post.categories && post.categories.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {post.categories.slice(0, 2).map((category) => (
                        <span
                          key={category}
                          className="px-2 py-1 bg-white/10 text-true-gray-300 text-xs rounded-full"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Date */}
                <div className="flex-shrink-0 text-right ml-4">
                  <p className="text-true-gray-400 page-text text-sm">
                    {getRelativeDate(post.publishedAt)}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      
      {/* View more link */}
      <div className="mt-6 text-center">
        <Link href="/now" className="text-true-gray-400 page-text hover:text-white transition-colors">
          More updates →
        </Link>
      </div>
    </div>
  );
} 