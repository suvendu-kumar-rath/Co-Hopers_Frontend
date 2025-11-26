'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useState } from 'react';
import Navbar from '@/components/navigation/Navbar';
import { contactInfo } from '@/lib/constants';

const contactDetails = [
  {
    icon: <MapPin className="w-6 h-6" />,
    title: 'Address',
    details: [contactInfo.address.line1, contactInfo.address.line2],
    color: 'text-[#004efb]'
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: 'Phone',
    details: [contactInfo.phone],
    color: 'text-[#004efb]'
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: 'Email',
    details: [contactInfo.email],
    color: 'text-[#004efb]'
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Hours',
    details: ['Mon - Sat: 8:00 AM - 8:00 PM', 'Sunday: 10:00 AM - 6:00 PM'],
    color: 'text-[#004efb]'
  }
];

const faqs = [
  {
    question: 'What are your membership options?',
    answer: 'We offer flexible membership options including hot desks, dedicated desks, private offices, and meeting room bookings. Choose what works best for your needs.'
  },
  {
    question: 'Do you provide 24/7 access?',
    answer: 'Yes, most of our memberships include 24/7 access to the workspace with secure keycard entry.'
  },
  {
    question: 'Is parking available?',
    answer: 'Yes, we provide dedicated parking spaces for our members and visitor parking for guests.'
  },
  {
    question: 'Can I book meeting rooms?',
    answer: 'Absolutely! Our meeting rooms can be booked by the hour or day, with advanced presentation equipment included.'
  }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    interest: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen theme-bg-primary theme-text-primary theme-transition">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-[#004efb] to-[#0038cc] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url(/images/backgrounds/back ground image.jpg)'
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
              CONTACT US
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Get in touch with us to learn more about our coworking spaces
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 theme-bg-primary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold theme-text-primary mb-6">
              Get In Touch
            </h2>
            <p className="text-xl theme-text-secondary max-w-3xl mx-auto">
              We're here to help you find the perfect workspace solution
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactDetails.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center theme-bg-secondary p-8 rounded-lg hover:shadow-lg transition-shadow theme-transition"
              >
                <div className={`${info.color} mb-4 flex justify-center`}>
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold theme-text-primary mb-4">
                  {info.title}
                </h3>
                {info.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="theme-text-secondary mb-1">
                    {detail}
                  </p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 theme-bg-secondary">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="theme-bg-primary p-8 rounded-lg shadow-lg theme-transition"
            >
              <h3 className="text-3xl font-bold theme-text-primary mb-6">
                Send us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold theme-text-secondary mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004efb] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold theme-text-secondary mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004efb] focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold theme-text-secondary mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004efb] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold theme-text-secondary mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004efb] focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold theme-text-secondary mb-2">
                    I'm interested in
                  </label>
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004efb] focus:border-transparent"
                  >
                    <option value="">Select an option</option>
                    <option value="hot-desk">Hot Desk</option>
                    <option value="dedicated-desk">Dedicated Desk</option>
                    <option value="private-office">Private Office</option>
                    <option value="meeting-room">Meeting Room</option>
                    <option value="virtual-office">Virtual Office</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold theme-text-secondary mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004efb] focus:border-transparent"
                    placeholder="Tell us about your workspace needs..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-[#004efb] text-white px-8 py-4 text-lg font-bold hover:bg-[#0038cc] transition-colors flex items-center justify-center gap-3"
                >
                  Send Message
                  <Send size={20} />
                </motion.button>
              </form>
            </motion.div>

            {/* Map and Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Map Placeholder */}
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-[#004efb] mx-auto mb-4" />
                  <p className="theme-text-secondary">Interactive Map</p>
                  <p className="text-sm text-gray-500">{contactInfo.location}</p>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="theme-bg-primary p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-bold theme-text-primary mb-4">
                  Quick Contact
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#004efb]" />
                    <span className="theme-text-secondary">{contactInfo.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#004efb]" />
                    <span className="theme-text-secondary">{contactInfo.email}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-[#004efb]" />
                    <span className="theme-text-secondary">Mon-Sat: 8AM-8PM</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 theme-bg-primary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold theme-text-primary mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl theme-text-secondary max-w-3xl mx-auto">
              Find answers to common questions about our coworking spaces
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="theme-bg-secondary p-6 rounded-lg"
              >
                <h3 className="text-xl font-bold theme-text-primary mb-3">
                  {faq.question}
                </h3>
                <p className="theme-text-secondary">
                  {faq.answer}
                </p>
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
              Ready to Book a Tour?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Schedule a visit to see our spaces and experience the Cohopers community
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#00ffe0] theme-text-primary px-12 py-4 text-xl font-bold hover:bg-[#00d4c4] transition-colors flex items-center gap-3 mx-auto"
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











