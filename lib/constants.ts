import { NavItem, Feature, PricingPlan, Testimonial, GalleryItem } from '@/types';

export const navItems: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Meeting Room', href: '/meeting-room' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Contact', href: '/contact' },
];

export const features: Feature[] = [
  {
    icon: '🚀',
    title: 'High-Speed WiFi',
    description: 'Lightning-fast internet with 1GB/s speeds for seamless productivity'
  },
  {
    icon: '🔒',
    title: '24/7 Access',
    description: 'Round-the-clock access to your workspace with secure keycard entry'
  },
  {
    icon: '🏢',
    title: 'Meeting Rooms',
    description: 'Professional meeting spaces equipped with modern AV technology'
  },
  {
    icon: '☕',
    title: 'Premium Coffee',
    description: 'Complimentary barista-quality coffee and refreshments all day'
  },
  {
    icon: '🖨️',
    title: 'Print & Scan',
    description: 'High-quality printing, scanning, and copying services included'
  },
  {
    icon: '🤝',
    title: 'Networking Events',
    description: 'Regular community events to connect with like-minded professionals'
  }
];

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Hot Desk',
    price: '$99',
    period: '/month',
    description: 'Perfect for freelancers and remote workers',
    features: [
      'Flexible seating',
      'High-speed WiFi',
      'Coffee & tea included',
      'Access to common areas',
      'Printing credits'
    ],
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300&h=200'
  },
  {
    name: 'Dedicated Desk',
    price: '$199',
    period: '/month',
    description: 'Your own desk in a shared workspace',
    features: [
      'Reserved desk space',
      'Personal storage locker',
      'All Hot Desk benefits',
      'Meeting room credits',
      '24/7 access'
    ],
    popular: true,
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=300&h=200'
  },
  {
    name: 'Private Office',
    price: '$399',
    period: '/month',
    description: 'Private space for small teams',
    features: [
      'Private office for 2-4 people',
      'Lockable door',
      'All previous benefits',
      'Unlimited meeting rooms',
      'Phone booth access'
    ],
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=300&h=200'
  },
  {
    name: 'Executive Cabin',
    price: '$699',
    period: '/month',
    description: 'Premium private office with executive amenities',
    features: [
      'Spacious private office',
      'Executive furniture',
      'Dedicated phone line',
      'Priority booking',
      'Concierge services'
    ],
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=300&h=200'
  }
];

export const testimonials: Testimonial[] = [
  {
    name: 'Sarah Johnson',
    role: 'Founder',
    company: 'TechStart Inc.',
    content: 'The collaborative environment here has been instrumental in growing my startup. The networking opportunities are incredible!',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=80&h=80'
  },
  {
    name: 'Michael Chen',
    role: 'Digital Marketer',
    company: 'Freelancer',
    content: 'Best coworking space in the city! The amenities are top-notch and the community is so welcoming and supportive.',
    avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=80&h=80'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Product Manager',
    company: 'InnovateCorp',
    content: 'The meeting rooms are fantastic and the high-speed internet never lets me down. Perfect for client calls and presentations.',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=80&h=80'
  }
];

export const galleryItems: GalleryItem[] = [
  {
    id: '1',
    src: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
    alt: 'Open workspace area',
    category: 'workspace'
  },
  {
    id: '2',
    src: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
    alt: 'Meeting room',
    category: 'meeting'
  },
  {
    id: '3',
    src: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
    alt: 'Private office',
    category: 'office'
  },
  {
    id: '4',
    src: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
    alt: 'Lounge area',
    category: 'lounge'
  },
  {
    id: '5',
    src: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
    alt: 'Coffee area',
    category: 'amenities'
  },
  {
    id: '6',
    src: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
    alt: 'Phone booth',
    category: 'amenities'
  }
];

// Contact Information
export const contactInfo = {
  company: 'Cohopers',
  address: {
    line1: '630, DLF CYBERCITY, PATIA',
    line2: 'BHUBANESWAR, ODISHA-751024',
    full: '630, DLF CYBERCITY, PATIA, BHUBANESWAR, ODISHA-751024'
  },
  phone: '(+91) 83288 30398',
  email: 'info@cohopers.in',
  location: 'DLF CYBERCITY, BHUBANESWAR, ODISHA'
};
