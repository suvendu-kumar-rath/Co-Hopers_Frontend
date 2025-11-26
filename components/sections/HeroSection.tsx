'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const handleCTAClick = () => {
    const pricingSection = document.querySelector('#pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center theme-bg-secondary theme-transition">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/hero/header.png)'
        }}
      />
      
      {/* Black blur effects on top and bottom */}
      <div className="absolute inset-0 w-full h-full">
        {/* Top blur gradient */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/80 to-transparent"></div>
        {/* Bottom blur gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 to-transparent"></div>
      </div>
      
      {/* Black transparent overlay */}
      <div className="absolute inset-0 w-full h-full bg-black/40"></div>
      
      {/* Content Container */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <div className="container-custom">
          <div className="text-center space-y-12 py-20">
            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold theme-text-primary leading-tight">
                Productivity-first coworking in India — a new way to{' '}
                <span className="theme-accent-primary">Create</span>
                <div className="w-1 h-12 theme-bg-accent-primary mx-auto mt-4"></div>
              </h1>
              
              <p className="text-lg md:text-xl lg:text-2xl theme-text-primary max-w-4xl mx-auto leading-relaxed">
                Cohopers is building productivity-forward coworking spaces in Bhubaneswar — where professionals thrive in spaces designed for focus and growth.
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center"
            >
              <motion.button
                onClick={handleCTAClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Be first in line
                <ArrowRight size={20} />
              </motion.button>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}