'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import Navbar from '@/components/navigation/Navbar';

// Carousel data for auto-scroll hero
const carouselSlides = [
  {
    id: 1,
    title: 'Single Seat',
    subtitle: '(Open desk)',
    price: '₹4.5k + GST',
    period: 'Per Month',
    description: 'Perfect for freelancers and individual professionals',
    features: ['24/7 access', 'Conference room facility', '300 MBPS internet'],
    image: '/images/workspaces/open-desk.png',
    popular: true
  },
  {
    id: 2,
    title: 'Executive Cabin',
    subtitle: '(3 Seater)',
    price: '₹16k + GST',
    period: 'Per Month',
    description: 'Ideal for small teams with dedicated workspace',
    features: ['3 Seater including 1 Boss seat', 'Private meeting capabilities', '24/7 access'],
    image: '/images/workspaces/meeting-room.png',
    popular: false
  },
  {
    id: 3,
    title: 'Window Side Executive Cabin',
    subtitle: '(4 seater)',
    price: '₹18k + GST',
    period: 'Per Month',
    description: 'Premium workspace with natural lighting',
    features: ['4 Seater including 1 Boss seat', 'Enhanced privacy', 'Natural lighting'],
    image: '/images/workspaces/private office.png',
    popular: false
  },
  {
    id: 4,
    title: 'Private Cabin',
    subtitle: '(6 Seater)',
    price: '₹20k + GST',
    period: 'Per Month',
    description: 'Spacious private cabin for medium teams',
    features: ['6 Seater capacity', 'Collaborative workspace', 'Private environment'],
    image: '/images/workspaces/meeting-rooms.png',
    popular: false
  },
  {
    id: 5,
    title: 'Private Cabin',
    subtitle: '(8 Seater)',
    price: '₹32k + GST',
    period: 'Per Month',
    description: 'Large private cabin for growing teams',
    features: ['8 Seater capacity', 'Team meeting space', 'Executive amenities'],
    image: '/images/workspaces/meeting-rooms.png',
    popular: false
  },
  {
    id: 6,
    title: 'Conference Room',
    subtitle: '10 Seater',
    price: '₹500/hour',
    period: 'Hourly / Daily',
    description: 'Professional meeting space for presentations',
    features: ['10 Seater capacity', 'Advanced presentation facilities', 'High-speed connectivity'],
    image: '/images/workspaces/meeting-rooms.png',
    popular: false
  }
];

// Auto-scroll carousel component
function AutoScrollCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-full">
      {/* Slides */}
      <div className="relative w-full h-full overflow-hidden">
        {carouselSlides.map((slide, index) => (
          <motion.div
            key={slide.id}
            className={`absolute inset-0 w-full h-full ${
              index === currentSlide ? 'z-10' : 'z-0'
            }`}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: index === currentSlide ? 1 : 0,
              scale: index === currentSlide ? 1 : 1.1
            }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            {/* Background Image */}
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.image})`
              }}
            />
            
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50" />
            
            {/* Content Overlay */}
            <div className="absolute inset-0 flex items-center">
              <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Left Section - Title and Price */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-white space-y-6"
                  >
                    {/* Popular Badge */}
                    {slide.popular && (
                      <div className="inline-flex items-center gap-2 bg-[#004efb] text-white px-4 py-2 text-sm font-semibold mb-6">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        Most Popular
                      </div>
                    )}
                    
                    {/* Title */}
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
                      {slide.title}
                    </h1>
                    
                    {/* Subtitle */}
                    <p className="text-xl md:text-2xl text-[#00ffe0] mb-6">
                      {slide.subtitle}
                    </p>
                    
                    {/* Price Section */}
                    <div className="space-y-2 mb-8">
                      <div className="text-5xl md:text-7xl font-bold text-[#00ffe0]">
                        {slide.price}
                      </div>
                      <div className="text-lg text-gray-300">
                        {slide.period}
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-lg text-gray-200 mb-8">
                      {slide.description}
                    </p>
                    
                    {/* Book Now Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-[#004efb] text-white px-8 py-4 text-lg font-bold hover:bg-[#0038cc] transition-colors flex items-center gap-3"
                    >
                      Book Now
                      <ArrowRight size={20} />
                    </motion.button>
                  </motion.div>

                  {/* Right Section - Features */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="space-y-6"
                  >
                    {/* Features Header */}
                    <div className="text-center lg:text-left">
                      <h3 className="text-2xl font-bold text-white mb-4">What's Included</h3>
                    </div>
                    
                    {/* Features List */}
                    <div className="space-y-4">
                      {slide.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-4 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-lg border border-white/20">
                          <div className="w-3 h-3 bg-[#004efb] rounded-full flex-shrink-0"></div>
                          <span className="text-white font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Additional Info */}
                    <div className="bg-[#004efb]/20 backdrop-blur-sm px-6 py-4 rounded-lg border border-[#004efb]/30">
                      <div className="flex items-center gap-3 text-[#00ffe0]">
                        <div className="w-2 h-2 bg-[#00ffe0] rounded-full"></div>
                        <span className="text-sm font-semibold">24/7 Access Available</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {carouselSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-[#004efb] scale-125' 
                  : 'bg-white/50 hover:bg-[#004efb]/70'
              }`}
            />
          ))}
        </div>
      </div>
      
      {/* Slide Counter */}
      <div className="absolute top-8 right-8 z-20">
        <div className="bg-[#004efb]/80 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium">
          {currentSlide + 1} / {carouselSlides.length}
        </div>
      </div>
    </div>
  );
}

const pricingCategories = {
  individual: {
    title: 'Individual Seats',
    description: 'Perfect for freelancers and individual professionals',
    plans: [
      {
        title: 'Single Seat',
        subtitle: '(Open desk)',
        capacity: '1 Seater',
        price: '₹4.5k + GST',
        period: 'Per Month',
        description: 'Perfect for freelancers and individual professionals with 24/7 access to all facilities.',
        teamSize: '1-1',
        image: '/images/workspaces/open-desk.png',
        popular: true,
        features: [
          '24/7 access',
          'Conference room facility',
          '300 MBPS internet',
          'Price includes electricity, AC, Office boy'
        ]
      }
    ]
  },
  executive: {
    title: 'Executive Cabins',
    description: 'Premium workspaces for small to medium teams',
    plans: [
      {
        title: 'Executive Cabin',
        subtitle: '(3 Seater)',
        capacity: '3 Seater including 1 Boss seat',
        price: '₹16k + GST',
        period: 'Per Month',
        description: 'Ideal for small teams with dedicated workspace and private meeting capabilities.',
        teamSize: '3-5',
        image: '/images/workspaces/meeting-room.png',
        popular: false,
        features: [
          '24/7 access',
          'Conference room facility',
          '300 MBPS internet',
          'Price includes electricity, AC, Office boy'
        ]
      },
      {
        title: 'Window Side Executive Cabin',
        subtitle: '(4 seater)',
        capacity: '4 Seater including 1 Boss seat',
        price: '₹18k + GST',
        period: 'Per Month',
        description: 'Premium workspace with natural lighting and enhanced privacy for growing teams.',
        teamSize: '4-6',
        image: '/images/workspaces/private office.png',
        popular: false,
        features: [
          '24/7 access',
          'Conference room facility',
          '300 MBPS internet',
          'Price includes electricity, AC, Office boy'
        ]
      }
    ]
  },
  private: {
    title: 'Private Cabins',
    description: 'Dedicated private spaces for teams of all sizes',
    plans: [
      {
        title: 'Private Cabin',
        subtitle: '(4 seater)',
        capacity: '4 Seater',
        price: '₹17k + GST',
        period: 'Per Month',
        description: 'Dedicated private space for focused work with all modern amenities included.',
        teamSize: '4-6',
        image: '/images/workspaces/private office.png',
        popular: false,
        features: [
          '24/7 access',
          'Conference room facility',
          '300 MBPS internet',
          'Price includes electricity, AC, Office boy'
        ]
      },
      {
        title: 'Private Cabin',
        subtitle: '(5 seater)',
        capacity: '4 Seater and 1 Boss Seat',
        price: '₹20k + GST',
        period: 'Per Month',
        description: 'Executive workspace with dedicated boss seat and team collaboration area.',
        teamSize: '5-7',
        image: '/images/workspaces/private office.png',
        popular: false,
        features: [
          '24/7 access',
          'Conference room facility',
          '300 MBPS internet',
          'Price includes electricity, AC, Office boy'
        ]
      },
      {
        title: 'Private Cabin',
        subtitle: '(6 Seater)',
        capacity: '6 Seater',
        price: '₹20k + GST',
        period: 'Per Month',
        description: 'Spacious private cabin perfect for medium-sized teams with collaborative workspace.',
        teamSize: '6-8',
        image: '/images/workspaces/meeting-rooms.png',
        popular: false,
        features: [
          '24/7 access',
          'Conference room facility',
          '300 MBPS internet',
          'Price includes electricity, AC, Office boy'
        ]
      },
      {
        title: 'Private Cabin',
        subtitle: '(7 Seater)',
        capacity: '6 Seater and 1 Boss Seat',
        price: '₹32k + GST',
        period: 'Per Month',
        description: 'Executive suite with dedicated leadership space and team collaboration zones.',
        teamSize: '7-10',
        image: '/images/workspaces/private office.png',
        popular: false,
        features: [
          '24/7 access',
          'Conference room facility',
          '300 MBPS internet',
          'Price includes electricity, AC, Office boy'
        ]
      },
      {
        title: 'Private Cabin',
        subtitle: '(8 Seater)',
        capacity: '8 Seater',
        price: '₹32k + GST',
        period: 'Per Month',
        description: 'Large private cabin with ample space for team meetings and collaborative work.',
        teamSize: '8-12',
        image: '/images/workspaces/meeting-rooms.png',
        popular: false,
        features: [
          '24/7 access',
          'Conference room facility',
          '300 MBPS internet',
          'Price includes electricity, AC, Office boy'
        ]
      },
      {
        title: 'Private Cabin',
        subtitle: '(10 seater)',
        capacity: '10 Seater',
        price: '₹36k + GST',
        period: 'Per Month',
        description: 'Premium large cabin with conference capabilities and executive amenities.',
        teamSize: '10-15',
        image: '/images/workspaces/meeting-rooms.png',
        popular: false,
        features: [
          '24/7 access',
          'Conference room facility',
          '300 MBPS internet',
          'Price includes electricity, AC, Office boy'
        ]
      }
    ]
  },
  meeting: {
    title: 'Meeting & Conference Rooms',
    description: 'Professional spaces for meetings and events',
    plans: [
      {
        title: 'Conference/Meeting Room',
        subtitle: '10 Seater',
        capacity: '10 Seater',
        price: '₹500 per hour / ₹3000 per day',
        period: 'Hourly / Daily',
        description: 'Professional meeting space with advanced presentation facilities and high-speed connectivity.',
        teamSize: '10-15',
        image: '/images/workspaces/meeting-rooms.png',
        popular: false,
        features: [
          '24/7 access',
          'Conference room facility',
          '300 MBPS internet',
          'Price includes electricity, AC, Office boy',
          '*Complimentary for members and discounted above the fixed complimentary hours'
        ]
      }
    ]
  }
};

export default function PricingPage() {
  return (
    <div className="min-h-screen theme-bg-primary theme-text-primary theme-transition">
      <Navbar />
      
      {/* Auto-Scroll Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <AutoScrollCarousel />
      </section>

      {/* Pricing Categories */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-[#004efb] text-white px-4 py-2 text-sm font-semibold mb-6">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              Pricing Plans
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-black">
              PRICING THAT SUITS YOUR NEEDS
            </h2>
          </motion.div>

          {/* Pricing Categories */}
          {Object.entries(pricingCategories).map(([categoryKey, category], categoryIndex) => (
            <motion.div
              key={categoryKey}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="mb-20"
            >
              {/* Category Header */}
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold text-black mb-4">
                  {category.title}
                </h3>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  {category.description}
                </p>
              </div>

              {/* Pricing Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {category.plans.map((plan, planIndex) => (
                  <motion.div
                    key={`${plan.title}-${planIndex}`}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: planIndex * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className={`group cursor-pointer overflow-hidden ${
                      plan.popular 
                        ? 'bg-black text-white' 
                        : 'bg-white border-2 border-gray-200'
                    }`}
                    style={{ 
                      width: '100%', 
                      minHeight: '500px',
                      borderRadius: '0' // Square edges
                    }}
                  >
                    {/* Image Section */}
                    <div className="relative h-64">
                      <div
                        className="w-full h-full bg-cover bg-center"
                        style={{
                          backgroundImage: `url(${plan.image})`
                        }}
                      />
                      <div className="absolute inset-0 bg-black/30" />
                      {plan.popular && (
                        <div className="absolute top-4 right-4 bg-[#00ffe0] text-black px-3 py-1 text-sm font-semibold">
                          Most Popular
                        </div>
                      )}
                    </div>

                    {/* Content Section */}
                    <div className="p-8 space-y-6">
                      {/* Title and Price */}
                      <div className="space-y-3">
                        <h4 className={`text-2xl font-bold ${
                          plan.popular ? 'text-[#00ffe0]' : 'text-[#004efb]'
                        }`}>
                          {plan.title}
                        </h4>
                        <p className={`text-sm ${
                          plan.popular ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                          {plan.subtitle}
                        </p>
                        <div className={`text-4xl font-bold ${
                          plan.popular ? 'text-white' : 'text-black'
                        }`}>
                          {plan.price}
                        </div>
                        <p className={`text-sm ${
                          plan.popular ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                          {plan.period}
                        </p>
                      </div>

                      {/* Team Size */}
                      <div className="flex items-center gap-3">
                        <div className={`w-4 h-4 ${
                          plan.popular ? 'bg-[#00ffe0]' : 'bg-[#004efb]'
                        }`}></div>
                        <span className={`text-sm font-semibold ${
                          plan.popular ? 'text-[#00ffe0]' : 'text-[#004efb]'
                        }`}>
                          IDEAL FOR TEAM SIZE {plan.teamSize}
                        </span>
                      </div>

                      {/* Description */}
                      <p className={`text-sm leading-relaxed ${
                        plan.popular ? 'text-gray-200' : 'text-gray-700'
                      }`}>
                        {plan.description}
                      </p>

                      {/* Features */}
                      <ul className="space-y-2">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className={`flex items-center gap-2 text-sm ${
                            plan.popular ? 'text-gray-200' : 'text-gray-700'
                          }`}>
                            <div className={`w-1.5 h-1.5 ${
                              plan.popular ? 'bg-[#00ffe0]' : 'bg-[#004efb]'
                            } rounded-full`}></div>
                            {feature}
                          </li>
                        ))}
                      </ul>

                      {/* CTA Button */}
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-full py-4 px-6 font-semibold flex items-center justify-center gap-2 transition-colors ${
                          plan.popular 
                            ? 'bg-[#00ffe0] text-black hover:bg-[#00d4c4]' 
                            : 'bg-[#004efb] text-white hover:bg-[#0038cc]'
                        }`}
                        style={{ borderRadius: '0' }} // Square edges
                      >
                        Get Started
                        <ArrowRight size={16} />
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
