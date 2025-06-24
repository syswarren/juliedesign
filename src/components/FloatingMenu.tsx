'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useContactModal } from './ContactModalContext';

export default function FloatingMenu() {
  const menuRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const { openModal } = useContactModal();

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

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav 
      ref={menuRef}
      className="distort fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 border-b border-white/20 shadow-xl rounded-full px-6 py-3 space-x-6 flex items-center"
      style={{
        '--gradient-x': '82%',
        '--gradient-y': '0%'
      } as React.CSSProperties}
    >
      <ul className="flex items-center space-x-4">
        <li>
          <Link 
            href="/" 
            className={`text-true-gray-300 page-text hover:text-white transition-colors px-2 py-2 rounded-full whitespace-nowrap ${
              isActive('/') ? 'text-white dotted-underline' : ''
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            href="/now" 
            className={`text-true-gray-300 page-text hover:text-white transition-colors px-2 py-2 rounded-full whitespace-nowrap ${
              isActive('/now') ? 'text-white dotted-underline' : ''
            }`}
          >
            Now
          </Link>
        </li>
        <li>
          <Link 
            href="/about" 
            className={`text-true-gray-300 page-text hover:text-white transition-colors px-2 py-2 rounded-full whitespace-nowrap ${
              isActive('/about') ? 'text-white dotted-underline' : ''
            }`}
          >
            About me
          </Link>
        </li>
        <li>
          <button
            onClick={openModal}
            className="text-true-gray-300 page-text hover:text-white transition-colors px-2 py-2 rounded-full whitespace-nowrap"
          >
            Say hi
          </button>
        </li>
      </ul>
    </nav>
  );
} 