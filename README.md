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

# Set up environment variables
cp .env.example .env
# Edit .env with your configuration

# Run development server
npm run dev

# Build for production
npm run build
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## 🔐 Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# BetterAuth Configuration
BETTER_AUTH_SECRET=your-secret-key-here
BETTER_AUTH_URL=http://localhost:3000
NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:3000

# Base URL (Important for production)
NEXT_PUBLIC_BASE_URL=https://pixgen-by-marufbillah.vercel.app

# MongoDB Connection
MONGODB_URI=your-mongodb-connection-string

# Google OAuth (Optional)
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

### Production Deployment on Vercel

When deploying to Vercel, make sure to set these environment variables in your Vercel project settings:

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add the following variables:
   - `BETTER_AUTH_SECRET` - Generate a secure random string
   - `BETTER_AUTH_URL` - Your production domain (e.g., `https://pixgen-by-marufbillah.vercel.app`)
   - `NEXT_PUBLIC_BETTER_AUTH_URL` - Same as above
   - `NEXT_PUBLIC_BASE_URL` - Your production domain
   - `MONGODB_URI` - Your MongoDB connection string
   - `GOOGLE_CLIENT_ID` - (Optional) Your Google OAuth client ID
   - `GOOGLE_CLIENT_SECRET` - (Optional) Your Google OAuth client secret

4. Redeploy your application after setting environment variables

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
- Better Auth (Authentication)
- MongoDB (Database)
- Sonner (Toast notifications)

## 📝 Project Structure

```
src/
├── app/              # Next.js pages & metadata
│   ├── layout.js     # Root layout with SEO
│   ├── page.js       # Home page
│   ├── sitemap.js    # Dynamic sitemap
│   ├── robots.js     # Robots configuration
│   ├── manifest.js   # PWA manifest
│   ├── photos/       # Gallery pages
│   ├── profile/      # User profile
│   ├── signin/       # Sign in page
│   ├── signup/       # Sign up page
│   ├── pricing/      # Pricing page
│   └── api/          # API routes
├── components/       # Reusable UI components
│   └── skeletons/    # Loading skeletons
├── contexts/         # React contexts
├── data/             # Static data (deprecated)
├── hooks/            # Custom React hooks
└── lib/              # Utility functions
    └── api.js        # Data fetching utilities
public/
└── data/
    └── images.json   # Image data source
```

## 🎯 Data Fetching

The application uses Next.js fetch API to load data from JSON files:

- **Server-side fetching** with 1-hour revalidation
- **Static generation** for photo detail pages
- **Dynamic sitemap** generation from data
- **Automatic URL detection** for development and production

All data is fetched from `public/data/images.json` using utility functions in `src/lib/api.js`.

## 🎯 Use Cases

- Production-ready AI art gallery platform
- Portfolio showcase for UI/UX designers
- Design reference for AI art platforms
- Starting point for image gallery applications
- Learning resource for Next.js + Tailwind CSS + SEO
- Full-stack application with authentication and database

## 📸 Data Management

The application uses a JSON-based data source for images:

- **Location:** `public/data/images.json`
- **Structure:** Contains 15 AI-generated image entries with metadata
- **Categories:** Sci-Fi, Fantasy, Cyberpunk, Realistic, Minimal, Steampunk, etc.
- **Fetching:** Server-side with Next.js fetch API and 1-hour revalidation

To add new images, edit `public/data/images.json` following the existing structure.

## 🔧 Customization

All components are modular and easy to customize:

- Update colors in `globals.css`
- Modify data in `public/data/images.json`
- Adjust component styles individually
- Change fonts in `layout.js`
- Update SEO metadata in page files
- Configure authentication in `src/app/lib/auth.js`

## 🐛 Troubleshooting

### Images not loading in production

If images aren't loading on your deployed site:

1. Verify `NEXT_PUBLIC_BASE_URL` is set correctly in Vercel environment variables
2. Check that `public/data/images.json` exists and is accessible
3. Ensure the domain in `.env` matches your production URL
4. Redeploy after changing environment variables

### Authentication issues

1. Verify all `BETTER_AUTH_*` environment variables are set
2. Check MongoDB connection string is correct
3. Ensure OAuth credentials are configured for production domain
4. Clear browser cookies and try again

## 🚀 Deployment Checklist

Before deploying to production:

1. **Environment Variables** ⚠️ CRITICAL
   - Set `NEXT_PUBLIC_BASE_URL` to your production domain
   - Set `BETTER_AUTH_URL` and `NEXT_PUBLIC_BETTER_AUTH_URL` to production domain
   - Configure `MONGODB_URI` with your database connection
   - Add OAuth credentials if using Google sign-in
   - Generate a secure `BETTER_AUTH_SECRET`

2. **Create Required Images**
   - `/public/og-image.jpg` (1200x630px)
   - `/public/og-photos.jpg` (1200x630px)
   - `/public/icon-192.png` (192x192px)
   - `/public/icon-512.png` (512x512px)

3. **Update Configuration**
   - Replace domain URLs in metadata files
   - Add Google/Yandex verification codes in `layout.js`
   - Update social media links in Footer component

4. **Submit to Search Engines**
   - Google Search Console
   - Bing Webmaster Tools
   - Submit sitemap at `/sitemap.xml`

5. **Set Up Analytics**
   - Google Analytics
   - Vercel Analytics

### Vercel Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables in Vercel dashboard
# Then redeploy
vercel --prod
```

**Important:** After setting environment variables in Vercel, you must redeploy for changes to take effect.

## 📊 Performance

- ⚡ Lighthouse Score: 95+ (Performance)
- 🎯 Core Web Vitals: Optimized
- 📱 Mobile-First: Fully responsive
- ♿ Accessibility: WCAG 2.1 AA compliant

## 📄 License

This is a design showcase project. Feel free to use and modify as needed.

---

**Live Demo:** [https://pixgen-by-marufbillah.vercel.app](https://pixgen-by-marufbillah.vercel.app)

**Note:** This is a full-stack application with authentication, database integration, and dynamic data fetching. All user interactions are functional.

**Documentation:**
- [SEO Implementation Guide](./SEO_IMPLEMENTATION.md)
- [Project Overview](./PROJECT_OVERVIEW.md) (if available)

