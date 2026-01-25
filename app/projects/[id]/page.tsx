"use client";

import { useRouter } from 'next/navigation';
import { ProjectLogo } from '../../components/project-logo';
import { ImageGrid } from '../../components/image-grid';

// Project images - Edit this array to change project images
const PROJECT_IMAGES = [
  '/image/home1.png',
  '/image/home1.png',
  '/image/home1.png',
  '/image/home1.png',
  '/image/home1.png',
  '/image/home1.png',
  '/image/home1.png',
  '/image/home1.png',
  '/image/home1.png',
  '/image/home1.png',
  '/image/home1.png',
  '/image/home1.png',
];

function ProjectDetailContent({ projectId }: { projectId: string }) {
  const router = useRouter();

  return (
    <div className="screen-content">
      {/* Top Section - Project Logo */}
      <div className="project-detail-top">
        <div className="project-logo-container">
          <ProjectLogo projectId={projectId} />
        </div>
      </div>

      {/* Middle Section - Image Grid */}
      <div className="project-detail-middle">
        <ImageGrid images={PROJECT_IMAGES} />
      </div>

      {/* Bottom Section - Back Button */}
      <div className="project-detail-bottom">
        <button className="back-button" onClick={() => router.back()}>
          BACK
        </button>
      </div>
    </div>
  );
}

export default function ProjectDetail({ params }: { params: { id: string } }) {
  return (
    <>
      {/* Mobile: Direct content (visible on screens < 768px) */}
      <div className="mobile-wrapper">
        <div className="mobile-container">
          <ProjectDetailContent projectId={params.id} />
        </div>
      </div>

      {/* Desktop: iPhone mockup wrapper (visible on screens >= 768px) */}
      <div className="desktop-wrapper">
        <div className="iphone-mockup">
          <div className="iphone-screen">
            <div className="mobile-container">
              <ProjectDetailContent projectId={params.id} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
