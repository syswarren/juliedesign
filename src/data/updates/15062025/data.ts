export interface UpdateData {
  id: string;
  title: string;
  subtitle: string;
  content: (string | { type: 'image'; src: string; alt?: string })[];
  date: string;
}

export const updateData: UpdateData = {
  id: "15062025",
  title: "Analytics Dashboard",
  subtitle: "New insights and reporting features",
  content: [
    "We're launching our new analytics dashboard that provides deep insights into user behavior and product performance.",
    "",
    "The dashboard includes:",
    "- Real-time user activity tracking",
    "- Conversion funnel analysis",
    "- A/B testing results",
    "- Performance metrics",
    "- Custom report builder",
    "- Export capabilities",
    "",
    { type: 'image', src: '/gallery/PH_FeaturedFeed.png', alt: 'Analytics dashboard overview' },
    "",
    "This tool will help teams make data-driven decisions and optimize their products based on actual user behavior. The interface is designed to be intuitive, allowing even non-technical users to understand complex data.",
    "",
    { type: 'image', src: '/gallery/PH_TheAlgo.png', alt: 'Analytics algorithm visualization' },
    "",
    "We've also included pre-built templates for common use cases, making it easy to get started with meaningful reports right away."
  ],
  date: "2025-06-15"
}; 