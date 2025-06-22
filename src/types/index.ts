// Shared types for the application

export interface UpdateData {
  id: string;
  title: string;
  subtitle: string;
  content: (string | { type: 'image'; src: string; alt?: string })[];
  date: string;
}

export interface GalleryItem {
  id: number;
  src: string;
  alt: string;
}

export interface WorkPrinciple {
  id: number;
  title: string;
  description: string;
}

export interface WorkExperience {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface CompanyLogo {
  name: string;
  src: string;
  alt: string;
  height?: string;
  width: string;
} 