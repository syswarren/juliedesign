'use client';

import FloatingMenu from '@/components/FloatingMenu';
import MarkdownContent from '@/components/MarkdownContent';
import { updates } from '@/data/updatesData';
import Image from 'next/image';
import { useState } from 'react';

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

// Component for truncated markdown content
function TruncatedMarkdownContent({ content, maxLength = 300 }: { content: string; maxLength?: number }) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Simple text truncation (you might want to implement more sophisticated markdown truncation)
  const truncatedContent = content.length > maxLength && !isExpanded 
    ? content.substring(0, maxLength) + '...'
    : content;

  return (
    <div>
      <MarkdownContent content={truncatedContent} />
      {content.length > maxLength && (
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full px-4 py-2 btn-custom page-text rounded-full text-sm transition-all duration-300 ease-in-out"
          >
            {isExpanded ? 'View less' : 'View more'}
          </button>
        </div>
      )}
    </div>
  );
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
        <div className="space-y-16">
          {filteredUpdates.map((update) => (
            <article 
              key={update.id} 
              id={update.id}
              className="scroll-mt-20"
            >
              {/* Date with decorative lines */}
              <div className="flex items-center justify-center mb-8">
                <div className="flex-1 h-px bg-white/10"></div>
                <time className="px-4 text-true-gray-400 page-text text-sm font-medium">
                  {getRelativeDate(update.date)}
                </time>
                <div className="flex-1 h-px bg-white/10"></div>
              </div>
              
              {/* Content */}
              <div>
                {/* Title */}
                <h2 className="font-semibold text-white page-text text-lg mb-3">
                  {update.title}
                </h2>

                {/* Subtitle */}
                <p className="text-true-gray-300 page-text mb-6">
                  {update.subtitle}
                </p>

                {/* Content */}
                <div className="prose prose-invert max-w-none">
                  <div className="space-y-4">
                    {(() => {
                      // Get the markdown content (should be a single string now)
                      const textContent = update.content.find(item => typeof item === 'string') as string;
                      
                      if (!textContent) return null;
                      
                      // Render truncated markdown content
                      const markdownElement = (
                        <TruncatedMarkdownContent key="markdown" content={textContent} />
                      );
                      
                      // Render images if any
                      const elements = [markdownElement];
                      update.content.forEach((item, itemIndex) => {
                        if (typeof item === 'object' && item.type === 'image') {
                          const imageItem = item as { type: 'image'; src: string; alt?: string };
                          elements.push(
                            <div key={`image-${itemIndex}`} className="relative aspect-video">
                              <Image 
                                src={imageItem.src} 
                                alt={imageItem.alt || `Update image ${itemIndex + 1}`}
                                fill
                                sizes="(max-width: 640px) 100vw, 600px"
                                className="rounded-lg object-cover"
                              />
                            </div>
                          );
                        }
                      });
                      
                      return elements;
                    })()}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 pb-24 border-t border-white/10">
          <p className="text-true-gray-400 text-xl text-center" style={{ fontFamily: '"Jacquard 12", serif', fontWeight: 'normal', textShadow: '2px -2px #000000' }}>
            That's all for now!
          </p>
        </div>
      </div>
    </div>
  );
} 