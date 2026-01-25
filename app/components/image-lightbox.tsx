"use client";

import { useEffect } from 'react';
import Image from 'next/image';

interface ImageLightboxProps {
  imageSrc: string;
  isOpen: boolean;
  onClose: () => void;
}

export function ImageLightbox({ imageSrc, isOpen, onClose }: ImageLightboxProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="lightbox-overlay"
      onClick={onClose}
    >
      <div 
        className="lightbox-image-container"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={imageSrc}
          alt="Project image"
          fill
          className="lightbox-image"
          onClick={onClose}
        />
      </div>
    </div>
  );
}
