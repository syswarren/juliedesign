export interface UpdateData {
  id: string;
  title: string;
  subtitle: string;
  content: (string | { type: 'image'; src: string; alt?: string })[];
  date: string;
}

export const updateData: UpdateData = {
  id: "25062025",
  title: "Design System Launch",
  subtitle: "Introducing our comprehensive component library",
  content: [
    "Today we're excited to launch our new design system that will help teams build consistent, accessible, and beautiful products faster.",
    "",
    "The design system includes:",
    "- 50+ reusable components",
    "- Comprehensive documentation", 
    "- Accessibility guidelines",
    "- Design tokens and variables",
    "- Figma plugin for seamless integration",
    "",
    { type: 'image', src: '/gallery/PH_BrandGuidelines.png', alt: 'Design system brand guidelines' },
    "",
    "This system has been built with scalability in mind and will serve as the foundation for all our future products. Teams can now focus on solving user problems rather than reinventing basic UI patterns.",
    "",
    { type: 'image', src: '/gallery/PH_IconsWallpaper.png', alt: 'Icon system showcase' },
    "",
    "We've also created a dedicated documentation site where developers and designers can find everything they need to get started."
  ],
  date: "2025-06-25"
}; 