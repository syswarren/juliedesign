export interface UpdateData {
  id: string;
  title: string;
  subtitle: string;
  content: (string | { type: 'image'; src: string; alt?: string })[];
  date: string;
}

export const updateData: UpdateData = {
  id: "20062025",
  title: "Mobile App Redesign",
  subtitle: "Complete overhaul of our mobile experience",
  content: [
    "We've completely redesigned our mobile app from the ground up, focusing on performance, accessibility, and user experience.",
    "",
    "Key improvements:",
    "- 60% faster load times",
    "- Improved navigation patterns",
    "- Better touch targets and spacing",
    "- Dark mode support",
    "- Offline functionality",
    "- Enhanced accessibility features",
    "",
    { type: 'image', src: '/gallery/PH_Homepage.png', alt: 'Mobile app redesign' },
    "",
    "The new design follows modern mobile design principles and provides a seamless experience across all devices. We've also introduced new features like gesture navigation and haptic feedback for a more native feel.",
    "",
    "Early user feedback has been overwhelmingly positive, with users reporting much better performance and ease of use."
  ],
  date: "2025-06-20"
}; 