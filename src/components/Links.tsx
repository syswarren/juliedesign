import Link from 'next/link';
import { MoveUpRight } from 'lucide-react';

interface LinkItem {
  title: string;
  url: string;
  source: string;
  date: string;
  description?: string;
}

interface LinksProps {
  links: LinkItem[];
}

export default function Links({ links }: LinksProps) {
  return (
    <div>
      <div className="space-y-4">
        {links.map((link, index) => (
          <div 
            key={index} 
            className="py-4 pb-6 last:border-b-0"
            style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}
          >
            <Link 
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1 min-w-0">
                  {/* Title */}
                  <h3 className="font-semibold text-white page-text mb-1 group-hover:text-true-gray-300 transition-colors">
                    {link.title}
                  </h3>
                  
                  {/* Description */}
                  {link.description && (
                    <p className="text-true-gray-300 page-text mb-2">
                      {link.description}
                    </p>
                  )}
                  
                  {/* Source */}
                  <p className="text-true-gray-400 page-text text-sm">
                    {link.source}
                  </p>
                </div>
                
                {/* Date */}
                <div className="flex-shrink-0 text-right ml-4">
                  <p className="text-true-gray-400 page-text text-sm">
                    {link.date}
                  </p>
                  <div className="text-true-gray-500 mt-1 group-hover:text-true-gray-400 transition-colors flex justify-end">
                    <MoveUpRight size={16} />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
} 