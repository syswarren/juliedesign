export interface GalleryItem {
  id: number;
  src: string;
  alt: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: '/gallery/project1.avif',
    alt: 'Project 1 - User Interface Design'
  },
  {
    id: 2,
    src: '/gallery/project2.avif',
    alt: 'Project 2 - Mobile App Design'
  },
  {
    id: 3,
    src: '/gallery/project3.jpg',
    alt: 'Project 3 - Brand Identity'
  },
  {
    id: 4,
    src: '/gallery/project4.jpg',
    alt: 'Project 4 - Web Design'
  },
  {
    id: 5,
    src: '/gallery/project5.jpg',
    alt: 'Project 5 - Dashboard Design'
  },
  {
    id: 6,
    src: '/gallery/project6.jpg',
    alt: 'Project 6 - Product Design'
  }
]; 