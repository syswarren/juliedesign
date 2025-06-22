export interface UpdateData {
  id: string;
  title: string;
  subtitle: string;
  content: (string | { type: 'image'; src: string; alt?: string })[];
  date: string;
}

export const updateData: UpdateData = {
  id: "22062025",
  title: "iOS App Update",
  subtitle: "New features and improvements for mobile users",
  content: [
    "We've just released a major update to our iOS app with several new features and improvements.",
    "",
    "Key improvements in this release:",
    "- Redesigned navigation for better usability",
    "- Improved performance and faster loading times",
    "- New dark mode support",
    "- Enhanced accessibility features",
    "",
    { type: 'image', src: '/updates/22062025/ios-dark.png', alt: 'iOS app dark mode' },
    "",
    "The new navigation system makes it easier to find what you're looking for, while the performance improvements ensure a smooth experience even on older devices.",
    "",
    { type: 'image', src: '/updates/22062025/ios-light.png', alt: 'iOS app light mode' },
    "",
    "We've also added comprehensive accessibility support, making the app more inclusive for all users."
  ],
  date: "2025-06-22"
}; 