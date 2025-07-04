'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function RevealFooter() {
  const footerRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (footerRef.current) {
        const rect = footerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Start revealing when footer is 50% visible (better trigger point)
        if (rect.top < windowHeight * 0.5) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer 
      ref={footerRef}
      className={`relative w-full transition-opacity duration-2800 ease-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ 
        minHeight: '60vh'
      }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-true-gray-800 overflow-hidden">
        <Image
          src="/footer.png"
          alt="Footer background"
          fill
          className="object-cover"
          style={{ filter: 'brightness(1)', opacity: 0.7 }}
        />
      </div>

      {/* Footer Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-white px-6" style={{ minHeight: '60vh' }}>
        <div className="text-center">
          <h2 className="text-4xl mt-10 mb-1" style={{ fontFamily: '"Jacquard 12", serif', fontWeight: 'normal', textShadow: '2px -2px #000000' }}>Digital dreaming since 1998</h2>
          <div className="text-sm text-white">
            © {new Date().getFullYear()} All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
} 