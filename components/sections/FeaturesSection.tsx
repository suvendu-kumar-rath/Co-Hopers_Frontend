'use client';

import { motion } from 'framer-motion';

const whyCohopersFeatures = [
  {
    icon: '🏠',
    title: 'Interiors',
    description: 'that feel like home, crafted for comfort and creativity. Think modern, professional fits.'
  },
  {
    icon: '🔄',
    title: 'Modular Spaces',
    description: 'that flex with your needs whether you\'re a solo creator, a small team, or somewhere in between. Our tables all come on wheels to enable various event formats.'
  },
  {
    icon: '✨',
    title: 'Minimal',
    description: 'lifestyle-led aesthetic that inspires clarity and calm.'
  },
  {
    icon: '🌱',
    title: 'Productivity Forward Design',
    description: 'think natural light, plants, spaces that breathe and adapt to your needs & day.'
  },
  {
    icon: '🤝',
    title: 'Community',
    description: 'built on sharing, skill building, and genuine support not just networking.'
  },
  {
    icon: '☕',
    title: 'Curations',
    description: 'artisanal coffee, productivity focused food, healthy juices and smoothies, and pet-friendly access.'
  }
];

export default function FeaturesSection() {
  return (
    <section id="services" className="section-padding bg-blue-dark">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#004efb] mb-8">
            Why Cohopers
          </h2>
          <p className="text-lg md:text-xl text-white max-w-4xl mx-auto leading-relaxed">
            We're not just another coworking space. At Cohopers, we're reimagining what it means to work in physical spaces by making it personal, flexible, and deeply human. Think of us as your second home — one with really good coffee and even better people.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {whyCohopersFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center space-y-4"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 + 0.1 }}
                className="text-6xl mb-6"
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-white leading-relaxed text-base">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}