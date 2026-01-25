"use client";

import { useEffect } from 'react';

interface ContactOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactOverlay({ isOpen, onClose }: ContactOverlayProps) {
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

  const handleInstagramClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open('https://instagram.com/', '_blank', 'noopener,noreferrer');
  };

  const handleEmailClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.location.href = 'mailto:paul.decrosse@gmail.com';
  };

  const handleOverlayClick = () => {
    onClose();
  };

  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className={`contact-overlay ${isOpen ? 'open' : ''}`} onClick={handleOverlayClick}>
      <div className="contact-overlay-content" onClick={handleContentClick}>
        <button className="contact-action-button" onClick={handleInstagramClick}>
          INSTAGRAM
        </button>
        <button className="contact-action-button" onClick={handleEmailClick}>
          SEND EMAIL
        </button>
      </div>
    </div>
  );
}
