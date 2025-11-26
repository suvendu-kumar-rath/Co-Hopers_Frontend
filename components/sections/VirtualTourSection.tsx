'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function VirtualTourSection() {
  return (
    <section className="section-padding theme-bg-secondary theme-transition">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative group cursor-pointer"
        >
          <div
            className="w-full h-96 bg-cover bg-center rounded-lg"
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600)'
            }}
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300 rounded-lg" />
          
          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue flex items-center justify-center">
                  <ArrowRight className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Take a virtual tour</h3>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}