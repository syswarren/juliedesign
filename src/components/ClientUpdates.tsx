'use client';

import { useEffect, useState } from 'react';
import Updates from './Updates';

interface Post {
  _id: string;
  title: string;
  subtitle?: string;
  slug: string;
  publishedAt: string;
  author?: string;
  categories?: string[];
  body: any;
  mainImage?: string;
  mainImageAlt?: string;
}

export default function ClientUpdates() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const { getPosts } = await import('@/sanity/lib/posts');
        const fetchedPosts = await getPosts();
        
        // Get the 3 most recent posts, properly sorted by date
        const currentDate = new Date();
        const recentPosts = fetchedPosts
          .filter((post: Post) => {
            const postDate = new Date(post.publishedAt);
            return postDate <= currentDate;
          })
          .sort((a: Post, b: Post) => {
            const dateA = new Date(a.publishedAt);
            const dateB = new Date(b.publishedAt);
            return dateB.getTime() - dateA.getTime(); // Most recent first
          })
          .slice(0, 3);
        
        setPosts(recentPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setPosts([]);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="w-full py-12 flex flex-col">
        <h2 className="font-semibold mb-4 text-left text-white page-text">Now</h2>
        <div className="text-true-gray-400 text-sm">Loading updates...</div>
      </div>
    );
  }

  return (
    <div className="w-full py-12 flex flex-col">
      <h2 className="font-semibold mb-4 text-left text-white page-text">Now</h2>
      <Updates posts={posts} />
    </div>
  );
} 