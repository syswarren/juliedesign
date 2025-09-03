'use client';

import { useMemo, useEffect, useState } from 'react';

function generateBoxShadows(count: number, areaSize = 2000): string {
  const parts: string[] = [];
  for (let i = 0; i < count; i += 1) {
    const x = Math.floor(Math.random() * areaSize);
    const y = Math.floor(Math.random() * areaSize);
    parts.push(`${x}px ${y}px #FFF`);
  }
  return parts.join(', ');
}

interface StarsLayerProps {
  size: number;
  count: number;
  animationDurationSec: number;
}

function StarsLayer({ size, count, animationDurationSec }: StarsLayerProps) {
  const boxShadow = useMemo(() => generateBoxShadows(count), [count]);

  return (
    <>
      <div
        className="stars-layer"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          boxShadow,
          animationDuration: `${animationDurationSec}s`,
        }}
      />
      {/* Continuation for seamless vertical loop */}
      <div
        className="stars-layer stars-layer-cont"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          boxShadow,
          top: '2000px',
          animationDuration: `${animationDurationSec}s`,
        }}
      />
    </>
  );
}

export default function Stars() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="stars-container" aria-hidden="true">
      <StarsLayer size={1} count={250} animationDurationSec={80} />
      <StarsLayer size={1} count={80} animationDurationSec={120} />
      <StarsLayer size={2} count={30} animationDurationSec={160} />
    </div>
  );
}


