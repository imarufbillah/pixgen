# PixGen 🎨

> A modern AI image generation gallery platform built with Next.js, featuring user authentication, dynamic filtering, and smooth animations.

[![Next.js](https://img.shields.io/badge/Next.js-16.2.4-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.4-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=flat-square&logo=mongodb)](https://www.mongodb.com/)

## 📸 Live Demo

**[View Live Demo →](https://pixgen-by-marufbillah.vercel.app)**

## ✨ Features

- 🎨 **AI Image Gallery** - Curated collection of AI-generated artwork
- 🔍 **Smart Filtering** - Category-based filtering with smooth animations
- 🔐 **Authentication** - Email/password and Google OAuth integration
- 👤 **User Profiles** - Editable user profiles with image upload
- 🎭 **Smooth Animations** - Framer Motion powered transitions
- 📱 **Responsive Design** - Mobile-first approach with Tailwind CSS
- 🌙 **Dark Theme** - Beautiful dark UI with gradient accents
- ⚡ **Performance Optimized** - Next.js App Router with SSR/SSG
- 🔒 **Secure** - Security headers and environment-based configuration
- 🎯 **SEO Friendly** - Dynamic metadata, sitemap, and structured data

## 🚀 Tech Stack

### Frontend
- **Framework:** Next.js 16.2.4 (App Router)
- **UI Library:** React 19.2.4
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion 12.38.0
- **Icons:** Lucide React, React Icons
- **Notifications:** Sonner

### Backend
- **API Routes:** Next.js API Routes
- **Authentication:** Better-Auth 1.6.9
- **Database:** MongoDB Atlas
- **Database Adapter:** Better-Auth MongoDB Adapter

### Development
- **Language:** JavaScript (ES6+)
- **Linting:** ESLint
- **Package Manager:** npm

## 🏗️ Project Structure

```
pixgen/
├── public/
│   ├── data/
│   │   └── images.json          # Image data
│   └── robots.txt
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── auth/[...all]/   # Better-Auth API routes
│   │   ├── photos/              # Gallery pages
│   │   ├── profile/             # User profile
│   │   ├── signin/              # Sign in page
│   │   ├── signup/              # Sign up page
│   │   ├── pricing/             # Pricing page
│   │   ├── layout.js            # Root layout
│   │   ├── page.js              # Home page
│   │   └── globals.css          # Global styles
│   ├── components/
│   │   ├── skeletons/           # Loading skeletons
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ImageCard.jsx
│   │   └── ...
│   ├── contexts/
│   │   └── SessionContext.js    # Auth session context
│   ├── hooks/
│   │   └── useOAuth.js          # OAuth hook
│   ├── lib/
│   │   └── api.js               # API utilities
│   └── data/
│       └── categories.js        # Category definitions
├── .env                         # Environment variables
├── next.config.mjs              # Next.js configuration
├── tailwind.config.js           # Tailwind configuration
└── package.json
```

## 🎯 Key Features Explained

### Authentication Flow

PixGen uses **Better-Auth** for authentication with MongoDB as the database:

1. **Email/Password** - Traditional registration and login
2. **Google OAuth** - One-click social authentication
3. **Session Management** - React Context for client-side state
4. **Protected Routes** - Automatic redirect for unauthenticated users

### Image Gallery

- **Server-Side Rendering** - Images fetched on the server for optimal performance
- **Category Filtering** - Client-side filtering with Framer Motion animations
- **Responsive Grid** - Adapts to screen size (1/2/3 columns)
- **Image Cards** - Hover effects with metadata overlay

### Animations

Powered by **Framer Motion**:
- Staggered entrance animations
- Layout animations for filtering
- Enter/exit transitions with AnimatePresence
- Micro-interactions (hover, tap)
- Custom easing curves for natural motion

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Better-Auth](https://better-auth.com/) - Authentication library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide](https://lucide.dev/) - Icon library
- [Vercel](https://vercel.com/) - Deployment platform

---

<div align="center">
  <p>Made with ❤️ by Maruf Billah</p>
  <p>⭐ Star this repo if you find it helpful!</p>
</div>
