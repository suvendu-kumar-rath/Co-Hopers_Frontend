'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingCart, ArrowRight } from 'lucide-react';
import { navItems, contactInfo } from '@/lib/constants';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    // Set initial scroll state
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith('/')) {
      // External page navigation
      window.location.href = href;
    } else {
      // Internal section navigation
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* Top Bar */}
      <div className="theme-bg-tertiary theme-text-primary text-sm py-2 theme-transition">
        <div className="container-custom">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <span>{contactInfo.email}</span>
            </div>
            <div className="flex items-center gap-4">
              <span>{contactInfo.phone}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`sticky top-0 z-50 transition-all duration-300 theme-bg-primary theme-text-primary theme-transition ${
          mounted && scrolled ? 'shadow-lg' : ''
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex-shrink-0"
            >
            <div className="flex items-center w-full">
              <Image
                src="/images/images/Cohopers_logo.png"
                alt="Cohopers Logo"
                width={600}
                height={80}
                className="h-16 w-full object-contain"
              />
            </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="flex items-center space-x-8">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleNavClick(item.href)}
                    className="theme-text-primary hover:text-[#00ffe0] px-3 py-2 text-sm font-medium transition-colors duration-200 uppercase tracking-wide"
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-4">
              {/* Shopping Cart */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="theme-text-primary hover:text-[#00ffe0] transition-colors duration-200"
              >
                <ShoppingCart size={24} />
              </motion.button>

              {/* CTA Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary hidden sm:flex"
              >
                BOOK TEST DAY
                <ArrowRight size={16} />
              </motion.button>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden theme-text-primary hover:text-[#00ffe0] transition-colors duration-200"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden theme-bg-primary theme-border-primary border-t theme-transition"
            >
              <div className="px-4 pt-4 pb-6 space-y-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleNavClick(item.href)}
                    className="theme-text-primary hover:text-[#00ffe0] block px-3 py-3 text-base font-medium w-full text-left transition-colors duration-200 uppercase tracking-wide"
                  >
                    {item.name}
                  </motion.button>
                ))}
                <div className="pt-4">
                  <button className="btn-primary w-full justify-center">
                    BOOK TEST DAY
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}