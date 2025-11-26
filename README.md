# Cohopers - Premium Coworking Spaces

A modern, responsive website for Cohopers coworking space built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern UI/UX** - Clean, professional design with smooth animations
- **Dark/Light Theme** - Automatic theme switching with next-themes
- **Smooth Scrolling** - Implemented with Lenis for butter-smooth navigation
- **Responsive Design** - Mobile-first approach, works on all devices
- **Performance Optimized** - Static export with optimized images and assets
- **SEO Ready** - Comprehensive metadata, Open Graph tags, and sitemap
- **Type Safe** - Built with TypeScript for better development experience

## 📋 Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/suvendu-kumar-rath/Co-Hopers_Frontend.git
cd Co-Hopers_Frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env.local
```

4. Update the environment variables in `.env.local`:
```env
NEXT_PUBLIC_MEETING_ROOM_URL=https://your-meeting-room-url.com
NEXT_PUBLIC_SERVICES_URL=https://your-services-url.com
NEXT_PUBLIC_SITE_URL=https://cohopers.in
```

## 🏃 Running Locally

Development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3001`

## 🏗️ Building for Production

Build the static export:
```bash
npm run build
```

The static files will be generated in the `out/` directory.

Test the production build locally:
```bash
npm run start
```

## 📦 Project Structure

```
Co-Hopers_Frontend/
├── app/                      # Next.js app directory
│   ├── about/               # About page
│   ├── contact/             # Contact page
│   ├── gallery/             # Gallery page
│   ├── pricing/             # Pricing page
│   ├── services/            # Services page
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Home page
│   └── sitemap.ts           # Dynamic sitemap
├── components/              # Reusable components
│   ├── navigation/          # Navigation components
│   ├── providers/           # Context providers (Theme, Lenis)
│   ├── sections/            # Page sections
│   └── ui/                  # UI components (buttons, cards, etc.)
├── hooks/                   # Custom React hooks
├── lib/                     # Utility functions and constants
├── public/                  # Static assets
│   ├── images/             # Image assets
│   └── robots.txt          # SEO robots file
├── types/                   # TypeScript type definitions
├── .env.example            # Environment variables template
├── next.config.js          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Configure environment variables
4. Deploy

### Netlify

1. Build the project: `npm run build`
2. Deploy the `out/` directory
3. Configure environment variables in Netlify dashboard

### Traditional Hosting (Apache/Nginx)

1. Build: `npm run build`
2. Upload the `out/` directory to your server
3. Configure your web server to serve the static files

## 🔧 Configuration

### Environment Variables

- `NEXT_PUBLIC_MEETING_ROOM_URL` - External meeting room booking URL
- `NEXT_PUBLIC_SERVICES_URL` - External services URL
- `NEXT_PUBLIC_SITE_URL` - Your production site URL (for SEO)

### Next.js Config

The project is configured for static export (`output: 'export'`) with unoptimized images for compatibility with static hosting.

## 🎨 Customization

### Colors & Theme

Edit `app/globals.css` to customize the color scheme:
```css
:root {
  --primary-color: #004efb;
  --accent-color: #00ffe0;
  /* ... more variables */
}
```

### Content

- Update company information in `lib/constants.ts`
- Modify page content in respective page files
- Add/remove sections in `app/page.tsx`

## 📱 Pages

- **Home** (`/`) - Hero, features, services, testimonials, pricing
- **About** (`/about`) - Company information and story
- **Gallery** (`/gallery`) - Workspace images and virtual tour
- **Services** (`/services`) - Available services and amenities
- **Pricing** (`/pricing`) - Membership plans and pricing
- **Contact** (`/contact`) - Contact form and location information

## 🔍 SEO Features

- Comprehensive metadata in `app/layout.tsx`
- Open Graph and Twitter Card tags
- Sitemap generation at `/sitemap.xml`
- Robots.txt configuration
- Semantic HTML structure
- Alt tags for all images

## 🐛 Known Issues

- Loading animation plays on every page load (can be optimized with sessionStorage)
- Contact form submission needs backend integration

## 📝 License

This project is proprietary and confidential.

## 👥 Contact

- **Email**: info@cohopers.in
- **Phone**: (+91) 83288 30398
- **Address**: 630, DLF CYBERCITY, PATIA, BHUBANESWAR, ODISHA-751024

## 🙏 Credits

Built with:
- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lenis](https://lenis.studiofreight.com/)
- [Radix UI](https://www.radix-ui.com/)

---

Made with ❤️ for Cohopers