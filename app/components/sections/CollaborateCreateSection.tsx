'use client';

import { motion } from 'framer-motion';

const workspaceTypes = [
  {
    title: 'MILLING',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
    description: 'Open workspace for collaboration'
  },
  {
    title: 'TRAINING',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
    description: 'Training and learning spaces'
  },
  {
    title: 'REST',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
    description: 'Relaxation and break areas'
  },
  {
    title: 'CONFERENCE RM 1',
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
    description: 'Professional meeting rooms'
  }
];

export default function CollaborateCreateSection() {
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
          <div className="inline-flex items-center gap-2 theme-bg-accent-primary text-white px-4 py-2 text-sm font-semibold mb-6">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            Our New Location Is Now Open
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold theme-text-primary">
            COLLABORATE AND CREATE: YOUR IDEAL WORKSPACE AWAITS
          </h2>
        </motion.div>

        {/* Workspace Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {workspaceTypes.map((workspace, index) => (
            <motion.div
              key={workspace.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="relative group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg">
                <div
                  className="w-full h-80 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${workspace.image})`
                  }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {workspace.title}
                      </h3>
                      <p className="text-gray-200 text-sm">
                        {workspace.description}
                      </p>
                    </div>
                    <div className="w-8 h-8 bg-[#00ffe0] rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-black rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Workshop Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <div className="relative">
            <div
              className="w-full h-64 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: 'url(https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400)'
              }}
            />
            <div className="absolute bottom-6 left-6">
              <div className="bg-black/80 text-white px-4 py-2 rounded">
                <span className="text-lg font-bold">WORKSHOP</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
