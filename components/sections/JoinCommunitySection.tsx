'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function JoinCommunitySection() {
  return (
    <section className="section-padding theme-bg-secondary theme-transition">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold theme-accent-primary mb-8">
            A culture that's different by design
          </h2>
          <p className="text-lg md:text-xl theme-text-primary max-w-4xl mx-auto leading-relaxed mb-12">
            At Cohopers Bhubaneswar, we do things differently. Inspired by modern organizations, our culture is built on trust, transparency, and radical collaboration. Here, you'll find:
          </p>
        </motion.div>

        {/* Bullet Points */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto space-y-8 mb-16"
        >
          <div className="flex items-start gap-6">
            <div className="w-2 h-2 bg-blue rounded-full mt-3 flex-shrink-0"></div>
            <p className="text-base theme-text-primary leading-relaxed">
              <strong>No bosses, just leaders.</strong> We believe in self-management, where everyone has a voice and the freedom to act.
            </p>
          </div>
          
          <div className="flex items-start gap-6">
            <div className="w-2 h-2 bg-[#004efb] rounded-full mt-3 flex-shrink-0"></div>
            <p className="text-base theme-text-primary leading-relaxed">
              <strong>Emotional safety first.</strong> Vulnerability is celebrated, and feedback is honest, but always kind.
            </p>
          </div>
          
          <div className="flex items-start gap-6">
            <div className="w-2 h-2 bg-[#004efb] rounded-full mt-3 flex-shrink-0"></div>
            <p className="text-base theme-text-primary leading-relaxed">
              <strong>Purpose over profit.</strong> We exist to create spaces where people thrive, personally and professionally.
            </p>
          </div>
          
          <div className="flex items-start gap-6">
            <div className="w-2 h-2 bg-[#004efb] rounded-full mt-3 flex-shrink-0"></div>
            <p className="text-base theme-text-primary leading-relaxed">
              <strong>Community is everything.</strong> We're intentional about who joins, curating a collective of the curious, the kind, and the creative.
            </p>
          </div>
          
          <div className="flex items-start gap-6">
            <div className="w-2 h-2 bg-[#004efb] rounded-full mt-3 flex-shrink-0"></div>
            <p className="text-base theme-text-primary leading-relaxed">
              <strong>Continuous evolution.</strong> We learn, adapt, and grow together, because the best cultures are living, breathing things.
            </p>
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-16"
        >
          <blockquote className="text-lg md:text-xl theme-text-primary italic leading-relaxed max-w-4xl mx-auto">
            "At Cohopers Bhubaneswar, culture isn't a poster on the wall, it's the way we show up, support each other, and build something bigger than ourselves."
          </blockquote>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <button className="btn-primary">
            About Us
            <ArrowRight size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
