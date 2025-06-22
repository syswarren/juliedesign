export interface UpdateData {
  id: string;
  title: string;
  subtitle: string;
  content: (string | { type: 'image'; src: string; alt?: string })[];
  date: string;
}

export const updateData: UpdateData = {
  id: "10062025",
  title: "Performance Optimization",
  subtitle: "Major speed improvements across the platform",
  content: [
    "We've completed a major performance optimization that significantly improves loading times and user experience across our entire platform.",
    "",
    "Performance improvements:",
    "- 40% reduction in page load times",
    "- 50% faster API response times",
    "- Improved image optimization",
    "- Better caching strategies",
    "- Reduced bundle sizes",
    "- Enhanced CDN configuration",
    "",
    { type: 'image', src: '/gallery/PH_BlackTote.png', alt: 'Performance optimization results' },
    "",
    "These optimizations were achieved through careful analysis of performance bottlenecks and implementing modern web performance best practices. Users will notice faster interactions and smoother animations throughout the platform.",
    "",
    "We've also implemented performance monitoring to ensure these improvements are maintained as we continue to add new features."
  ],
  date: "2025-06-10"
}; 