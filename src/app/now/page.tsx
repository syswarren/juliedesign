'use client';

import FloatingMenu from '@/components/FloatingMenu';
import { updates } from '@/data/updatesData';
import Image from 'next/image';

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

export default function NowPage() {
  // Filter out future posts
  const currentDate = new Date();
  const filteredUpdates = updates.filter(update => {
    const updateDate = new Date(update.date);
    return updateDate <= currentDate;
  });

  return (
    <div className="min-h-screen flex flex-col bg-true-gray-800 text-true-gray-200">
      {/* Floating Menu */}
      <FloatingMenu />

      {/* Header */}
      <div className="w-full mx-auto px-6 sm:px-6 lg:px-8" style={{ maxWidth: '600px' }}>
        <header className="w-full flex flex-col pt-20 sm:pt-32 md:pt-40" style={{ paddingBottom: '32px' }}>
          <h1 className="font-bold mb-1 text-white" style={{ fontSize: '20px' }}>Now</h1>
          <p className="text-true-gray-300" style={{ fontSize: '20px' }}>Changelog, updates, and more</p>
        </header>
      </div>

      {/* Updates List */}
      <div className="w-full mx-auto px-6 sm:px-6 lg:px-8" style={{ maxWidth: '600px' }}>
        <div className="space-y-12">
          {filteredUpdates.map((update) => (
            <article 
              key={update.id} 
              id={update.id}
              className="border-b border-white/10 pb-12 last:border-b-0 scroll-mt-20"
            >
              {/* Date */}
              <div className="mb-6">
                <time className="text-true-gray-400 page-text text-sm">
                  {getRelativeDate(update.date)}
                </time>
              </div>

              {/* Title */}
              <h2 className="font-semibold text-white page-text text-lg mb-3">
                {update.title}
              </h2>

              {/* Subtitle */}
              <p className="text-true-gray-300 page-text mb-4">
                {update.subtitle}
              </p>

              {/* Content */}
              <div className="prose prose-invert max-w-none">
                <div className="space-y-4">
                  {update.content.map((item, itemIndex) => {
                    if (typeof item === 'string') {
                      return (
                        <div key={itemIndex} className="whitespace-pre-wrap text-true-gray-200 paragraph-text leading-relaxed">
                          {item}
                        </div>
                      );
                    } else if (item.type === 'image') {
                      return (
                        <div key={itemIndex} className="relative aspect-video">
                          <Image 
                            src={item.src} 
                            alt={item.alt || `Update image ${itemIndex + 1}`}
                            fill
                            sizes="(max-width: 640px) 100vw, 600px"
                            className="rounded-lg object-cover"
                          />
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-true-gray-400 page-text text-center">
            Subscribe to updates to stay in the loop
          </p>
        </div>
      </div>
    </div>
  );
} 