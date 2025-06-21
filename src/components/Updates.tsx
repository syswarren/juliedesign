interface UpdateItem {
  title: string;
  description?: string;
  images?: string[];
  date: string;
}

interface UpdatesProps {
  updates: UpdateItem[];
}

export default function Updates({ updates }: UpdatesProps) {
  return (
    <div>
      <div className="space-y-6">
        {updates.map((update, index) => (
          <div 
            key={index} 
            className="py-2 pb-6 last:border-b-0"
            style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1 min-w-0">
                {/* Title */}
                <h3 className="font-semibold text-white page-text mb-1">
                  {update.title}
                </h3>
                
                {/* Description (if text-only post) */}
                {update.description && (
                  <p className="text-true-gray-300 page-text mb-2">
                    {update.description}
                  </p>
                )}
                
                {/* Images (if image post) */}
                {update.images && update.images.length > 0 && (
                  <div className="flex gap-3 mb-2 mt-3">
                    {update.images.slice(0, 4).map((image, imageIndex) => (
                      <img 
                        key={imageIndex}
                        src={image} 
                        alt={`Update image ${imageIndex + 1}`}
                        className="w-16 h-16 rounded-xs object-cover flex-shrink-0"
                        style={{ 
                          transform: `rotate(${imageIndex === 0 ? '2deg' : imageIndex === 1 ? '-1deg' : imageIndex === 2 ? '-2deg' : '1deg'})` 
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
          </div>
        ))}
      </div>
      
      {/* View more link */}
      <div className="mt-6 text-center">
        <a href="/updates" className="text-true-gray-400 page-text hover:text-white transition-colors">
          View more →
        </a>
      </div>
    </div>
  );
} 