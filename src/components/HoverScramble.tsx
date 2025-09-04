'use client'

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

type HoverScrambleProps = {
  fromText: string;
  toText: string;
  className?: string;
  durationMs?: number; // total duration per transition
  frameIntervalMs?: number; // interval for scrambling frame updates
  delayMs?: number; // delay before starting transition on hover enter/leave
};

const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&_+-=<>';

export default function HoverScramble({
  fromText,
  toText,
  className,
  durationMs = 500,
  frameIntervalMs = 24,
  delayMs = 120,
}: HoverScrambleProps) {
  const [displayText, setDisplayText] = useState<string>(fromText);
  const [isHover, setIsHover] = useState<boolean>(false);
  const animationRef = useRef<number | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const startTimeRef = useRef<number>(0);
  const currentFromRef = useRef<string>(fromText);
  const currentToRef = useRef<string>(toText);

  useEffect(() => {
    currentFromRef.current = fromText;
  }, [fromText]);

  useEffect(() => {
    currentToRef.current = toText;
  }, [toText]);

  const maxLen = useMemo(() => Math.max(fromText.length, toText.length), [fromText.length, toText.length]);

  const getRandomChar = () => LETTERS[Math.floor(Math.random() * LETTERS.length)] || '*';

  const buildFrame = useCallback((progress: number, startText: string, endText: string) => {
    const out: string[] = [];
    const eased = 1 - Math.pow(1 - progress, 2); // easeOutQuad
    const revealCount = Math.floor(eased * maxLen);
    for (let i = 0; i < maxLen; i++) {
      const targetChar = endText[i] ?? '';
      const startChar = startText[i] ?? '';
      if (i < revealCount) {
        out.push(targetChar);
      } else if (targetChar === ' ' || startChar === ' ') {
        out.push(' ');
      } else {
        out.push(getRandomChar());
      }
    }
    return out.join('');
  }, [maxLen]);

  const stopAnimation = useCallback(() => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  const runTransition = useCallback((startText: string, endText: string) => {
    stopAnimation();
    startTimeRef.current = performance.now();

    // Kick a frequent interval to constantly reshuffle unrevealed chars
    intervalRef.current = setInterval(() => {
      const now = performance.now();
      const elapsed = now - startTimeRef.current;
      const progress = Math.min(1, elapsed / durationMs);
      setDisplayText(buildFrame(progress, startText, endText));
      if (progress >= 1) {
        stopAnimation();
        setDisplayText(endText);
      }
    }, frameIntervalMs);

    // Also schedule RAF to ensure smooth finish timing
    const loop = () => {
      const now = performance.now();
      const elapsed = now - startTimeRef.current;
      const progress = Math.min(1, elapsed / durationMs);
      setDisplayText(buildFrame(progress, startText, endText));
      if (progress < 1) {
        animationRef.current = requestAnimationFrame(loop);
      } else {
        stopAnimation();
        setDisplayText(endText);
      }
    };
    animationRef.current = requestAnimationFrame(loop);
  }, [buildFrame, durationMs, frameIntervalMs, stopAnimation]);

  const handleEnter = useCallback(() => {
    setIsHover(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      runTransition(currentFromRef.current, currentToRef.current);
    }, Math.max(0, delayMs));
  }, [delayMs, runTransition]);

  const handleLeave = useCallback(() => {
    setIsHover(false);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      runTransition(currentToRef.current, currentFromRef.current);
    }, Math.max(0, delayMs));
  }, [delayMs, runTransition]);

  useEffect(() => {
    return () => stopAnimation();
  }, [stopAnimation]);

  return (
    <span
      className={className}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{ cursor: 'pointer' }}
      aria-label={isHover ? toText : fromText}
    >
      {displayText}
    </span>
  );
}


