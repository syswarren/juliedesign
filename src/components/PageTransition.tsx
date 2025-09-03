'use client';

import { usePathname } from 'next/navigation';
import { PropsWithChildren } from 'react';

export default function PageTransition({ children }: PropsWithChildren) {
  // Remove fade-in wrapper to avoid any chance of delaying first paint/LCP
  // Keeping the key ensures remounts on navigation without animation
  const pathname = usePathname();
  return <>{children}</>;
}


