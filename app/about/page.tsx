'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Wifi, Clock, Home, Users, Calendar, Car, Zap, Coffee } from 'lucide-react';
import Navbar from '@/components/navigation/Navbar';
import FooterSection from '@/components/sections/FooterSection';
import Image from 'next/image';

const features = [
  {
    icon: <Wifi className="w-8 h-8" />,
    title: 'High-Speed Internet',
    description: 'Lightning-fast internet connectivity for seamless productivity',
    image: '/images/features/v1.png'
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: '24/7 Access',
    description: 'Round-the-clock access to your workspace with secure entry',
    image: '/images/features/v2.png'
  },
  {
    icon: <Home className="w-8 h-8" />,
    title: 'House Keeping',
    description: 'Professional housekeeping services to maintain a clean environment',
    image: '/images/features/v3.png'
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Meeting Room',
    description: 'Professional meeting spaces equipped with modern technology',
    image: '/images/features/v4.png'
  },
  {
    icon: <Calendar className="w-8 h-8" />,
    title: 'Event Space',
    description: 'Versatile event spaces for conferences, workshops, and networking',
    image: '/images/features/v5.png'
  },
  {
    icon: <Car className="w-8 h-8" />,
    title: 'Parking Space Available',
    description: 'Convenient parking facilities for members and visitors',
    image: '/images/features/v6.png'
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Power Backup',
    description: 'Uninterrupted power supply with backup systems',
    image: '/images/features/v7.png'
  },
  {
    icon: <Coffee className="w-8 h-8" />,
    title: 'Coffee & Beverage Availability',
    description: 'Premium coffee and beverages available throughout the day',
    image: '/images/features/v8.png'
  }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen theme-bg-primary theme-text-primary theme-transition">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center theme-bg-secondary theme-transition">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/backgrounds/back ground image.jpg"
            alt="About Us Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Black blur effects on top and bottom */}
        <div className="absolute inset-0 w-full h-full">
          {/* Top blur gradient */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/80 to-transparent"></div>
          {/* Bottom blur gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 to-transparent"></div>
        </div>
        
        {/* Black transparent overlay */}
        <div className="absolute inset-0 w-full h-full bg-black/40"></div>
        
        <div className="relative z-10 w-full">
          <div className="container-custom">
            <div className="text-center space-y-8 py-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold theme-text-primary leading-tight">
                  About <span className="theme-accent-primary">Cohopers</span>
                </h1>
                
                <p className="text-lg md:text-xl lg:text-2xl theme-text-primary max-w-4xl mx-auto leading-relaxed">
                  Embracing 8 years of excellence in coworking, we've grown from 1000 sq. ft to 14000 sq. ft at DLF Cybercity, Bhubaneswar.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="section-padding theme-bg-primary theme-transition">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold theme-accent-primary mb-8">
              Our Story
            </h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg md:text-xl theme-text-primary leading-relaxed">
              <p>
                <strong>It's been 8 years</strong> since we started our journey in transforming how people work. 
                Embrace the opportunity to connect with like-minded professionals, exchange ideas, and forge valuable partnerships.
              </p>
              <p>
                With our commitment to exceptional service and competitive pricing, we aim to exceed your expectations. 
                Join us at Cohopers and elevate your work experience.
              </p>
              <p>
                Unlock a world of possibilities in a coworking space that embraces simplicity, values affordability, 
                and embodies elegance. Your journey to success begins here.
              </p>
            </div>
          </motion.div>

          {/* Growth Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            <div className="text-center space-y-4">
              <div className="text-4xl font-bold theme-accent-primary">8+</div>
              <div className="theme-text-primary font-semibold text-lg">Years of Excellence</div>
            </div>
            <div className="text-center space-y-4">
              <div className="text-4xl font-bold theme-accent-primary">14,000</div>
              <div className="theme-text-primary font-semibold text-lg">Sq Ft Current Space</div>
            </div>
            <div className="text-center space-y-4">
              <div className="text-4xl font-bold theme-accent-primary">14x</div>
              <div className="theme-text-primary font-semibold text-lg">Growth from 1000 sq ft</div>
            </div>
          </motion.div>
        </div>
      </section>

       {/* Space Photos Section */}
       <section className="section-padding theme-bg-secondary theme-transition">
         <div className="container-custom">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             className="text-center mb-16"
           >
             <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold theme-accent-primary mb-8">
               Our Spaces
             </h2>
             <p className="text-lg md:text-xl theme-text-primary max-w-4xl mx-auto leading-relaxed">
               Experience our modern coworking environments designed for productivity and collaboration
             </p>
           </motion.div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {/* Gallery Images */}
             <motion.div
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.1 }}
               className="group cursor-pointer"
             >
               <div className="relative overflow-hidden bg-black shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover:scale-105">
                 <Image
                   src="/images/gallery/Cohopers_1.jpeg"
                   alt="Cohopers Workspace"
                   width={400}
                   height={300}
                   className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                 <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                   <h3 className="text-lg font-semibold">Modern Workspace</h3>
                 </div>
               </div>
             </motion.div>

             <motion.div
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.2 }}
               className="group cursor-pointer"
             >
               <div className="relative overflow-hidden bg-black shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover:scale-105">
                 <Image
                   src="/images/gallery/co.jpeg"
                   alt="Cohopers Interior"
                   width={400}
                   height={300}
                   className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                 <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                   <h3 className="text-lg font-semibold">Collaborative Environment</h3>
                 </div>
               </div>
             </motion.div>

             <motion.div
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.3 }}
               className="group cursor-pointer"
             >
               <div className="relative overflow-hidden bg-black shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover:scale-105">
                 <Image
                   src="/images/gallery/cohopers2.jpeg"
                   alt="Cohopers Lounge"
                   width={400}
                   height={300}
                   className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                 <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                   <h3 className="text-lg font-semibold">Lounge Area</h3>
                 </div>
               </div>
             </motion.div>

             <motion.div
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.4 }}
               className="group cursor-pointer"
             >
               <div className="relative overflow-hidden bg-black shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover:scale-105">
                 <Image
                   src="/images/gallery/cohopers3.jpg"
                   alt="Cohopers Meeting Room"
                   width={400}
                   height={300}
                   className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                 <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                   <h3 className="text-lg font-semibold">Meeting Spaces</h3>
                 </div>
               </div>
             </motion.div>

             <motion.div
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.5 }}
               className="group cursor-pointer"
             >
               <div className="relative overflow-hidden bg-black shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover:scale-105">
                 <Image
                   src="/images/workspaces/meeting-room.png"
                   alt="Professional Meeting Room"
                   width={400}
                   height={300}
                   className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                 <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                   <h3 className="text-lg font-semibold">Professional Setup</h3>
                 </div>
               </div>
             </motion.div>

             <motion.div
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.6 }}
               className="group cursor-pointer"
             >
               <div className="relative overflow-hidden bg-black shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover:scale-105">
                 <Image
                   src="/images/workspaces/open-desk.png"
                   alt="Open Desk Area"
                   width={400}
                   height={300}
                   className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                 <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                   <h3 className="text-lg font-semibold">Flexible Seating</h3>
                 </div>
               </div>
             </motion.div>
           </div>
         </div>
       </section>

       {/* Features Section */}
       <section className="section-padding theme-bg-primary theme-transition">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold theme-accent-primary mb-8">
              Our Features
            </h2>
            <p className="text-lg md:text-xl theme-text-primary max-w-4xl mx-auto leading-relaxed">
              Everything you need for a productive and comfortable work environment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 h-full border border-white/10 hover:border-theme-accent-primary/50 transition-all duration-300 group-hover:bg-white/10">
                  <div className="text-center space-y-4">
                    <div className="relative w-24 h-24 mx-auto mb-4">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
                        className="object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="theme-accent-primary mb-2">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold theme-text-primary group-hover:theme-accent-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-sm theme-text-primary/80 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Parent Company Section */}
      <section className="section-padding theme-bg-primary theme-transition">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold theme-accent-primary mb-8">
              Our Parent Company
            </h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg md:text-xl theme-text-primary leading-relaxed">
              <p>
                <strong>9C Technology Labs Pvt. Ltd.</strong> is the parent company of CoHopers, 
                founded by <strong>Sivasish Bebartta</strong>.
              </p>
              <p>
                Visit us at <a href="https://9ctechlabs.com" className="theme-accent-primary hover:underline" target="_blank" rel="noopener noreferrer">9ctechlabs.com</a> 
                to learn more about our technology solutions and services.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
