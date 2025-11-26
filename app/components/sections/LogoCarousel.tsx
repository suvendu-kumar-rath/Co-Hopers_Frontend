'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const companies = [
  { name: 'Aarus', logo: '/images/logos/aarus.png' },
  { name: 'ArcelorMittal', logo: '/images/logos/Arcelormittal-logo.svg.png' },
  { name: 'LIC', logo: '/images/logos/LIC.png' },
  { name: 'RootAMZ', logo: '/images/logos/rootAMZ.jpeg' },
  { name: 'Stevin Shipping', logo: '/images/logos/Stevin-Shipping.jpg' },
  { name: 'USHA', logo: '/images/logos/USHA_Logo.jpg' },
  { name: 'UTM Technologies', logo: '/images/logos/utm technologies.png' },
  { name: 'Brio Elevators', logo: '/images/logos/Brio Elevators.png' },
  { name: 'Datwa Labs', logo: '/images/logos/Datwa-Labs-Logo-White.svg' },
  { name: 'DSet Consulting', logo: '/images/logos/DSet Consulting logo.webp' },
  { name: 'Kanika Retails', logo: '/images/logos/Kanika Retails.png' },
  { name: 'NextGen Homes', logo: '/images/logos/NEXTGEN HOMES.avif' },
  { name: 'SRQ Real Estate', logo: '/images/logos/srq-realestate.png' },
  { name: 'SRQ Solutions', logo: '/images/logos/srq-Solutions.svg' },
  { name: 'UST', logo: '/images/logos/ust-white-logo.svg' },
];

// Animated Counter Component
const AnimatedCounter = ({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`counter-${end}`);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [isVisible, end]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <div id={`counter-${end}`} className="text-4xl font-bold text-[#004efb]">
      {count}{suffix}
    </div>
  );
};

export default function LogoCarousel() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="section-padding theme-bg-secondary overflow-hidden theme-transition">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold theme-accent-primary mb-8">
            Trusted by leading companies
          </h2>
          <p className="text-lg md:text-xl theme-text-primary max-w-4xl mx-auto leading-relaxed">
            Join hundreds of successful businesses that call our coworking spaces home
          </p>
        </motion.div>

        {/* Infinite Scrolling Carousel */}
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex overflow-hidden">
            <motion.div
              animate={{ x: ['0%', '-100%'] }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: 'linear',
                ...(isPaused && { duration: 0 })
              }}
              className="flex gap-12 min-w-full"
            >
              {[...companies, ...companies, ...companies].map((company, index) => (
                <motion.div
                  key={`${company.name}-${index}`}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex-shrink-0 flex flex-col items-center justify-center space-y-3 group cursor-pointer"
                >
                  <div className="w-24 h-24 theme-bg-primary rounded-lg flex items-center justify-center p-4 group-hover:theme-bg-accent-primary transition-all duration-300 shadow-lg">
                    <Image
                      src={company.logo}
                      alt={company.name}
                      width={80}
                      height={80}
                      className="object-contain max-w-full max-h-full"
                    />
                  </div>
                  <span className="text-sm font-semibold theme-text-primary group-hover:theme-accent-primary transition-colors duration-300">
                    {company.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-theme-bg-secondary to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-theme-bg-secondary to-transparent pointer-events-none z-10" />
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          <div className="text-center space-y-2">
            <AnimatedCounter end={100} suffix="+" duration={2500} />
            <div className="theme-text-primary font-semibold text-base">Companies</div>
          </div>
          <div className="text-center space-y-2">
            <AnimatedCounter end={14000} suffix="+" duration={3000} />
            <div className="theme-text-primary font-semibold text-base">Sq Ft Area</div>
          </div>
          <div className="text-center space-y-2">
            <AnimatedCounter end={95} suffix="%" duration={2000} />
            <div className="theme-text-primary font-semibold text-base">Occupancy Rate</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}