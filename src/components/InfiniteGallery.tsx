'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
}

interface InfiniteGalleryProps {
  items: GalleryItem[];
  height?: string;
  animationDuration?: number;
}

export default function InfiniteGallery({ 
  items, 
  height = "200px", 
  animationDuration = 20 
}: InfiniteGalleryProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeft(carouselRef.current?.scrollLeft || 0);
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setIsPaused(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setIsPaused(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (carouselRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeft(carouselRef.current?.scrollLeft || 0);
    setIsPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - (carouselRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setIsPaused(false);
  };

  return (
    <section className="gallery">
      <div 
        ref={carouselRef}
        className="carousel"
        style={{ 
          height,
          maxHeight: '680px',
          '--bg-clr': '#1a1a1a',
          '--animation-duration': `${animationDuration}s`
        } as React.CSSProperties}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className={`gallery-slides-wrapper ${isPaused ? 'paused' : ''}`}>
          {items.map((item, index) => (
            <div key={item.id} className="gallery-image-container">
              <Image
                src={item.src}
                alt={item.alt}
                width={0}
                height={0}
                sizes="60vh"
                priority={index === 0}
                className="gallery-image"
                style={{ height: '60vh', maxHeight: '680px', width: 'auto' }}
                onError={() => {
                  console.error('Failed to load image:', item.src);
                }}
                onLoad={() => {
                  // Image loaded successfully
                }}
              />
            </div>
          ))}
        </div>
        <div className={`gallery-slides-wrapper ${isPaused ? 'paused' : ''}`}>
          {items.map((item, index) => (
            <div key={`duplicate-${item.id}`} className="gallery-image-container">
              <Image
                src={item.src}
                alt={item.alt}
                width={0}
                height={0}
                sizes="60vh"
                priority={index === 0}
                className="gallery-image"
                style={{ height: '60vh', maxHeight: '680px', width: 'auto' }}
                onError={() => {
                  console.error('Failed to load image:', item.src);
                }}
                onLoad={() => {
                  // Image loaded successfully
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 