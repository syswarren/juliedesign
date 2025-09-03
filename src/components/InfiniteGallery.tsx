'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
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
  const animationRef = useRef<number>();
  const scrollPosition = useRef(0);
  const lastTimeRef = useRef<number>(0);

  // Create multiple copies of items for seamless infinite scroll
  const extendedItems = [...items, ...items, ...items];

  const scroll = useCallback((timestamp: number) => {
    if (!carouselRef.current || isPaused || isDragging) {
      animationRef.current = requestAnimationFrame(scroll);
      return;
    }

    const container = carouselRef.current;
    const itemWidth = container.scrollWidth / 3; // Since we have 3 copies
    
    // Use timestamp for smooth, consistent animation
    if (lastTimeRef.current === 0) lastTimeRef.current = timestamp;
    const deltaTime = timestamp - lastTimeRef.current;
    lastTimeRef.current = timestamp;
    
    // Speed calculation: pixels per second, much slower
    const pixelsPerSecond = itemWidth / (animationDuration * 1000);
    const pixelsToMove = (pixelsPerSecond * deltaTime);
    
    scrollPosition.current += pixelsToMove;
    
    // Reset position when we've scrolled through one complete set
    if (scrollPosition.current >= itemWidth) {
      scrollPosition.current = 0;
    }
    
    container.scrollLeft = scrollPosition.current;
    animationRef.current = requestAnimationFrame(scroll);
  }, [isPaused, isDragging, animationDuration]);

  useEffect(() => {
    animationRef.current = requestAnimationFrame(scroll);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [scroll]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX);
    setScrollLeft(carouselRef.current?.scrollLeft || 0);
    setIsPaused(true);
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setIsPaused(false);
    if (carouselRef.current) {
      scrollPosition.current = carouselRef.current.scrollLeft;
    }
    lastTimeRef.current = 0; // Reset for smooth resume
    animationRef.current = requestAnimationFrame(scroll);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setIsPaused(false);
    if (carouselRef.current) {
      scrollPosition.current = carouselRef.current.scrollLeft;
    }
    lastTimeRef.current = 0; // Reset for smooth resume
    animationRef.current = requestAnimationFrame(scroll);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX;
    const walk = (x - startX) * 1.5; // Sensitivity multiplier
    const newScrollLeft = scrollLeft - walk;
    carouselRef.current.scrollLeft = newScrollLeft;
    scrollPosition.current = newScrollLeft;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX);
    setScrollLeft(carouselRef.current?.scrollLeft || 0);
    setIsPaused(true);
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !carouselRef.current) return;
    const x = e.touches[0].pageX;
    const walk = (x - startX) * 1.5;
    const newScrollLeft = scrollLeft - walk;
    carouselRef.current.scrollLeft = newScrollLeft;
    scrollPosition.current = newScrollLeft;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setIsPaused(false);
    if (carouselRef.current) {
      scrollPosition.current = carouselRef.current.scrollLeft;
    }
    lastTimeRef.current = 0; // Reset for smooth resume
    animationRef.current = requestAnimationFrame(scroll);
  };

  return (
    <section className="gallery">
      <div 
        ref={carouselRef}
        className="carousel-smooth"
        style={{ 
          height: 'var(--gallery-height)',
          maxHeight: '680px',
          overflow: 'hidden',
          cursor: isDragging ? 'grabbing' : 'grab'
        }}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="gallery-slides-wrapper-smooth">
          {extendedItems.map((item, index) => (
            <div key={`${item.id}-${Math.floor(index / items.length)}`} className="gallery-image-container">
              <Image
                src={item.src}
                alt={item.alt}
                width={0}
                height={0}
                sizes="60vh"
                priority={index === 0}
                loading={index === 0 ? 'eager' : 'lazy'}
                fetchPriority={index === 0 ? 'high' as any : undefined}
                className="gallery-image"
                style={{ height: '100%', maxHeight: '680px', width: 'auto' }}
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