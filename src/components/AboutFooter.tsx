'use client';

import Image from 'next/image';

export default function AboutFooter() {
  return (
    <footer className="w-full bg-true-gray-800 pt-24 pb-[100px] relative">
      <div className="w-full px-0 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center gap-4 sm:gap-6 lg:gap-8">
          {/* Image 1 */}
          <div 
            className="relative w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-lg overflow-hidden bg-true-gray-700 cursor-pointer transition-all duration-300 ease-in-out hover:scale-105"
            style={{ 
              transform: 'rotate(-1.5deg)',
              '--hover-rotation': '0deg'
            } as React.CSSProperties}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'rotate(0deg) scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'rotate(-1.5deg)';
            }}
          >
            <Image 
              src="/about/ab_1.png" 
              alt="About image 1"
              fill
              priority
              sizes="(max-width: 640px) 96px, (max-width: 1024px) 128px, 160px"
              className="object-cover"
            />
          </div>

          {/* Image 2 */}
          <div 
            className="relative w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-lg overflow-hidden bg-true-gray-700 cursor-pointer transition-all duration-300 ease-in-out hover:scale-105"
            style={{ 
              transform: 'rotate(1.8deg)',
              '--hover-rotation': '0deg'
            } as React.CSSProperties}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'rotate(0deg) scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'rotate(1.8deg)';
            }}
          >
            <Image 
              src="/about/ab_2.png" 
              alt="About image 2"
              fill
              priority
              sizes="(max-width: 640px) 96px, (max-width: 1024px) 128px, 160px"
              className="object-cover"
            />
          </div>

          {/* Image 3 */}
          <div 
            className="relative w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-lg overflow-hidden bg-true-gray-700 cursor-pointer transition-all duration-300 ease-in-out hover:scale-105"
            style={{ 
              transform: 'rotate(-0.7deg)',
              '--hover-rotation': '0deg'
            } as React.CSSProperties}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'rotate(0deg) scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'rotate(-0.7deg)';
            }}
          >
            <Image 
              src="/about/ab_3.png" 
              alt="About image 3"
              fill
              sizes="(max-width: 640px) 96px, (max-width: 1024px) 128px, 160px"
              className="object-cover"
            />
          </div>

          {/* Image 4 */}
          <div 
            className="relative w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-lg overflow-hidden bg-true-gray-700 cursor-pointer transition-all duration-300 ease-in-out hover:scale-105"
            style={{ 
              transform: 'rotate(1.2deg)',
              '--hover-rotation': '0deg'
            } as React.CSSProperties}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'rotate(0deg) scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'rotate(1.2deg)';
            }}
          >
            <Image 
              src="/about/ab_4.png" 
              alt="About image 4"
              fill
              sizes="(max-width: 640px) 96px, (max-width: 1024px) 128px, 160px"
              className="object-cover"
            />
          </div>

          {/* Image 5 */}
          <div 
            className="relative w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-lg overflow-hidden bg-true-gray-700 cursor-pointer transition-all duration-300 ease-in-out hover:scale-105"
            style={{ 
              transform: 'rotate(-1.9deg)',
              '--hover-rotation': '0deg'
            } as React.CSSProperties}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'rotate(0deg) scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'rotate(-1.9deg)';
            }}
          >
            <Image 
              src="/about/ab_5.png" 
              alt="About image 5"
              fill
              sizes="(max-width: 640px) 96px, (max-width: 1024px) 128px, 160px"
              className="object-cover"
            />
          </div>

          {/* Image 6 */}
          <div 
            className="relative w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-lg overflow-hidden bg-true-gray-700 cursor-pointer transition-all duration-300 ease-in-out hover:scale-105"
            style={{ 
              transform: 'rotate(0.3deg)',
              '--hover-rotation': '0deg'
            } as React.CSSProperties}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'rotate(0deg) scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'rotate(0.3deg)';
            }}
          >
            <Image 
              src="/about/ab_6.png" 
              alt="About image 6"
              fill
              sizes="(max-width: 640px) 96px, (max-width: 1024px) 128px, 160px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </footer>
  );
} 