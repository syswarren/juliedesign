'use client';

import { useEffect, useRef } from 'react';

export default function FloatingMenu() {
  const menuRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (menuRef.current) {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollProgress = scrollY / (documentHeight - windowHeight);
        
        // Calculate new gradient position based on scroll (horizontal only)
        const xPosition = 140 - (scrollProgress * 180); // Move from 140% to -40%
        
        menuRef.current.style.setProperty('--gradient-x', `${xPosition}%`);
        menuRef.current.style.setProperty('--gradient-y', '0%'); // Keep Y position fixed
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      ref={menuRef}
      className="distort fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 bg-white/10 border border-white/20 shadow-xl rounded-full px-6 py-4 space-x-6 flex items-center"
      style={{
        '--gradient-x': '82%',
        '--gradient-y': '0%'
      } as React.CSSProperties}
    >
      <ul className="flex items-center space-x-8">
        <li>
          <a 
            href="/" 
            className="text-true-gray-300 page-text hover:text-white transition-colors"
          >
            Home
          </a>
        </li>
        <li>
          <a 
            href="/updates" 
            className="text-true-gray-300 page-text hover:text-white transition-colors"
          >
            Updates
          </a>
        </li>
        <li>
          <a 
            href="/about" 
            className="text-true-gray-300 page-text hover:text-white transition-colors"
          >
            About
          </a>
        </li>
        <li>
          <a 
            href="/contact" 
            className="text-true-gray-300 page-text hover:text-white transition-colors"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
} 