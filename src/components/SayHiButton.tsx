'use client';

import { useContactModal } from './ContactModalContext';

interface SayHiButtonProps {
  className?: string;
}

export default function SayHiButton({ className }: SayHiButtonProps) {
  const { openModal } = useContactModal();

  return (
    <button 
      onClick={openModal}
      className={className}
    >
      Say hi
    </button>
  );
} 