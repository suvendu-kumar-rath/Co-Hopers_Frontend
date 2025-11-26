'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function FlexibleWorkspacesSection() {
  return (
    <section className="section-padding theme-bg-primary theme-text-primary theme-transition">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold theme-accent-primary mb-8">
            Our flexible workspaces are designed to be comfortable, so you can focus on what really matters —{' '}
            <span className="theme-text-primary">
              your work
            </span>
          </h2>
          
          <p className="text-lg md:text-xl theme-text-primary max-w-4xl mx-auto leading-relaxed">
            Experience the perfect blend of productivity and comfort in our modern coworking spaces.
          </p>
        </motion.div>

        {/* Background Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mt-16"
        >
          <div
            className="w-full h-96 bg-cover bg-center rounded-lg"
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600)'
            }}
          />
          
          {/* CTA Button Overlay */}
          <div className="absolute bottom-6 right-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Book test day
              <ArrowRight size={16} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
