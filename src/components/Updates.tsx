'use client';

import Link from 'next/link';
import { UpdateData } from '@/types';

interface UpdatesProps {
  updates: UpdateData[];
}

export default function Updates({ updates }: UpdatesProps) {
  return (
    <div>
      <div className="space-y-6">
        {updates.map((update, index) => {
          // Extract images from content for preview
          const images = update.content
            .filter(item => typeof item === 'object' && item.type === 'image')
            .map(item => (item as { type: 'image'; src: string; alt?: string }).src);

          return (
            <Link 
              key={index} 
              href={`/updates#${update.id}`}
              className="block py-2 pb-6 last:border-b-0 rounded-lg px-2 -mx-2"
              style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1 min-w-0">
                  {/* Title */}
                  <h3 className="font-semibold text-white page-text mb-1">
                    {update.title}
                  </h3>
                  
                  {/* Subtitle */}
                  <p className="text-true-gray-300 page-text mb-2">
                    {update.subtitle}
                  </p>
                  
                  {/* Images */}
                  {images.length > 0 && (
                    <div className="flex gap-3 mb-2 mt-3 flex-wrap">
                      {images.slice(0, 3).map((image, imageIndex) => (
                        <img 
                          key={imageIndex}
                          src={image} 
                          alt={`Update image ${imageIndex + 1}`}
                          className="w-16 h-16 rounded-xs object-cover flex-shrink-0"
                          style={{ 
                            transform: `rotate(${imageIndex === 0 ? '2deg' : imageIndex === 1 ? '-1deg' : '1deg'})`,
                            flexShrink: 0
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Date */}
                <div className="flex-shrink-0 text-right ml-4">
                  <p className="text-true-gray-400 page-text text-sm">
                    {update.date}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      
      {/* View more link */}
      <div className="mt-6 text-center">
        <Link href="/updates" className="text-true-gray-400 page-text hover:text-white transition-colors">
          View changelog →
        </Link>
      </div>
    </div>
  );
} 