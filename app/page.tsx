"use client";

import { useState, useEffect } from 'react';
import { Logo } from './components/logo';
import { ContactOverlay } from './components/contact-overlay';
import Image from 'next/image';
import Link from 'next/link';

// Main content component - used in both mobile and desktop
function ScreenContent() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation on mount
    setIsVisible(true);
  }, []);

  return (
    <>
      <div className={`screen-content page-transition ${isVisible ? 'page-transition-enter' : ''}`}>
        {/* Top Section - 50% height */}
        <div className="top-section">
          {/* Logo at top */}
          <div className="logo-container" style={{ transform: 'rotate(180deg)' }}>
            <Logo />
          </div>

          {/* Projects Grid - 30px gap from logo */}
          <div className="projects-grid">
            {/* Row 1: Full-width header spanning all 3 columns */}
            <div className="grid-header">
              PROJECTS
            </div>

            {/* Row 2: 3 square cells */}
            {/* Edit project ID to change the route */}
            <Link href="/projects/b" className="grid-cell grid-cell-active">
              <span className="grid-cell-content">B</span>
            </Link>
            <div className="grid-cell">
              <span className="grid-cell-content">?</span>
            </div>
            <div className="grid-cell">
              <span className="grid-cell-content">?</span>
            </div>

            {/* Row 3: 3 square cells */}
            <div className="grid-cell">
              <span className="grid-cell-content">?</span>
            </div>
            <div className="grid-cell">
              <span className="grid-cell-content">?</span>
            </div>
            <div className="grid-cell">
              <span className="grid-cell-content">?</span>
            </div>
          </div>
        </div>

        {/* Bottom Section - 50% height */}
        <div className="bottom-section">
          {/* Image - takes remaining space */}
          <div className="image-container">
            {/* Edit this src to change the image */}
            <Image
              src="/image/home1.png"
              alt="Project"
              fill
              className="project-image"
              priority
            />
          </div>

          {/* Contact button - 30px gap */}
          <button className="contact-button" onClick={() => setIsContactOpen(true)}>
            CONTACT
          </button>

          {/* Logo at bottom - 30px gap */}
          <div className="logo-container-bottom">
            <Logo />
          </div>
        </div>
      </div>

      {/* Contact Overlay */}
      <ContactOverlay isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
}

export default function Home() {
  return (
    <>
      {/* Mobile: Direct content (visible on screens < 768px) */}
      <div className="mobile-wrapper">
        <div className="mobile-container">
          <ScreenContent />
        </div>
      </div>

      {/* Desktop: iPhone mockup wrapper (visible on screens >= 768px) */}
      <div className="desktop-wrapper">
        <div className="iphone-mockup">
          <div className="iphone-screen">
            <div className="mobile-container">
              <ScreenContent />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
