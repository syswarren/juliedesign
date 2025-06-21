export interface UpdateItem {
  title: string;
  description?: string;
  images?: string[];
  date: string;
}

export const updates: UpdateItem[] = [
  {
    title: "New project launched",
    description: "Just launched a new design system for early stage startups. Focused on speed and flexibility.",
    date: "March 15, 2024"
  },
  {
    title: "Design workshop",
    images: [
      "/gallery/project1.jpg",
      "/gallery/project2.jpg",
      "/gallery/project3.jpg"
    ],
    date: "March 10, 2024"
  },
  {
    title: "Product Hunt feature",
    description: "Excited to share that our latest project was featured on Product Hunt today!",
    date: "March 5, 2024"
  },
  {
    title: "Design process insights",
    images: [
      "/gallery/project4.jpg"
    ],
    date: "February 28, 2024"
  }
]; 