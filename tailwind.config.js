/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    safelist: [
      // Custom class - preserve the distort class
      'distort',
  
      // Backdrop filter utilities - these are critical for production builds
      // as CSS optimizers might remove backdrop-filter properties
      'backdrop-blur',
      'backdrop-blur-10',
      'backdrop-contrast-110',
      'backdrop-saturate-180',
      'backdrop-brightness-80',
      
      // Vendor prefixes for backdrop-filter
      '-webkit-backdrop-filter',
      '-moz-backdrop-filter',
      
      // Transform utilities for hardware acceleration
      'transform',
      'translate-z-0',
      '-webkit-transform',
      '-moz-transform',
      
      // Z-index and will-change utilities
      'z-1000',
      'will-change',
      
      // Background utilities
      'bg-black',
      'bg-opacity-40',
      'bg-opacity-60',
      
      // Isolation utility
      'isolate',
    ],
    theme: {
      extend: {
        // Add any customizations here if needed later
      },
    },
    plugins: [],
  };