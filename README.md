# PixGen - AI Image Generation Gallery 🎨

A stunning, dark-themed UI showcase for an AI image generation gallery platform. Built with Next.js 16, Tailwind CSS, and React.

![PixGen Preview](https://img.shields.io/badge/Next.js-16.2.4-black?style=for-the-badge&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=for-the-badge&logo=tailwind-css)
![React](https://img.shields.io/badge/React-19-61dafb?style=for-the-badge&logo=react)

## ✨ Features

- 🌑 **Dark, cinematic design** - Premium aesthetic with violet-to-cyan gradients
- 🎭 **Smooth animations** - Floating elements, hover effects, and transitions
- 📱 **Fully responsive** - Mobile-first design with adaptive layouts
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
├── app/              # Next.js pages
├── components/       # Reusable UI components
└── data/            # Mock data
```

See [PROJECT_OVERVIEW.md](./PROJECT_OVERVIEW.md) for detailed documentation.

## 🎯 Use Cases

- Portfolio showcase for UI/UX designers
- Design reference for AI art platforms
- Starting point for image gallery applications
- Learning resource for Next.js + Tailwind CSS

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

## 📄 License

This is a design showcase project. Feel free to use and modify as needed.

---

**Note:** This is a design-only implementation with no authentication, API calls, or data persistence. All interactions are UI-only.
