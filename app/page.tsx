'use client';

import { useState, useEffect } from 'react';
import { LoadingAnimation } from '@/components/ui/loading-animation';
import Navbar from '@/components/navigation/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import LogoCarousel from '@/components/sections/LogoCarousel';
import ServicesFlowSection from '@/components/sections/ServicesFlowSection';
import JoinCommunitySection from '@/components/sections/JoinCommunitySection';
import FlexibleWorkspacesSection from '@/components/sections/FlexibleWorkspacesSection';
import WorkspaceSolutionsSection from '@/components/sections/WorkspaceSolutionsSection';
import GallerySection from '@/components/sections/GallerySection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import PricingSection from '@/components/sections/PricingSection';
import VirtualTourSection from '@/components/sections/VirtualTourSection';
import BlogEventsSection from '@/components/sections/BlogEventsSection';
import FooterSection from '@/components/sections/FooterSection';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  // Always show loading animation for now (for testing)
  if (isLoading) {
    return <LoadingAnimation onComplete={handleLoadingComplete} />;
  }

  return (
    <main className="min-h-screen theme-bg-primary theme-text-primary theme-transition">
      <Navbar />
      <HeroSection />
      <LogoCarousel />
      <ServicesFlowSection />
      <JoinCommunitySection />
      <FlexibleWorkspacesSection />
      <WorkspaceSolutionsSection />
      <GallerySection />
      <TestimonialsSection />
      <PricingSection />
      <VirtualTourSection />
      <BlogEventsSection />
      <FooterSection />
    </main>
  );
}