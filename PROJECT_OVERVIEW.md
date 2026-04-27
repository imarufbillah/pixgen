# PixGen - AI Image Generation Gallery

A stunning, dark-themed UI for an AI image generation gallery platform built with Next.js 16, Tailwind CSS, and React.

## 🎨 Design Features

- **Dark, cinematic aesthetic** with deep blacks and luminous accent glows
- **Violet-to-cyan gradient** accent colors throughout
- **Premium typography** using Syne (headings) and DM Sans (body)
- **Smooth animations** including floating elements, hover effects, and transitions
- **Fully responsive** design for mobile, tablet, and desktop
- **Design-only implementation** - no authentication logic, API calls, or data fetching

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.js              # Root layout with Navbar + Footer
│   ├── page.js                # Home page with hero + top generations
│   ├── photos/
│   │   ├── page.js            # All Photos gallery with filters
│   │   └── [id]/
│   │       └── page.js        # Photo details page
│   ├── signin/
│   │   └── page.js            # Sign in page
│   ├── signup/
│   │   └── page.js            # Sign up page
│   └── profile/
│       └── page.js            # User profile page
├── components/
│   ├── Navbar.jsx             # Sticky navbar with mobile menu
│   ├── Footer.jsx             # Footer with links and social icons
│   ├── ImageCard.jsx          # Reusable image card with hover overlay
│   ├── CategoryPill.jsx       # Filter category button
│   ├── GradientButton.jsx     # Primary CTA button
│   ├── GhostButton.jsx        # Secondary outlined button
│   ├── InputField.jsx         # Form input with violet focus ring
│   ├── MetaItem.jsx           # Icon + label + value display
│   └── SectionHeader.jsx      # Section title with accent bar
└── data/
    └── images.js              # Mock image data (12 images)
```

## 🚀 Getting Started

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Build for Production
```bash
npm run build
npm start
```

## 🎯 Pages Overview

### Home (`/`)
- Full-viewport hero with animated gradient background
- Floating image elements with CSS animations
- "Top Generations" section with 6 featured images
- "Why PixGen?" feature cards

### All Photos (`/photos`)
- Horizontal scrollable category filter bar
- Grid of all 12 mock images
- Responsive masonry-style layout

### Photo Details (`/photos/[id]`)
- Two-column layout (image + details)
- Prompt display in code-style box
- Meta information grid (model, resolution, likes, downloads, date)
- Tags and action buttons

### Sign In (`/signin`)
- Centered card with gradient background
- Email and password fields
- Google OAuth button (design only)
- Link to Sign Up page

### Sign Up (`/signup`)
- Similar to Sign In with additional fields
- Full Name, Email, Profile Image URL, Password
- Google OAuth option

### Profile (`/profile`)
- View/Edit toggle for profile information
- User avatar with initials
- Stats cards (Liked, Downloads, Member Since)
- Empty state for activity section

## 🎨 Design System

### Colors
- Background: `#080b10`
- Surface: `#0f1318` / `#141921`
- Border: `rgba(255,255,255,0.07)`
- Accent: `#7c3aed` → `#22d3ee` (violet to cyan gradient)
- Text Primary: `#f1f5f9`
- Text Muted: `#64748b`

### Typography
- **Syne**: Display and headings (bold, geometric)
- **DM Sans**: Body text and UI elements

### Components
All components are reusable and follow consistent styling patterns with hover states, transitions, and responsive behavior.

## 📦 Dependencies

- **Next.js 16.2.4** - React framework with App Router
- **React 19** - UI library
- **Tailwind CSS 4** - Utility-first CSS framework
- **lucide-react** - Icon library

## 🎭 Mock Data

The app uses 12 hardcoded image objects with the following structure:
- Title, category, prompt
- Model, resolution, likes, downloads
- Created date and tags
- Placeholder images from `picsum.photos`

## 🔧 Customization

To customize the design:
1. Update colors in `src/app/globals.css`
2. Modify mock data in `src/data/images.js`
3. Adjust component styles in individual component files
4. Change fonts in `src/app/layout.js`

## 📝 Notes

- This is a **design-only** implementation
- No authentication, API calls, or state management beyond UI interactions
- All data is hardcoded/mocked
- Focus is on visual excellence and aesthetics
- Ready to be connected to a real backend

## 🌟 Features Showcase

- ✨ Animated grain texture overlay
- 🎨 Gradient mesh backgrounds
- 🎭 Floating image animations
- 🎯 Smooth hover transitions
- 📱 Fully responsive mobile menu
- 🔍 Category filter UI
- 💫 Glow effects on interactive elements
- 🎪 Empty states with illustrations

---

Built with ❤️ using Next.js and Tailwind CSS
