'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const pricingPlans = [
  {
    title: 'Single Seat',
    subtitle: '(Open desk)',
    capacity: '1 Seater',
    price: '₹4.5k + GST',
    period: 'Per Month',
    features: [
      '24/7 access',
      'Conference room facility',
      '300 MBPS internet',
      'Price includes electricity, AC, Office boy'
    ],
    image: '/images/workspaces/open-desk.png',
    popular: true
  },
  {
    title: 'Executive Cabin',
    subtitle: '(3 Seater)',
    capacity: '3 Seater including 1 Boss seat',
    price: '₹16k + GST',
    period: 'Per Month',
    features: [
      '24/7 access',
      'Conference room facility',
      '300 MBPS internet',
      'Price includes electricity, AC, Office boy'
    ],
    image: '/images/workspaces/meeting-room.png',
    popular: false
  },
  {
    title: 'Window Side Executive Cabin',
    subtitle: '(4 seater)',
    capacity: '4 Seater including 1 Boss seat',
    price: '₹18k + GST',
    period: 'Per Month',
    features: [
      '24/7 access',
      'Conference room facility',
      '300 MBPS internet',
      'Price includes electricity, AC, Office boy'
    ],
    image: '/images/workspaces/private office.png',
    popular: false
  }
];

export default function PricingSection() {
  const handleViewAllPricing = () => {
    // Navigate to pricing page
    window.location.href = '/pricing';
  };

  return (
    <section id="pricing" className="section-padding theme-bg-primary theme-transition">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold theme-accent-primary mb-8">
            Pricing
          </h2>
          <p className="text-lg md:text-xl theme-text-primary max-w-4xl mx-auto leading-relaxed mb-12">
            Choose the perfect workspace solution for your needs. All plans include high-speed internet, 24/7 access, and access to our vibrant community.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className={`relative group cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-theme-accent-primary bg-gradient-to-br from-theme-accent-primary/5 to-theme-bg-primary' : 'theme-bg-primary border theme-border-primary'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 theme-bg-accent-primary text-white px-4 py-1 text-sm font-semibold z-10">
                  Most Popular
                </div>
              )}
              
              <div className="p-6 space-y-6">
                {/* Image */}
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${plan.image})`
                    }}
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold theme-text-primary mb-1">{plan.title}</h3>
                    <p className="theme-text-secondary text-sm mb-2">{plan.subtitle}</p>
                    <p className="theme-text-secondary text-sm">{plan.capacity}</p>
                  </div>

                  <div className="space-y-2">
                    <div className="text-3xl font-bold theme-accent-primary">{plan.price}</div>
                    <div className="theme-text-secondary text-sm">{plan.period}</div>
                  </div>

                  <ul className="space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm theme-text-secondary">
                        <div className="w-1.5 h-1.5 theme-bg-accent-primary rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full theme-bg-accent-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#0038cc] transition-colors"
                  >
                    Get Started
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}