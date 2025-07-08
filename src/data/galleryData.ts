export interface GalleryItem {
  id: number;
  src: string;
  alt: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: '/gallery/Pearl_preview.png',
    alt: 'Pearl Preview'
  },
  {
    id: 2,
    src: '/gallery/PH_FeaturedFeed.png',
    alt: 'Product Hunt Featured Feed'
  },
  {
    id: 3,
    src: '/gallery/PH_BlackTote.png',
    alt: 'Product Hunt Black Tote Design'
  }
]; 