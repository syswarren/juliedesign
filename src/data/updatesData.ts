export interface UpdateData {
  id: string;
  title: string;
  subtitle: string;
  content: (string | { type: 'image'; src: string; alt?: string })[];
  date: string;
}

// Import individual updates
import { updateData as update17012025 } from './updates/17012025/data';
import { updateData as update23062025 } from './updates/23062025/data';

export const updates: UpdateData[] = [
  update17012025,
  update23062025,
]; 