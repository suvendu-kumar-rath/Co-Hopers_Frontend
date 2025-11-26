# Production Deployment Checklist

## Pre-Deployment Checks

### Environment Configuration
- [ ] Set `NEXT_PUBLIC_SITE_URL` to production URL
- [ ] Configure `NEXT_PUBLIC_MEETING_ROOM_URL` 
- [ ] Configure `NEXT_PUBLIC_SERVICES_URL`
- [ ] Add Google Analytics ID (if needed)
- [ ] Set up error tracking service (Sentry, etc.)

### SEO & Performance
- [ ] Verify sitemap is accessible at `/sitemap.xml`
- [ ] Verify robots.txt is accessible at `/robots.txt`
- [ ] Check all Open Graph images exist
- [ ] Add favicon and apple-touch-icon
- [ ] Test social media sharing (Twitter, Facebook, LinkedIn)
- [ ] Run Lighthouse audit (aim for 90+ scores)

### Content & Assets
- [ ] Replace placeholder images with actual photos
- [ ] Optimize all images (compress, proper sizes)
- [ ] Update contact information in `lib/constants.ts`
- [ ] Verify all external links work
- [ ] Check video file size and loading performance
- [ ] Add proper alt text to all images

### Functionality
- [ ] Test contact form submission
- [ ] Set up form backend/email service
- [ ] Test all navigation links
- [ ] Test mobile responsiveness on real devices
- [ ] Test dark/light theme switching
- [ ] Check loading states and animations
- [ ] Test error boundaries

### Security
- [ ] Enable HTTPS on hosting
- [ ] Configure security headers in hosting provider
- [ ] Review and update CSP if needed
- [ ] Ensure no sensitive data in client-side code
- [ ] Check for exposed API keys

### Build & Deploy
- [ ] Run `npm run build` successfully
- [ ] Test production build locally with `npm run start`
- [ ] Check bundle size and optimize if needed
- [ ] Deploy to staging environment first
- [ ] Full QA testing on staging
- [ ] Deploy to production

## Post-Deployment

### Monitoring
- [ ] Set up uptime monitoring
- [ ] Configure error tracking
- [ ] Set up analytics tracking
- [ ] Monitor Core Web Vitals

### DNS & Domain
- [ ] Configure DNS records
- [ ] Set up www redirect
- [ ] Enable CDN if applicable
- [ ] Test from different geographic locations

### SEO
- [ ] Submit sitemap to Google Search Console
- [ ] Submit to Bing Webmaster Tools
- [ ] Verify Google My Business listing
- [ ] Check structured data with Rich Results Test

### Marketing
- [ ] Update social media links
- [ ] Create social media preview cards
- [ ] Set up business email
- [ ] Configure contact form notifications

## Maintenance

### Regular Tasks
- [ ] Weekly: Check error logs
- [ ] Monthly: Review analytics
- [ ] Monthly: Update dependencies
- [ ] Quarterly: Full security audit
- [ ] Quarterly: Performance audit

## Hosting-Specific Setup

### Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

Environment Variables in Vercel:
- Go to Project Settings > Environment Variables
- Add all variables from .env.example

### Netlify
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod --dir=out
```

Configuration in `netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = "out"

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "SAMEORIGIN"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"
```

### Traditional Hosting
1. Build: `npm run build`
2. Upload `out/` directory
3. Configure web server:
   - Set up URL rewriting for SPA
   - Enable gzip compression
   - Add security headers
   - Configure caching headers

## Performance Targets

- First Contentful Paint (FCP): < 1.8s
- Largest Contentful Paint (LCP): < 2.5s
- Cumulative Layout Shift (CLS): < 0.1
- First Input Delay (FID): < 100ms
- Time to Interactive (TTI): < 3.8s

## Support Contacts

- Development Team: [Your Email]
- Hosting Support: [Hosting Provider]
- Domain Registrar: [Domain Provider]
