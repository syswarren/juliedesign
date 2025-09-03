'use client';

import { useRef, useEffect, useState, useCallback } from 'react';

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
}

interface InfiniteGalleryProps {
  items: GalleryItem[];
  height?: string;
  speedPxPerSec?: number; // base auto-scroll speed
}

export default function InfiniteGallery({
  items,
  height = '60vh',
  speedPxPerSec = 30
}: InfiniteGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isPointerDown, setIsPointerDown] = useState(false);
  const copies = 2; // render 2 copies for seamless loop

  // Animation state
  const translateXRef = useRef(0);
  const velocityRef = useRef(0);
  const baseSpeedRef = useRef(speedPxPerSec);
  const lastTsRef = useRef<number>(0);
  const lastPointerXRef = useRef<number>(0);
  const setWidthRef = useRef<number>(0);
  const rafRef = useRef<number | null>(null);

  // Respect reduced motion
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Lower base speed on small screens
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const isSmall = window.matchMedia('(max-width: 640px)').matches;
    baseSpeedRef.current = prefersReducedMotion ? 0 : isSmall ? Math.max(10, speedPxPerSec / 2) : speedPxPerSec;
  }, [prefersReducedMotion, speedPxPerSec]);

  const extended = Array.from({ length: copies }).flatMap((_, i) =>
    items.map((it) => ({ ...it, id: it.id + i * 100000 }))
  );

  // Measure width of a single set (sum of first N items)
  const measureSetWidth = useCallback(() => {
    const track = trackRef.current;
    if (!track) return 0;
    let width = 0;
    let counted = 0;
    for (let i = 0; i < track.children.length && counted < items.length; i += 1) {
      const el = track.children[i] as HTMLElement;
      width += el.offsetWidth; // includes border/margins via layout
      counted += 1;
    }
    const oneSet = Math.max(1, Math.round(width));
    setWidthRef.current = oneSet;
    return oneSet;
  }, [items.length]);

  const loopPosition = useCallback((x: number) => {
    const w = setWidthRef.current || measureSetWidth();
    if (w <= 0) return x;
    // Keep x in [-w, 0) for stable transforms
    while (x <= -w) x += w;
    while (x > 0) x -= w;
    return x;
  }, [measureSetWidth]);

  const dragAccumRef = useRef(0);

  const animate = useCallback((ts: number) => {
    if (!containerRef.current || !trackRef.current) {
      rafRef.current = requestAnimationFrame(animate);
      return;
    }
    if (lastTsRef.current === 0) lastTsRef.current = ts;
    const dt = (ts - lastTsRef.current) / 1000; // seconds
    lastTsRef.current = ts;

    // Pause when tab hidden or reduced motion requested
    if (document.hidden || prefersReducedMotion) {
      rafRef.current = requestAnimationFrame(animate);
      return;
    }

    // Auto-scroll base speed when not actively dragging
    const base = isPointerDown ? 0 : baseSpeedRef.current;
    let vx = velocityRef.current;

    // Apply base speed and current velocity
    let dx = (base + vx) * dt;
    // Apply any drag delta accumulated this frame
    const dragDx = dragAccumRef.current;
    dragAccumRef.current = 0;
    let x = translateXRef.current - dx + dragDx; // negative moves left

    // If actively dragging, set velocity based on recent drag delta
    if (isPointerDown) {
      velocityRef.current = -dragDx * 8; // scale factor for inertia
      vx = velocityRef.current;
    }

    // Friction on velocity
    const friction = 0.92;
    vx *= friction;
    if (Math.abs(vx) < 0.02) vx = 0;
    velocityRef.current = vx;

    x = loopPosition(x);
    translateXRef.current = x;
    trackRef.current.style.transform = `translate3d(${x}px, 0, 0)`;

    rafRef.current = requestAnimationFrame(animate);
  }, [isPointerDown, loopPosition, prefersReducedMotion]);

  useEffect(() => {
    // Kick off animation
    rafRef.current = requestAnimationFrame(animate);
    const handleVisibility = () => {
      // Reset timestamp to avoid a large dt after tab switches
      lastTsRef.current = 0;
    };
    document.addEventListener('visibilitychange', handleVisibility);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibility);
      if (rafRef.current) cancelAnimationFrame(rafRef.current as number);
    };
  }, [animate]);

  // Measure on mount and resize
  useEffect(() => {
    const normalizeAfterMeasure = () => {
      const w = measureSetWidth();
      // Normalize position after measure
      translateXRef.current = loopPosition(translateXRef.current);
      if (trackRef.current) {
        trackRef.current.style.transform = `translate3d(${translateXRef.current}px, 0, 0)`;
      }
      return w;
    };

    // Stabilize measurement across a few frames for Safari
    let frames = 0;
    const stabilize = () => {
      frames += 1;
      normalizeAfterMeasure();
      if (frames < 3) requestAnimationFrame(stabilize);
    };
    requestAnimationFrame(stabilize);

    const ro = new ResizeObserver(() => {
      // Re-measure and normalize, throttled via rAF
      requestAnimationFrame(stabilize);
    });
    if (containerRef.current) ro.observe(containerRef.current);
    if (trackRef.current) ro.observe(trackRef.current);
    return () => ro.disconnect();
  }, [measureSetWidth, loopPosition]);

  // Pointer/drag handlers
  const onPointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    setIsPointerDown(true);
    lastPointerXRef.current = e.clientX;
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isPointerDown) return;
    const currentX = e.clientX;
    const delta = currentX - lastPointerXRef.current;
    lastPointerXRef.current = currentX;
    // Accumulate delta to be applied in the animation frame
    dragAccumRef.current += delta;
  };

  const endDrag = () => {
    setIsPointerDown(false);
    setIsDragging(false);
  };

  return (
    <section className="gallery">
      <div
        ref={containerRef}
        className="carousel-smooth"
        style={{
          height: 'var(--gallery-height)',
          maxHeight: '680px',
          overflow: 'hidden',
          cursor: isDragging ? 'grabbing' : 'grab'
        }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        onPointerCancel={endDrag}
      >
        <div
          ref={trackRef}
          className="gallery-slides-wrapper-smooth"
          style={{ willChange: 'transform' }}
        >
          {extended.map((item, index) => (
            <div key={`${item.id}-${index}`} className="gallery-image-container">
              <img
                src={item.src}
                alt={item.alt}
                className="gallery-image"
                draggable={false}
                loading={'lazy'}
                decoding="async"
                fetchPriority="low"
                sizes="(max-width: 768px) 80vw, 40vw"
                style={{ height: '100%', maxHeight: '680px', width: 'auto' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}