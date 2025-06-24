'use client';

import FloatingMenu from '@/components/FloatingMenu';
import PortableText from '@/components/PortableText';
import { getPosts, Post } from '@/sanity/lib/posts';
import Image from 'next/image';
import { useState, useEffect } from 'react';

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

// Component for displaying full content
function PostContent({ post }: { post: Post }) {
  return (
    <div>
      <PortableText value={post.body} />
    </div>
  );
}

export default function NowPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const fetchedPosts = await getPosts();
        // Filter out future posts and sort by date (most recent first)
        const currentDate = new Date();
        const filteredPosts = fetchedPosts
          .filter(post => {
            const postDate = new Date(post.publishedAt);
            return postDate <= currentDate;
          })
          .sort((a, b) => {
            const dateA = new Date(a.publishedAt);
            const dateB = new Date(b.publishedAt);
            return dateB.getTime() - dateA.getTime(); // Most recent first
          });
        
        setPosts(filteredPosts);
      } catch (err) {
        setError('Failed to load posts');
        console.error('Error fetching posts:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-true-gray-800 text-true-gray-200">
        <FloatingMenu />
        <div className="w-full mx-auto px-6 sm:px-6 lg:px-8" style={{ maxWidth: '600px' }}>
          <header className="w-full flex flex-col pt-20 sm:pt-32 md:pt-40" style={{ paddingBottom: '32px' }}>
            <h1 className="font-bold text-white" style={{ fontSize: '20px' }}>Now</h1>
            <p className="text-true-gray-300 mb-10" style={{ fontSize: '20px' }}>Changelog, updates, and more</p>
          </header>
          <div className="text-center text-true-gray-400">Loading posts...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col bg-true-gray-800 text-true-gray-200">
        <FloatingMenu />
        <div className="w-full mx-auto px-6 sm:px-6 lg:px-8" style={{ maxWidth: '600px' }}>
          <header className="w-full flex flex-col pt-20 sm:pt-32 md:pt-40" style={{ paddingBottom: '32px' }}>
            <h1 className="font-bold text-white" style={{ fontSize: '20px' }}>Now</h1>
            <p className="text-true-gray-300 mb-10" style={{ fontSize: '20px' }}>Changelog, updates, and more</p>
          </header>
          <div className="text-center text-red-400">{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-true-gray-800 text-true-gray-200">
      {/* Floating Menu */}
      <FloatingMenu />

      {/* Header */}
      <div className="w-full mx-auto px-6 sm:px-6 lg:px-8" style={{ maxWidth: '600px' }}>
        <header className="w-full flex flex-col pt-20 sm:pt-32 md:pt-40" style={{ paddingBottom: '32px' }}>
          <h1 className="font-bold text-white" style={{ fontSize: '20px' }}>Now</h1>
          <p className="text-true-gray-300 mb-10" style={{ fontSize: '20px' }}>Changelog, updates, and more</p>
        </header>
      </div>

      {/* Posts List */}
      <div className="w-full mx-auto px-6 sm:px-6 lg:px-8" style={{ maxWidth: '600px' }}>
        <div className="space-y-40">
          {posts.map((post) => (
            <article 
              key={post._id} 
              id={post.slug}
              className="scroll-mt-20"
            >
              {/* Date with decorative lines */}
              <div className="flex items-center justify-center mb-8">
                <div className="flex-1 h-px bg-white/10"></div>
                <time className="px-4 text-true-gray-400 page-text text-sm font-medium">
                  {getRelativeDate(post.publishedAt)}
                </time>
                <div className="flex-1 h-px bg-white/10"></div>
              </div>
              
              {/* Content */}
              <div>
                {/* Title */}
                <h2 className="font-semibold text-white text-xl mb-3">
                  {post.title}
                </h2>

                {/* Subtitle */}
                {post.subtitle && (
                  <p className="text-true-gray-300 page-text mb-6">
                    {post.subtitle}
                  </p>
                )}

                {/* Main Image */}
                {post.mainImage && (
                  <div className="relative aspect-video mb-6">
                    <Image 
                      src={post.mainImage} 
                      alt={post.mainImageAlt || post.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 600px"
                      className="rounded-lg object-cover"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="prose prose-invert max-w-none">
                  <PostContent post={post} />
                </div>

                {/* Categories */}
                {post.categories && post.categories.length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {post.categories.map((category) => (
                      <span
                        key={category}
                        className="px-3 py-1 bg-white/10 text-true-gray-300 text-xs rounded-full"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 pb-24 border-t border-white/10">
          <p className="text-true-gray-400 text-xl text-center" style={{ fontFamily: '"Jacquard 12", serif', fontWeight: 'normal', textShadow: '2px -2px #000000' }}>
            That&apos;s all for now!
          </p>
        </div>
      </div>
    </div>
  );
} 