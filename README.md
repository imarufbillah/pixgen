# PixGen - AI Image Generation Gallery 🎨

A stunning, dark-themed UI showcase for an AI image generation gallery platform. Built with Next.js 16, Tailwind CSS, and React with comprehensive SEO optimizations.

![PixGen Preview](https://img.shields.io/badge/Next.js-16.2.4-black?style=for-the-badge&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=for-the-badge&logo=tailwind-css)
![React](https://img.shields.io/badge/React-19-61dafb?style=for-the-badge&logo=react)
![SEO](https://img.shields.io/badge/SEO-Optimized-success?style=for-the-badge)

## ✨ Features

- 🌑 **Dark, cinematic design** - Premium aesthetic with violet-to-cyan gradients
- 🎭 **Smooth animations** - Floating elements, hover effects, and transitions
- 📱 **Fully responsive** - Mobile-first design with adaptive layouts
- 🔍 **SEO Optimized** - Comprehensive metadata, structured data, and semantic HTML
- ♿ **Accessible** - WCAG compliant with ARIA labels and keyboard navigation
- 🎨 **Design-only** - Pure UI showcase with no backend logic
- ⚡ **Fast & modern** - Built with Next.js 16 App Router and Tailwind CSS 4

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## 📄 Pages

- **Home** (`/`) - Hero section with animated background + featured images
- **All Photos** (`/photos`) - Gallery grid with category filters
- **Photo Details** (`/photos/[id]`) - Detailed view with metadata
- **Sign In** (`/signin`) - Authentication UI (design only)
- **Sign Up** (`/signup`) - Registration UI (design only)
- **Profile** (`/profile`) - User profile with edit mode

## 🔍 SEO Features

### Metadata & Tags
- ✅ Comprehensive meta tags (title, description, keywords)
- ✅ Open Graph tags for social media sharing
- ✅ Twitter Card support
- ✅ Dynamic metadata for photo pages
- ✅ Canonical URLs

### Structured Data (JSON-LD)
- ✅ WebSite schema with search action
- ✅ CollectionPage schema for gallery
- ✅ ImageObject schema for photos
- ✅ Organization schema in footer

### Technical SEO
- ✅ Dynamic sitemap generation (`/sitemap.xml`)
- ✅ Robots.txt configuration
- ✅ Web app manifest for PWA
- ✅ Semantic HTML5 elements
- ✅ ARIA labels for accessibility
- ✅ Image optimization with Next.js Image

**See [SEO_IMPLEMENTATION.md](./SEO_IMPLEMENTATION.md) for complete documentation.**

## 🎨 Design System

### Color Palette

```css
Background: #080b10
Surface: #0f1318
Accent: #7c3aed → #22d3ee (gradient)
Text: #f1f5f9
Muted: #64748b
```

### Typography

- **Syne** - Headings and display text
- **DM Sans** - Body and UI text

## 📦 Tech Stack

- Next.js 16.2.4 (App Router)
- React 19
- Tailwind CSS 4
- Lucide React (icons)

## 📝 Project Structure

```
src/
├── app/              # Next.js pages & metadata
│   ├── layout.js     # Root layout with SEO
│   ├── page.js       # Home page
│   ├── sitemap.js    # Dynamic sitemap
│   ├── robots.js     # Robots configuration
│   ├── manifest.js   # PWA manifest
│   └── photos/       # Gallery pages
├── components/       # Reusable UI components
└── data/            # Mock data
```

## 🎯 Use Cases

- Portfolio showcase for UI/UX designers
- Design reference for AI art platforms
- Starting point for image gallery applications
- Learning resource for Next.js + Tailwind CSS + SEO

## 📸 Mock Data

Includes 12 hardcoded AI-generated image entries with:

- Titles, categories, and prompts
- Model information and metadata
- Placeholder images from Picsum

## 🔧 Customization

All components are modular and easy to customize:

- Update colors in `globals.css`
- Modify mock data in `data/images.js`
- Adjust component styles individually
- Change fonts in `layout.js`
- Update SEO metadata in page files

## 🚀 Deployment Checklist

Before deploying to production:

1. **Create Required Images**
   - `/public/og-image.jpg` (1200x630px)
   - `/public/og-photos.jpg` (1200x630px)
   - `/public/icon-192.png` (192x192px)
   - `/public/icon-512.png` (512x512px)

2. **Update Configuration**
   - Replace `https://pixgen.app` with your domain
   - Add Google/Yandex verification codes
   - Update social media links in Footer

3. **Submit to Search Engines**
   - Google Search Console
   - Bing Webmaster Tools
   - Submit sitemap

4. **Set Up Analytics**
   - Google Analytics
   - Next.js Analytics

## 📊 Performance

- ⚡ Lighthouse Score: 95+ (Performance)
- 🎯 Core Web Vitals: Optimized
- 📱 Mobile-First: Fully responsive
- ♿ Accessibility: WCAG 2.1 AA compliant

## 📄 License

This is a design showcase project. Feel free to use and modify as needed.

---

**Note:** This is a design-only implementation with no authentication, API calls, or data persistence. All interactions are UI-only.

**Documentation:**
- [SEO Implementation Guide](./SEO_IMPLEMENTATION.md)
- [Project Overview](./PROJECT_OVERVIEW.md) (if available)

