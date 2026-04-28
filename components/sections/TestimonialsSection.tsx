'use client';

import { motion } from 'framer-motion';
import { testimonials } from '@/lib/constants';

export default function TestimonialsSection() {
  return (
    <section className="section-padding theme-bg-tertiary theme-text-primary theme-transition">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold theme-text-primary mb-8">
            What our community says
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="text-center space-y-8 p-8 rounded-lg hover:bg-white/5 transition-all duration-300 cursor-pointer group"
            >
              <motion.p 
                className="theme-text-primary leading-relaxed text-lg relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-4xl theme-accent-primary opacity-50 group-hover:opacity-100 transition-opacity duration-300">"</span>
                {testimonial.content}
                <span className="text-4xl theme-accent-primary opacity-50 group-hover:opacity-100 transition-opacity duration-300">"</span>
              </motion.p>

              <div className="flex flex-col items-center space-y-4">
                <div>
                  <h4 className="font-semibold text-white text-lg group-hover:text-[#004efb] transition-colors duration-300">
                    {testimonial.name}
                  </h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}