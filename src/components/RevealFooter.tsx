'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function RevealFooter() {
  const footerRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // If page is short (no scroll), show immediately
    if (typeof window !== 'undefined') {
      if (document.body.scrollHeight <= window.innerHeight) {
        setIsVisible(true);
      }
    }

    const element = footerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.01,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <footer 
      ref={footerRef}
      className={`relative w-full transition-opacity duration-2800 ease-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ 
        minHeight: '420px'
      }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-true-gray-800 overflow-hidden">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: 'url(/footer-sept.png)',
            backgroundRepeat: 'repeat-x',
            backgroundSize: 'auto 420px',
            backgroundPosition: 'bottom center',
            filter: 'brightness(1)',
            opacity: 0.7
          }}
        />
      </div>

      {/* Footer Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-white px-6" style={{ minHeight: '420px' }}>
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