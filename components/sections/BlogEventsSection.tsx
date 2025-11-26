'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'BOOST YOUR PRODUCTIVITY IN A OUR ENVIRONMENT',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
    date: '12 APR'
  },
  {
    id: 2,
    title: 'COLLABORATE AND CREATE INSPIRING WORKSPACES',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
    date: '15 APR'
  },
  {
    id: 3,
    title: 'NETWORKING EVENTS FOR PROFESSIONAL GROWTH',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
    date: '18 APR'
  }
];

export default function BlogEventsSection() {
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
            Check our upcoming events
          </h2>
          <p className="text-lg md:text-xl theme-text-primary max-w-4xl mx-auto leading-relaxed">
            Stay updated with our latest news, events, and community happenings.
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -10, 
                scale: 1.03,
                rotateY: 5,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group cursor-pointer relative"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="relative overflow-hidden rounded-lg mb-6 shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
                <motion.div
                  className="w-full h-64 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${post.image})`
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.4, ease: "easeOut" }
                  }}
                />
                
                {/* Enhanced overlay */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"
                  whileHover={{ 
                    background: 'linear-gradient(to top, rgba(0,0,0,0.4), transparent, transparent)',
                    transition: { duration: 0.3 }
                  }}
                />
                
                {/* Date Badge with enhanced animation */}
                <motion.div 
                  className="absolute top-4 left-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="badge-blue group-hover:bg-[#004efb] group-hover:scale-105 transition-all duration-300">
                    {post.date}
                  </div>
                </motion.div>
              </div>
              
              <div className="space-y-4 p-2">
                <motion.h3 
                  className="text-lg font-semibold theme-text-primary group-hover:theme-accent-primary transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  {post.title}
                </motion.h3>
                
                <motion.button 
                  className="btn-outline group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Read more
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
