'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const services = [
  { 
    id: 1, 
    name: '24/7 Access',
    description: 'Working hours are 9am - 7pm (Monday - Saturday) but you get 24/7 access'
  },
  { 
    id: 2, 
    name: 'High-Speed WiFi',
    description: 'Get high-speed internet of 200-300mbps for seamless productivity'
  },
  { 
    id: 3, 
    name: 'Meeting Rooms',
    description: 'Get complimentary access of 2 hours per seat per month. For more usage, it is chargeable'
  },
  { 
    id: 4, 
    name: 'Premium Coffee',
    description: 'Get your coffee, tea, or snacks at actual cost or order basis'
  },
  { 
    id: 5, 
    name: 'Print & Scan',
    description: 'On-demand basis printing with cost as per requirement'
  }
];

// Split services into 5 rows (one service per row)
const servicesPerRow = 1;
const serviceRows: typeof services[] = [];
for (let i = 0; i < services.length; i += servicesPerRow) {
  serviceRows.push(services.slice(i, i + servicesPerRow));
}

export default function ServicesFlowSection() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  return (
    <section className="section-padding theme-bg-primary theme-transition">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-blue-500 mb-8">
            Our Services
          </h2>
          <p className="text-lg md:text-xl theme-text-primary max-w-4xl mx-auto leading-relaxed">
            Everything you need to work productively and comfortably in our spaces
          </p>
        </motion.div>

        {/* 4 Rows of Services */}
        <div className="space-y-0 -mx-8">
          {/* Top line */}
          <div className="h-0.5 bg-blue-500 w-full"></div>
          
          {serviceRows.map((row, rowIndex) => (
            <div key={rowIndex}>
              <div 
                className={`py-6 text-center overflow-hidden transition-all duration-500 px-8 ${
                  hoveredService === row[0].id ? 'bg-blue-500' : 'theme-bg-primary'
                }`}
                onMouseEnter={() => setHoveredService(row[0].id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <motion.div
                  className="flex gap-6 min-w-max justify-center"
                  animate={{ 
                    x: hoveredService === row[0].id ? ['0%', '-100%'] : '0%'
                  }}
                  transition={{
                    duration: hoveredService === row[0].id ? 15 : 0,
                    ease: 'linear',
                    repeat: hoveredService === row[0].id ? Infinity : 0,
                    repeatType: 'loop'
                  }}
                >
                  {/* First set of text */}
                  <motion.h3 
                    className={`text-2xl font-semibold whitespace-nowrap transition-all duration-500 ${
                      hoveredService === row[0].id ? 'text-white' : 'text-blue-500'
                    }`}
                    animate={{
                      scale: hoveredService === row[0].id ? 1.05 : 1,
                      opacity: hoveredService === row[0].id ? 1 : 1
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {row[0].name}
                  </motion.h3>
                  
                  {/* Detailed descriptions with animated dots */}
                  <motion.div
                    className="flex gap-6 items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: hoveredService === row[0].id ? 1 : 0,
                      y: hoveredService === row[0].id ? 0 : 20
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    {hoveredService === row[0].id && (
                      <>
                        <span className="text-lg text-white whitespace-nowrap">
                          {row[0].description}
                        </span>
                        
                        {/* Animated dot */}
                        <motion.div
                          className="w-2 h-2 bg-white rounded-full"
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.5, 1, 0.5]
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                        
                        <span className="text-lg text-white whitespace-nowrap">
                          {row[0].description}
                        </span>
                        
                        {/* Animated dot */}
                        <motion.div
                          className="w-2 h-2 bg-white rounded-full"
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.5, 1, 0.5]
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.3
                          }}
                        />
                        
                        <span className="text-lg text-white whitespace-nowrap">
                          {row[0].description}
                        </span>
                        
                        {/* Animated dot */}
                        <motion.div
                          className="w-2 h-2 bg-white rounded-full"
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.5, 1, 0.5]
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.6
                          }}
                        />
                        
                        <span className="text-lg text-white whitespace-nowrap">
                          {row[0].description}
                        </span>
                      </>
                    )}
                  </motion.div>
                </motion.div>
              </div>
              {/* Line between services */}
              <div className="h-0.5 bg-blue-500 w-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

