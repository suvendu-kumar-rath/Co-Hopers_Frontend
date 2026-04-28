import { NavItem, Feature, PricingPlan, Testimonial, GalleryItem } from '@/types';

// Get URLs from environment variables (default to live site URLs)
const meetingRoomUrl =
  process.env.NEXT_PUBLIC_MEETING_ROOM_URL || 'https://cohopers.vercel.app/meeting-room';
const servicesUrl =
  process.env.NEXT_PUBLIC_SERVICES_URL || 'https://cohopers.vercel.app/services';

export const navItems: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Meeting Room', href: meetingRoomUrl, external: true },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Services', href: servicesUrl, external: true },
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
    name: 'PURANJAY SAHU',
    content: 'This has a beautiful office friendly environment. It is one of its kind space in Bhubaneswar. This is equipped with latest and modern amenities to make your feel like working from the comfort of your home. This space also offers individual chambers conference room and different beverage options on demand. Apart from that, with a diverse network connections and mentoring support it makes a best place for young startups and entrepreneurs to grow and flourish in the journey.',
  },
  {
    name: 'Sasank Shekhar Mallick',
    content: 'A well-organized co-working space with excellent facilities. Perfect for companies looking for a professional and productive work environment. Clean workspace, good management, and a positive atmosphere. Recommended ⭐',
  },
  {
    name: 'Swapnnil Akewaar',
    content: 'I would highly recommend Co Hoppers Work Studio Coworking spaces to anyone looking for a flexible and cost-effective workspace solution in the the Bhubaneshwar city. The amenities are great, the staff is friendly and helpful Especially Owner Mr. Sivasish Sir. The networking opportunities are a real plus. Whether you are a freelancer, small business owner, or remote worker, CoHoppers Work Studio has everything you need to be productive and successful.Thank You team for being so generous and supporting me in my difficult times. You guys are Awesome!',
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
