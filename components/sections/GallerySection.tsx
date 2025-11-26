'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useState } from 'react';

const galleryImages = [
  {
    src: '/images/gallery/cohopers3.jpg',
    alt: 'Cohopers workspace interior'
  },
  {
    src: '/images/gallery/Cohopers_1.jpeg',
    alt: 'Cohopers meeting room'
  },
  {
    src: '/images/gallery/cohopers2.jpeg',
    alt: 'Cohopers open workspace'
  }
];

// Interactive Image Card Component
const InteractiveImageCard = ({ image, index }: { image: any; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(y, [-300, 300], [15, -15]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-300, 300], [-15, 15]), { stiffness: 300, damping: 30 });
  const scale = useSpring(isHovered ? 1.05 : 1, { stiffness: 300, damping: 30 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = event.clientX - centerX;
    const distanceY = event.clientY - centerY;
    
    x.set(distanceX);
    y.set(distanceY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative group cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1000,
      }}
    >
      <motion.div
        className="relative overflow-hidden rounded-lg shadow-lg"
        style={{
          rotateX,
          rotateY,
          scale,
          transformStyle: 'preserve-3d',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <div
          className="w-full h-96 bg-cover bg-center transition-all duration-500"
          style={{
            backgroundImage: `url(${image.src})`
          }}
        />
        
        {/* Gradient overlay with enhanced effect */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"
          animate={{
            opacity: isHovered ? 0.3 : 0.1
          }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Subtle border glow on hover */}
        <motion.div
          className="absolute inset-0 rounded-lg border-2 border-transparent"
          animate={{
            borderColor: isHovered ? 'rgba(0, 78, 251, 0.3)' : 'transparent'
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default function GallerySection() {
  return (
    <section className="section-padding theme-bg-secondary theme-transition">
      <div className="container-custom">
        {/* Three Column Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <InteractiveImageCard key={index} image={image} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}