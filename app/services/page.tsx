'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Wifi, Users, Coffee, Printer, Phone, Car, Shield } from 'lucide-react';
import Navbar from '@/components/navigation/Navbar';

const services = [
  {
    icon: <Wifi className="w-8 h-8" />,
    title: 'High-Speed Internet',
    description: 'Lightning-fast 300 MBPS internet with dedicated bandwidth for seamless productivity',
    features: ['300 MBPS Speed', 'Dedicated Bandwidth', '24/7 Connectivity', 'WiFi 6 Technology']
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Meeting Rooms',
    description: 'Professional meeting spaces equipped with modern AV technology and presentation tools',
    features: ['AV Equipment', 'Presentation Tools', 'Video Conferencing', 'Flexible Seating']
  },
  {
    icon: <Coffee className="w-8 h-8" />,
    title: 'Premium Coffee',
    description: 'Complimentary barista-quality coffee and refreshments available throughout the day',
    features: ['Barista Coffee', 'Tea Selection', 'Snacks', 'Refreshing Drinks']
  },
  {
    icon: <Printer className="w-8 h-8" />,
    title: 'Print & Scan',
    description: 'High-quality printing, scanning, and copying services with generous monthly credits',
    features: ['Color Printing', 'Scanning', 'Copying', 'Monthly Credits']
  },
  {
    icon: <Phone className="w-8 h-8" />,
    title: 'Phone Booths',
    description: 'Private phone booths for confidential calls and video meetings',
    features: ['Soundproof', 'Video Ready', 'Power Outlets', 'Comfortable Seating']
  },
  {
    icon: <Car className="w-8 h-8" />,
    title: 'Parking',
    description: 'Convenient parking facilities for members and visitors',
    features: ['Dedicated Spaces', 'Visitor Parking', 'Secure Access', '24/7 Available']
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Security',
    description: '24/7 security with keycard access and CCTV monitoring for your peace of mind',
    features: ['Keycard Access', 'CCTV Monitoring', '24/7 Security', 'Secure Storage']
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Networking Events',
    description: 'Regular community events and networking opportunities to connect with professionals',
    features: ['Monthly Events', 'Networking Sessions', 'Workshops', 'Community Building']
  }
];

const workspaceTypes = [
  {
    title: 'Hot Desks',
    description: 'Flexible seating for freelancers and remote workers',
    image: '/images/workspaces/open-desk.png',
    features: ['Flexible seating', 'High-speed WiFi', 'Coffee included', 'Common areas access']
  },
  {
    title: 'Dedicated Desks',
    description: 'Your own reserved desk in a shared workspace',
    image: '/images/workspaces/meeting-room.png',
    features: ['Reserved space', 'Personal storage', 'All amenities', '24/7 access']
  },
  {
    title: 'Private Offices',
    description: 'Private spaces for small to medium teams',
    image: '/images/workspaces/private office.png',
    features: ['Private space', 'Lockable door', 'Team capacity', 'Executive amenities']
  },
  {
    title: 'Meeting Rooms',
    description: 'Professional spaces for presentations and meetings',
    image: '/images/workspaces/meeting-rooms.png',
    features: ['AV equipment', 'Flexible capacity', 'Hourly booking', 'Professional setup']
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen theme-bg-primary theme-text-primary theme-transition">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-[#004efb] to-[#0038cc] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url(/images/backgrounds/service bg.png)'
          }}
        />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              OUR SERVICES
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Everything you need to work productively and grow your business
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Comprehensive Amenities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide all the tools and services you need to focus on what matters most
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="text-[#004efb] mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-black mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-[#004efb] rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workspace Types */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Workspace Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our range of flexible workspace options
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {workspaceTypes.map((workspace, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div
                  className="h-64 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${workspace.image})`
                  }}
                />
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-black mb-4">
                    {workspace.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {workspace.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {workspace.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-gray-700">
                        <div className="w-1.5 h-1.5 bg-[#004efb] rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#004efb] text-white px-6 py-3 font-semibold hover:bg-[#0038cc] transition-colors flex items-center gap-2"
                  >
                    Learn More
                    <ArrowRight size={16} />
                  </motion.button>
                </div>
              </motion.div>
            ))}
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
              Ready to Experience Our Services?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Book a tour today and see how our comprehensive services can boost your productivity
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#00ffe0] text-black px-12 py-4 text-xl font-bold hover:bg-[#00d4c4] transition-colors flex items-center gap-3 mx-auto"
            >
              Book a Tour
              <ArrowRight size={24} />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}











