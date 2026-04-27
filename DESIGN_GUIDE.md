# PixGen Design Guide 🎨

A comprehensive guide to the visual design and component system of PixGen.

## 🎭 Design Philosophy

PixGen follows a **dark, cinematic, editorial** aesthetic - like a high-end AI art magazine meets a modern SaaS dashboard. Every element is crafted for visual excellence with attention to:

- **Premium feel** - Deep blacks, luminous glows, razor-sharp typography
- **Smooth interactions** - Subtle animations and transitions
- **Visual hierarchy** - Clear content structure with gradient accents
- **Immersive experience** - Full-viewport sections with atmospheric backgrounds

---

## 🎨 Color System

### Primary Colors
```css
/* Backgrounds */
--bg-primary: #080b10      /* Near-black with blue tint */
--bg-surface: #0f1318      /* Elevated surfaces */
--bg-surface-alt: #141921  /* Alternative surface */

/* Borders */
--border-subtle: rgba(255,255,255,0.07)
--border-medium: rgba(255,255,255,0.10)
--border-strong: rgba(255,255,255,0.20)

/* Accent Gradient */
--accent-start: #7c3aed    /* Electric violet */
--accent-end: #22d3ee      /* Soft cyan */

/* Text */
--text-primary: #f1f5f9    /* White/off-white */
--text-muted: #64748b      /* Slate gray */
--text-subtle: #475569     /* Darker slate */
```

### Usage Guidelines

**Backgrounds:**
- Use `#080b10` for main page backgrounds
- Use `#0f1318` for cards, modals, and elevated surfaces
- Use `#141921` for nested surfaces or hover states

**Borders:**
- Default borders: `border-white/10` (rgba(255,255,255,0.10))
- Hover states: `border-white/20` or `border-violet-500/50`
- Active states: Full gradient border

**Accents:**
- Primary CTAs: Full gradient `from-violet-600 to-cyan-500`
- Hover glows: `shadow-violet-500/30`
- Active indicators: Gradient underlines or backgrounds

---

## 📝 Typography

### Font Families

**Syne** - Display & Headings
```css
font-family: var(--font-syne)
weights: 400, 500, 600, 700, 800
usage: Headings, titles, logo, display text
characteristics: Wide, geometric, strong presence
```

**DM Sans** - Body & UI
```css
font-family: var(--font-dm-sans)
weights: 400, 500, 600, 700
usage: Body text, buttons, labels, UI elements
characteristics: Clean, modern, highly readable
```

### Type Scale

```css
/* Display */
.text-display: 4rem - 5rem (64px - 80px) - Hero titles
.text-hero: 3rem - 4rem (48px - 64px) - Page heroes

/* Headings */
.text-h1: 2.5rem - 3rem (40px - 48px) - Page titles
.text-h2: 2rem - 2.5rem (32px - 40px) - Section headers
.text-h3: 1.5rem - 2rem (24px - 32px) - Card titles

/* Body */
.text-lg: 1.125rem (18px) - Large body text
.text-base: 1rem (16px) - Default body text
.text-sm: 0.875rem (14px) - Small text, labels
.text-xs: 0.75rem (12px) - Captions, meta info
```

### Typography Best Practices

1. **Use Syne for impact** - Headings, titles, anything that needs attention
2. **Use DM Sans for clarity** - Body text, UI elements, anything that needs readability
3. **Maintain hierarchy** - Clear size differences between heading levels
4. **Limit line length** - Max 65-75 characters for body text
5. **Use proper weights** - Bold (700) for headings, Medium (500-600) for emphasis

---

## 🧩 Component Library

### Buttons

#### GradientButton
**Primary CTA button with violet-to-cyan gradient**

```jsx
<GradientButton>Explore Gallery</GradientButton>
```

**States:**
- Default: Gradient background, white text
- Hover: Scale up (105%), enhanced shadow glow
- Active: Slight scale down (98%)

**Usage:** Primary actions, main CTAs, important submissions

---

#### GhostButton
**Secondary outlined button**

```jsx
<GhostButton>Learn More</GhostButton>
<GhostButton variant="danger">Logout</GhostButton>
```

**Variants:**
- `default`: Violet border, white text
- `danger`: Red border, red text

**States:**
- Default: Transparent background, colored border
- Hover: Subtle background fill (10% opacity)
- Active: Increased background opacity

**Usage:** Secondary actions, cancel buttons, less prominent CTAs

---

### Form Elements

#### InputField
**Dark-themed input with violet focus ring**

```jsx
<InputField 
  label="Email"
  type="email"
  placeholder="you@example.com"
/>
```

**Features:**
- Dark background (`#0f1318`)
- Subtle border (`border-white/10`)
- Violet focus ring on interaction
- Smooth transitions
- Accessible labels

**States:**
- Default: Muted border
- Focus: Violet ring, enhanced border
- Error: Red ring (when implemented)

---

### Content Display

#### ImageCard
**Reusable card for image gallery display**

```jsx
<ImageCard image={imageObject} />
```

**Features:**
- 4:3 aspect ratio
- Hover overlay with gradient
- Metadata display (likes, downloads)
- Category badge
- "View Details" CTA
- Smooth scale animation on hover

**Hover Behavior:**
1. Image scales up (105%)
2. Dark gradient overlay slides up from bottom
3. Content fades in with stagger
4. Violet glow shadow appears

---

#### CategoryPill
**Filter/tag button with active state**

```jsx
<CategoryPill active={true}>Cyberpunk</CategoryPill>
```

**States:**
- Active: Gradient background, white text, glow shadow
- Inactive: Dark surface, muted text, subtle border
- Hover: Brightened text, enhanced border

---

#### MetaItem
**Icon + label + value display for metadata**

```jsx
<MetaItem 
  icon={Heart}
  label="Likes"
  value="2,341"
/>
```

**Layout:**
- Icon (colored accent)
- Label (small, muted)
- Value (medium, white)
- Dark surface background
- Subtle border

---

#### SectionHeader
**Consistent section title with accent bar**

```jsx
<SectionHeader
  title="Top Generations"
  subtitle="Handpicked favorites from the community."
/>
```

**Features:**
- Vertical gradient accent bar on left
- Large Syne font title
- Optional muted subtitle
- Consistent spacing

---

### Navigation

#### Navbar
**Sticky header with backdrop blur**

**Features:**
- Logo with gradient text
- Center navigation links
- Auth buttons (logged in/out states)
- Mobile hamburger menu
- Smooth transitions
- Active link indicators (gradient underline)

**Mobile Behavior:**
- Full-screen overlay menu
- Stacked navigation
- Large touch targets

---

#### Footer
**Three-column footer with links and social**

**Sections:**
1. Logo + tagline + social icons
2. Quick links
3. About text

**Features:**
- Hover glows on social icons
- Organized link structure
- Copyright bar at bottom

---

## 🎬 Animations & Transitions

### Grain Texture Animation
```css
.grain-texture::before {
  animation: grain 8s steps(10) infinite;
}
```
**Usage:** Hero backgrounds for atmospheric effect

### Floating Elements
```css
.float-1 { animation: float 6s ease-in-out infinite; }
.float-2 { animation: float 8s ease-in-out infinite 1s; }
```
**Usage:** Background decorative images

### Hover Transitions
```css
transition: all 0.3s ease;
```
**Standard duration:** 300ms for most interactions

### Scale Effects
- Buttons: `hover:scale-105`
- Cards: `hover:scale-105`
- Icons: `group-hover:scale-110`

---

## 📐 Layout Patterns

### Container Widths
```css
max-w-7xl  /* Main content container (1280px) */
max-w-5xl  /* Hero content (1024px) */
max-w-2xl  /* Forms, profile (672px) */
max-w-md   /* Auth cards (448px) */
```

### Spacing Scale
```css
gap-2   /* 0.5rem - 8px */
gap-4   /* 1rem - 16px */
gap-6   /* 1.5rem - 24px */
gap-8   /* 2rem - 32px */
gap-12  /* 3rem - 48px */
```

### Grid Patterns
```css
/* Image Gallery */
grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4

/* Feature Cards */
grid-cols-1 md:grid-cols-3

/* Meta Items */
grid-cols-2
```

---

## 🎯 Design Principles

### 1. Consistency
- Use the same spacing scale throughout
- Maintain consistent border radius (rounded-lg, rounded-xl, rounded-2xl)
- Apply uniform hover states across similar elements

### 2. Hierarchy
- Clear visual distinction between heading levels
- Proper use of color to indicate importance
- Strategic use of gradients for primary elements

### 3. Feedback
- Hover states on all interactive elements
- Smooth transitions (never instant changes)
- Visual indicators for active states

### 4. Accessibility
- Sufficient color contrast (WCAG AA minimum)
- Focus states for keyboard navigation
- Semantic HTML structure
- Descriptive alt text for images

### 5. Performance
- Optimize animations (use transform/opacity)
- Lazy load images
- Minimize layout shifts
- Use CSS for animations when possible

---

## 🎨 Creating New Components

When creating new components, follow this checklist:

✅ **Structure**
- Use semantic HTML
- Follow existing naming conventions
- Keep components focused and reusable

✅ **Styling**
- Use Tailwind utility classes
- Follow the color system
- Apply consistent spacing
- Add hover/focus states

✅ **Typography**
- Use appropriate font family (Syne vs DM Sans)
- Follow the type scale
- Maintain proper hierarchy

✅ **Interactions**
- Add smooth transitions (300ms)
- Include hover effects
- Consider mobile touch targets (min 44px)

✅ **Responsive**
- Mobile-first approach
- Test on multiple screen sizes
- Use responsive utilities (sm:, md:, lg:)

---

## 🌟 Special Effects

### Gradient Backgrounds
```jsx
<div className="bg-gradient-radial from-violet-900/20 via-[#080b10] to-cyan-900/20" />
```

### Glow Shadows
```jsx
<div className="shadow-2xl shadow-violet-500/20" />
<div className="hover:shadow-lg hover:shadow-violet-500/50" />
```

### Backdrop Blur
```jsx
<div className="backdrop-blur-xl bg-[#080b10]/80" />
```

### Gradient Text
```jsx
<span className="bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">
  Generate.
</span>
```

---

## 📱 Responsive Breakpoints

```css
sm: 640px   /* Small tablets */
md: 768px   /* Tablets */
lg: 1024px  /* Laptops */
xl: 1280px  /* Desktops */
2xl: 1536px /* Large desktops */
```

### Mobile-First Approach
Always design for mobile first, then enhance for larger screens:

```jsx
// ✅ Good
<div className="text-2xl md:text-4xl lg:text-5xl">

// ❌ Bad
<div className="text-5xl md:text-2xl">
```

---

## 🎭 Page-Specific Patterns

### Hero Sections
- Full viewport height (`min-h-screen`)
- Centered content
- Gradient mesh background
- Floating decorative elements
- Large display typography
- Dual CTA buttons

### Gallery Grids
- Responsive columns (1-2-3-4)
- Consistent gap spacing
- Hover effects on cards
- Category filters above grid

### Detail Pages
- Two-column layout (desktop)
- Stacked layout (mobile)
- Clear information hierarchy
- Action buttons at bottom

### Form Pages
- Centered card layout
- Max width constraint
- Gradient background
- Clear field labels
- Primary CTA button
- Alternative auth options

---

## 🔧 Customization Tips

### Changing Colors
Update in `globals.css`:
```css
:root {
  --background: #080b10;
  --foreground: #f1f5f9;
}
```

### Adjusting Animations
Modify timing in component classes:
```jsx
className="transition-all duration-500" // Slower
className="transition-all duration-150" // Faster
```

### Adding New Gradients
```jsx
className="bg-gradient-to-r from-[#custom1] to-[#custom2]"
```

---

## 📚 Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Google Fonts - Syne](https://fonts.google.com/specimen/Syne)
- [Google Fonts - DM Sans](https://fonts.google.com/specimen/DM+Sans)

---

**Remember:** Every pixel matters. Sweat the details - spacing, micro-transitions, typographic hierarchy, and color consistency. The goal is portfolio-quality output that could be shipped as a real product.
