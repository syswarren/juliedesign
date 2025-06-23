# Creating a Dynamic Gradient Floating Menu with Scroll-Based Animation

I recently implemented a floating navigation menu with a dynamic gradient background that responds to scroll position. The effect creates a subtle but engaging visual experience where the gradient moves horizontally as users scroll through the page. Here's how I built it.

## The Concept

The goal was to create a floating menu that:
- Stays fixed at the bottom of the viewport
- Has a glassmorphism effect with backdrop blur
- Features a colorful gradient background that moves based on scroll position
- Maintains excellent readability and accessibility

## The Implementation

### 1. The CSS Foundation

First, I created the base styling with the `distort` class:

```css
.distort {
  backdrop-filter: blur(10px) contrast(1.1) saturate(180%) brightness(0.8);
  -webkit-backdrop-filter: blur(10px) contrast(1.1) saturate(180%) brightness(0.8);
  background-color: rgba(0, 0, 0, 0);
  z-index: 1000;
  will-change: backdrop-filter;
  transform: translateZ(0);
  background-size: 100% 100%;
  background-position: 0px 0px,0px 0px;
  background-image: radial-gradient(67% 10% at var(--gradient-x, 82%) var(--gradient-y, 0%), #E5592282 0%, #EDE44C7A 17%, #6DECC778 39%, #5AB7EF7D 58%, #8E58B763 75%, #5A337D33 88%, #00000000 100%),radial-gradient(75% 75% at 21% 29%, #00000025 0%, #00000027 100%);
}
```

Key aspects of this CSS:
- **Backdrop filter**: Creates the glassmorphism effect with blur, contrast, saturation, and brightness adjustments
- **CSS custom properties**: Uses `--gradient-x` and `--gradient-y` to control gradient position
- **Complex gradient**: A radial gradient with multiple color stops creating a vibrant, organic look
- **Performance optimization**: `will-change: backdrop-filter` and `transform: translateZ(0)` for smooth animations

### 2. The React Component Structure

The floating menu is built as a React component with scroll event handling:

```tsx
'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function FloatingMenu() {
  const menuRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

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
      className="distort fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 border-b border-white/20 shadow-xl rounded-full px-6 py-3 space-x-6 flex items-center"
      style={{
        '--gradient-x': '82%',
        '--gradient-y': '0%'
      } as React.CSSProperties}
    >
      {/* Navigation links */}
    </nav>
  );
}
```

### 3. The Scroll Animation Logic

The core of the effect lies in the scroll calculation:

```javascript
const scrollY = window.scrollY;
const windowHeight = window.innerHeight;
const documentHeight = document.documentElement.scrollHeight;
const scrollProgress = scrollY / (documentHeight - windowHeight);

// Calculate new gradient position based on scroll (horizontal only)
const xPosition = 140 - (scrollProgress * 180); // Move from 140% to -40%
```

**How it works:**
1. **Scroll progress calculation**: `scrollProgress` gives us a value between 0 and 1 representing how far the user has scrolled
2. **Position mapping**: The gradient moves from 140% (right side) to -40% (left side) as the user scrolls
3. **Smooth transition**: The `180` multiplier creates a full range of movement across the entire scroll distance

### 4. The Gradient Design

The gradient uses a complex radial gradient with carefully chosen colors:

```css
radial-gradient(
  67% 10% at var(--gradient-x, 82%) var(--gradient-y, 0%), 
  #E5592282 0%, 
  #EDE44C7A 17%, 
  #6DECC778 39%, 
  #5AB7EF7D 58%, 
  #8E58B763 75%, 
  #5A337D33 88%, 
  #00000000 100%
)
```

**Color choices:**
- **Orange (#E55922)**: Warm, energetic starting point
- **Yellow (#EDE44C)**: Bright, optimistic transition
- **Cyan (#6DECC7)**: Cool, modern middle tone
- **Blue (#5AB7EF)**: Professional, trustworthy
- **Purple (#8E58B7)**: Creative, sophisticated
- **Dark purple (#5A337D)**: Deep, mysterious ending

Each color has an alpha channel (82, 7A, 78, 7D, 63, 33) to create transparency and blend with the backdrop blur.

## Technical Considerations

### Performance Optimization
- **Event throttling**: The scroll event fires frequently, but modern browsers handle this well
- **CSS transforms**: Using `transform: translateZ(0)` creates a new stacking context and enables hardware acceleration
- **Will-change property**: Hints to the browser that the backdrop-filter will animate

### Browser Compatibility
- **Backdrop-filter**: Well-supported in modern browsers, with webkit prefix for Safari
- **CSS custom properties**: Excellent support across all modern browsers
- **Fallbacks**: The effect gracefully degrades on older browsers

### Accessibility
- **High contrast**: The gradient doesn't interfere with text readability
- **Focus states**: Navigation links maintain proper focus indicators
- **Reduced motion**: Consider adding `prefers-reduced-motion` media query for users who prefer less animation

## The Result

The final effect creates a subtle but engaging visual experience:
- The gradient smoothly moves from right to left as users scroll
- The glassmorphism effect creates depth and modern aesthetics
- The floating position keeps navigation always accessible
- The animation adds life to the interface without being distracting

This technique demonstrates how small, thoughtful animations can significantly enhance user experience while maintaining performance and accessibility standards.

## Potential Enhancements

Some ideas for future iterations:
- **Mouse tracking**: Add subtle gradient movement based on cursor position
- **Page-specific colors**: Different gradient palettes for different sections
- **Scroll direction**: Different animation curves based on scroll direction
- **Reduced motion**: Respect user preferences for reduced motion
- **Performance monitoring**: Add analytics to track animation performance

The floating menu gradient effect is a perfect example of how modern CSS and JavaScript can work together to create delightful, performant user interfaces that enhance rather than distract from the content. 