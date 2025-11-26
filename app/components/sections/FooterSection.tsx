'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Facebook, Twitter, Instagram, Linkedin, Phone } from 'lucide-react';
import { ThemeSwitch } from '@/components/ui/theme-switch';
import { useTheme } from '@/components/providers/ThemeProvider';
import { contactInfo } from '@/lib/constants';
import Image from 'next/image';

export default function FooterSection() {
  const { isSystemTheme } = useTheme();
  
  return (
    <footer id="contact" className="theme-bg-tertiary theme-text-primary theme-transition">
      <div className="container-custom py-12">
        {/* Main Footer Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold theme-text-primary mb-6 leading-tight">
            a way to live. a way to be.
          </h2>
          
          <div className="flex items-center justify-center mb-6 w-full">
            <Image
              src="/images/images/Cohopers_logo.png"
              alt="Cohopers Logo"
              width={400}
              height={80}
              className="h-16 w-full max-w-xl object-contain"
            />
          </div>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Social Media Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <h3 className="text-lg font-semibold theme-text-primary mb-4">Follow Us</h3>
            <div className="flex flex-col gap-3">
              {[
                { Icon: Linkedin, name: 'LinkedIn' },
                { Icon: Instagram, name: 'Instagram' },
                { Icon: Twitter, name: 'X' }
              ].map(({ Icon, name }, index) => (
                <motion.a
                  key={name}
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  className="theme-text-primary hover:text-blue-light transition-colors duration-200 flex items-center gap-2"
                >
                  <Icon size={18} />
                  <span className="text-sm">{name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Pages Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center md:text-left"
          >
            <h3 className="text-lg font-semibold theme-text-primary mb-4">Pages</h3>
            <div className="flex flex-col gap-2">
              {['About', 'Services', 'Gallery', 'Pricing', 'Contact'].map((page) => (
                <a
                  key={page}
                  href={`/${page.toLowerCase()}`}
                  className="text-sm theme-text-primary hover:text-blue-light transition-colors duration-200"
                >
                  {page}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center md:text-left"
          >
            <h3 className="text-lg font-semibold theme-text-primary mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <Phone size={16} />
                <span className="text-sm theme-text-primary">{contactInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <span className="text-sm theme-text-primary">{contactInfo.email}</span>
              </div>
              <div className="text-sm theme-text-primary text-center md:text-left">
                {contactInfo.address.line1}<br />
                {contactInfo.address.line2}
              </div>
            </div>
          </motion.div>

          {/* App Download Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center"
          >
            <h3 className="text-lg font-semibold theme-text-primary mb-4">Download App</h3>
            <div className="flex flex-col items-center gap-4">
              <p className="text-sm theme-text-primary">
                Get the Cohopers app
              </p>
              <motion.a
                href="https://play.google.com/store/apps/details?id=com.cohopers&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <Image
                    src="/images/WhatsApp Image 2025-10-13 at 8.58.42 PM.jpeg"
                    alt="Download Cohopers App from Play Store"
                    width={120}
                    height={48}
                    className="h-8 w-auto object-contain"
                  />
                  <span className="text-sm font-medium">Download Now</span>
                </div>
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t theme-border-primary pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-blue" />
              <span className="theme-text-primary text-sm">© 2024 {contactInfo.company}. All Rights Reserved</span>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <span className="theme-text-secondary text-sm">Theme:</span>
                <ThemeSwitch />
                <span className="theme-text-muted text-xs">
                  {isSystemTheme ? '(Auto)' : '(Manual)'}
                </span>
              </div>
              
              {['Blog', 'Careers', 'Contact Us', 'Privacy Policy', 'Terms & Conditions'].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="theme-text-secondary hover:theme-text-primary transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}