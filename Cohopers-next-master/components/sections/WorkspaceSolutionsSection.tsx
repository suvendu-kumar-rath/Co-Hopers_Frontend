'use client';

import { motion } from 'framer-motion';

const solutions = [
  { icon: '🏢', title: 'COOL COWORKING' },
  { icon: '💼', title: 'MEETING ROOMS' },
  { icon: '🌐', title: 'HIGH-SPEED INTERNET' },
  { icon: '📊', title: 'FLEXIBLE ACCOUNTS' },
  { icon: '🎓', title: 'LEARNING OPPORTUNITIES' },
  { icon: '👔', title: 'PROFESSIONAL ENVIRONMENT' },
  { icon: '🎉', title: 'SPACE FOR EVENTS' },
  { icon: '🅿️', title: 'PARKING SPACE' },
];

export default function WorkspaceSolutionsSection() {
  return (
    <section className="section-padding theme-bg-primary theme-transition">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold theme-accent-primary mb-8">
            Flexible workspace solutions
          </h2>
          <p className="text-lg md:text-xl theme-text-primary max-w-4xl mx-auto leading-relaxed">
            Everything you need to succeed in your work, all in one place.
          </p>
        </motion.div>

        {/* Icon Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -10, 
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="text-center space-y-4 p-8 theme-bg-secondary rounded-lg hover:theme-bg-accent-primary hover:text-white transition-all duration-300 cursor-pointer group relative overflow-hidden"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Background gradient on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#004efb]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              <motion.div 
                className="text-5xl mb-4 relative z-10"
                whileHover={{ 
                  scale: 1.2,
                  rotate: 10,
                  transition: { duration: 0.2 }
                }}
              >
                {solution.icon}
              </motion.div>
              <h3 className="text-base font-semibold theme-text-primary group-hover:text-white transition-colors duration-300 relative z-10">
                {solution.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
