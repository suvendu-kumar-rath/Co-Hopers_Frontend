'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback, useMemo } from 'react';
import { ArrowRight, X, Search, Filter, Grid, List } from 'lucide-react';
import Navbar from '@/components/navigation/Navbar';
import Image from 'next/image';

const baseImages = [
  {
    id: 1,
    src: '/images/gallery/Cohopers_1.jpeg',
    alt: 'Modern coworking space with open desks',
    category: 'workspace',
    title: 'Open Workspace Area',
    description: 'Spacious open workspace designed for collaboration and productivity',
    tags: ['collaboration', 'open space', 'modern']
  },
  {
    id: 2,
    src: '/images/gallery/cohopers2.jpeg',
    alt: 'Executive meeting room with modern furniture',
    category: 'meeting',
    title: 'Executive Meeting Room',
    description: 'Professional meeting space with state-of-the-art presentation equipment',
    tags: ['executive', 'meeting', 'professional']
  },
  {
    id: 3,
    src: '/images/gallery/cohopers3.jpg',
    alt: 'Private office cabin with glass walls',
    category: 'office',
    title: 'Private Office Cabin',
    description: 'Dedicated private spaces for focused work and team collaboration',
    tags: ['private', 'focused work', 'glass walls']
  },
  {
    id: 4,
    src: '/images/gallery/co.jpeg',
    alt: 'Coffee bar and lounge area',
    category: 'lounge',
    title: 'Coffee Bar & Lounge',
    description: 'Relaxing space for breaks and informal meetings',
    tags: ['coffee', 'lounge', 'relaxing']
  },
  {
    id: 5,
    src: '/images/workspaces/meeting-room.png',
    alt: 'Conference room with large table',
    category: 'meeting',
    title: 'Conference Room',
    description: 'Large conference room perfect for team meetings and presentations',
    tags: ['conference', 'team meetings', 'presentations']
  },
  {
    id: 6,
    src: '/images/workspaces/private office.png',
    alt: 'Executive cabin with premium furniture',
    category: 'office',
    title: 'Executive Cabin',
    description: 'Premium private workspace with executive amenities',
    tags: ['executive', 'premium', 'private']
  },
  {
    id: 7,
    src: '/images/workspaces/open-desk.png',
    alt: 'Hot desk area with modern seating',
    category: 'workspace',
    title: 'Hot Desk Area',
    description: 'Flexible seating for freelancers and remote workers',
    tags: ['flexible', 'hot desk', 'freelancers']
  },
  {
    id: 8,
    src: '/images/workspaces/meeting-rooms.png',
    alt: 'Multiple meeting rooms',
    category: 'meeting',
    title: 'Meeting Rooms',
    description: 'Various meeting spaces for different team sizes',
    tags: ['meeting rooms', 'team sizes', 'flexible']
  },
  {
    id: 9,
    src: '/images/workspaces/lounge-area.png',
    alt: 'Comfortable lounge seating area',
    category: 'lounge',
    title: 'Lounge Area',
    description: 'Comfortable seating for relaxation and informal discussions',
    tags: ['lounge', 'comfortable', 'relaxation']
  },
  {
    id: 10,
    src: '/images/workspaces/coffee-bar.png',
    alt: 'Coffee bar with modern design',
    category: 'lounge',
    title: 'Coffee Bar',
    description: 'Premium coffee bar with professional equipment',
    tags: ['coffee bar', 'premium', 'professional']
  },
];

// Create more images for infinite scroll by duplicating and varying
const galleryImages = [
  ...baseImages,
  ...baseImages.map((img, index) => ({ ...img, id: img.id + 10 })),
  ...baseImages.map((img, index) => ({ ...img, id: img.id + 20 })),
  ...baseImages.map((img, index) => ({ ...img, id: img.id + 30 })),
  ...baseImages.map((img, index) => ({ ...img, id: img.id + 40 })),
];

const categories = [
  { name: 'All', count: 50, icon: '🏢' },
  { name: 'workspace', count: 15, icon: '💼' },
  { name: 'meeting', count: 15, icon: '🤝' },
  { name: 'office', count: 10, icon: '🏢' },
  { name: 'lounge', count: 10, icon: '☕' }
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'masonry'>('masonry');
  const [isScrolling, setIsScrolling] = useState(true);

  const filteredImages = useMemo(() => {
    return galleryImages.filter(img => {
      const matchesCategory = selectedCategory === 'All' || img.category === selectedCategory;
      const matchesSearch = searchTerm === '' || 
        img.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        img.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        img.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  // Auto scroll effect
  useEffect(() => {
    if (!isScrolling) return;

    const scrollSpeed = 1; // pixels per frame
    let animationId: number;

    const autoScroll = () => {
      window.scrollBy(0, scrollSpeed);
      animationId = requestAnimationFrame(autoScroll);
    };

    animationId = requestAnimationFrame(autoScroll);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isScrolling]);

  // Pause scrolling on hover
  const handleMouseEnter = () => setIsScrolling(false);
  const handleMouseLeave = () => setIsScrolling(true);

  return (
    <div className="min-h-screen theme-bg-secondary theme-text-primary theme-transition">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-[#004efb] via-[#0038cc] to-[#002699] overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Our Spaces
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Discover our modern coworking spaces designed for productivity and collaboration
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="relative w-full max-w-md">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search spaces..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-full border-0 bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter & Controls Section */}
      <section className="py-8 bg-white border-b sticky top-0 z-40 backdrop-blur-sm">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.name
                      ? 'bg-[#004efb] text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span className="text-lg">{category.icon}</span>
                  <span className="capitalize">{category.name}</span>
                  <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </motion.button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2 bg-gray-100 rounded-full p-1">
              <button
                onClick={() => setViewMode('masonry')}
                className={`p-2 rounded-full transition-all duration-300 ${
                  viewMode === 'masonry' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'
                }`}
              >
                <Grid size={18} />
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-full transition-all duration-300 ${
                  viewMode === 'grid' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'
                }`}
              >
                <List size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section 
        className="py-12 bg-gray-50"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="container-custom">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${viewMode}-${selectedCategory}-${searchTerm}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className={
                viewMode === 'masonry'
                  ? "masonry-columns"
                  : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              }
            >
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group cursor-pointer bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden masonry-item"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={400}
                      height={600}
                      className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full">
                        <span className="text-black font-semibold text-sm">View Details</span>
                      </div>
                    </div>
                  </div>
                  
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredImages.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-gray-400 mb-4">
                <Search size={48} className="mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No spaces found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}

          {/* Auto Scroll Controls */}
          <div className="fixed bottom-8 right-8 z-50">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsScrolling(!isScrolling)}
              className={`p-4 rounded-full shadow-lg transition-all duration-300 ${
                isScrolling 
                  ? 'bg-red-500 hover:bg-red-600 text-white' 
                  : 'bg-green-500 hover:bg-green-600 text-white'
              }`}
            >
              {isScrolling ? '⏸️' : '▶️'}
            </motion.button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#004efb]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Experience Our Spaces?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Book a personalized tour and see how our spaces can enhance your productivity
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#00ffe0] text-black px-12 py-4 text-xl font-bold hover:bg-[#00d4c4] transition-colors flex items-center gap-3 mx-auto rounded-full"
            >
              Book a Tour
              <ArrowRight size={24} />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-6xl max-h-[90vh] bg-white rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
              >
                <X size={24} />
              </button>
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-96 md:h-auto">
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {selectedImage.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {selectedImage.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedImage.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-[#004efb] text-white text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#004efb] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#0038cc] transition-colors"
                  >
                    Book This Space
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}








