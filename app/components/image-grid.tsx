"use client";

import { useState } from 'react';
import Image from 'next/image';
import { ImageLightbox } from './image-lightbox';

interface ImageGridProps {
  images: string[];
}

export function ImageGrid({ images }: ImageGridProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div className="image-grid">
        {images.map((src, index) => (
          <div 
            key={index} 
            className="image-grid-cell"
            onClick={() => setSelectedImage(src)}
          >
            <Image
              src={src}
              alt={`Project image ${index + 1}`}
              fill
              className="image-grid-thumbnail"
            />
          </div>
        ))}
      </div>
      
      {selectedImage && (
        <ImageLightbox
          imageSrc={selectedImage}
          isOpen={true}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </>
  );
}
