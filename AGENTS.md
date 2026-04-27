# PixGen – UI Design Prompt (Design Only, No Logic, No TypeScript, Use JavaScript)

> **Instructions for Claude:** Design the complete UI for PixGen — an AI image generation gallery platform. Build **static, design-only** components with **no authentication logic, no API calls, no data fetching, no routing logic, and no state management beyond UI interactions** (hover, toggle, active states are fine). Use **Next.js App Router structure**, **Tailwind CSS**, and **React functional components**. All data should be **hardcoded/mocked** inline. Focus purely on visual excellence, layout, and aesthetics.

---

## 🎨 Design Direction

- **Aesthetic:** Dark, cinematic, and editorial — like a high-end AI art magazine meets a modern SaaS dashboard. Think deep blacks, luminous accent glows, and razor-sharp typography.
- **Color Palette:**
  - Background: `#080b10` (near-black with a blue tint)
  - Surface: `#0f1318` / `#141921`
  - Border: `rgba(255,255,255,0.07)`
  - Accent: Electric violet `#7c3aed` → soft cyan `#22d3ee` gradient
  - Text primary: `#f1f5f9`
  - Text muted: `#64748b`
- **Typography:**
  - Display / Headings: `Syne` (Google Fonts) — wide, geometric, strong
  - Body / UI text: `DM Sans` — clean and modern
- **Mood:** Premium, futuristic, immersive — like Midjourney meets Dribbble

---

## 🧱 Shared Components

### 1. `Navbar`

**Layout:** Full-width sticky navbar with subtle backdrop blur + bottom border glow.

**Left:**
- Logo: `Pix` in white + `Gen` in violet-to-cyan gradient, bold, `Syne` font, with a small sparkle/star SVG icon before it

**Center:**
- Navigation links: `Home`, `All Photos`, `Profile`
- Active link: underline gradient (violet → cyan), slight glow
- Inactive: muted white, hover brightens

**Right (Logged-in state — design this state):**
- User avatar (circular, 36px, with a violet ring)
- Username text (muted, DM Sans)
- `Logout` button: ghost style, red on hover

**Right (Logged-out state — also design this):**
- `Sign In` — ghost button (border: violet, text: white)
- `Sign Up` — solid button (violet → cyan gradient bg)

**Mobile:** Hamburger menu → full-screen slide-down overlay with stacked nav links.

---

### 2. `Footer`

**Layout:** Dark surface, 3-column grid on desktop, stacked on mobile.

**Col 1:** Logo + tagline (`"Where imagination becomes reality."`) + social icons (Twitter/X, Instagram, GitHub, Discord) — icon buttons with hover glow.

**Col 2:** Links — `Home`, `All Photos`, `Profile`, `About`, `Privacy Policy`

**Col 3:** Short "About" blurb about PixGen.

**Bottom bar:** `© 2025 PixGen. All rights reserved.` — centered, muted text, thin top border.

---

## 📄 Pages

---

### 3. Home Page (`/`)

#### 3a. Hero / Banner Section

**Full-viewport-height** hero.

- **Background:** A dramatic radial gradient mesh — deep black center bleeding into violet and cyan at the edges, with a subtle animated grain texture overlay (CSS-based).
- **Floating elements:** 3–4 semi-transparent, blurred image cards drifting/floating in the background (CSS `@keyframes float` animations, different speeds/directions). Use placeholder images from `https://picsum.photos`.
- **Center content:**
  - Small pill badge: `✦ Powered by AI` (violet bg, cyan text, rounded-full)
  - H1: `"Create. Imagine.` (line break) `Generate."` — massive `Syne` font, white, with `Generate.` in violet-cyan gradient
  - Subtext: `"Explore thousands of stunning AI-generated artworks, curated by style, mood, and model."`
  - Two CTA buttons: `Explore Gallery` (gradient solid) + `Learn More` (ghost)
- **Bottom fade:** gradient fade into the next section

#### 3b. Top Generations Section

**Section header:** `"🔥 Top Generations"` — `Syne`, large, left-aligned with a thin violet left-border accent. Subtext: `"Handpicked favorites from the community."`

**Grid:** 4 columns on desktop, 2 on tablet, 1 on mobile.

**Image Card** (design one card style, reuse):
- Aspect ratio: `4/3`
- Image fills card with `object-cover`
- On hover: slight scale-up (`scale-105`), overlay slides up from bottom with:
  - Title (white, bold)
  - Category badge (pill, semi-transparent violet)
  - Row: ❤️ likes count + ⬇️ downloads count (muted icons + numbers)
  - `View Details →` button (small, solid gradient)
- Card border: `1px solid rgba(255,255,255,0.07)`, rounded-xl
- Subtle violet glow shadow on hover

**Mock data:** Use 6 hardcoded image objects with titles, categories, likes, downloads, and `picsum.photos` URLs.

#### 3c. Extra Section (Optional but recommended)

Add a `"Why PixGen?"` or `"Featured Models"` section — 3 feature cards with icons, title, and short description. Icon glows on hover. Dark surface cards.

---

### 4. All Photos Page (`/photos`)

**Page header:**
- Title: `"All Photos"` in large `Syne`
- Subtitle: `"Discover AI-generated art across every style and category"`

**Filter Bar (UI only, no filter logic):**
- Horizontal scrollable row of category pills: `All`, `Nature`, `Sci-Fi`, `Abstract`, `Portrait`, `Architecture`, `Fantasy`, `Cyberpunk`
- Active pill: gradient violet-cyan bg, white text
- Inactive pill: dark surface bg, muted border, hover brightens
- On mobile: horizontally scrollable, no wrap

**Photo Grid:**
- Masonry-style OR uniform `3` columns desktop, `2` tablet, `1` mobile
- Same `ImageCard` component from Home
- Use 12 hardcoded mock images

---

### 5. Photo Details Page (`/photos/[id]`)

> 🔒 *In the real app this is protected. For design: show the full page normally.*

**Layout:** Two-column on desktop (left: image, right: details), stacked on mobile.

**Left Column:**
- Large image, `rounded-2xl`, with subtle glow shadow
- Image takes ~55% of width

**Right Column:**
- Category badge (pill, violet)
- Title: large `Syne`, white
- Section: `"Prompt"` — label muted, value in a dark code-like box (monospace font, dark bg, subtle border, slight glow)
- Meta grid (2-col):
  - 🤖 Model
  - 📐 Resolution
  - ❤️ Likes
  - ⬇️ Downloads
  - 🗓️ Created At
- Tags: row of small pill badges (outlined, muted)
- Action buttons row: `❤️ Like` (ghost) + `⬇️ Download` (gradient solid)

**Hardcode one full mock image object** for this page.

---

### 6. Sign In Page (`/signin`)

**Layout:** Full page, centered card, same dark background as rest of app.

**Background:** Subtle animated gradient mesh (same as hero, lighter version).

**Card:**
- `max-w-md`, centered, dark surface, `rounded-2xl`, border glow
- Logo at top (small)
- Title: `"Welcome back"` — Syne, large
- Subtitle: `"Sign in to access your PixGen profile"`
- Fields:
  - Email — dark input, violet focus ring, label above
  - Password — same, with show/hide eye icon (icon only, no toggle logic)
- `Sign In` button — full width, gradient
- Divider: `"or continue with"`
- Google OAuth button: white bg, Google logo (SVG), `"Continue with Google"` text — dark text
- Bottom: `"Don't have an account? Sign Up"` link

---

### 7. Sign Up Page (`/signup`)

**Same layout as Sign In.**

**Fields:**
- Full Name
- Email
- Profile Image URL
- Password

**Button:** `"Create Account"` — full width, gradient

**Google button + bottom link:** `"Already have an account? Sign In"`

---

### 8. Profile Page (`/profile`)

> 🔒 *Protected. Design as if user is logged in.*

**Layout:** Centered, `max-w-2xl`.

**Top section (Profile Card):**
- Large circular avatar (100px), violet ring border
- Name: large, Syne, white
- Email: muted text below name
- `Edit Profile` button (ghost, small) — opens an inline edit form (design both states: view + edit)

**Edit form state (design this toggle UI):**
- Name input (pre-filled)
- Image URL input (pre-filled)
- `Save Changes` (gradient) + `Cancel` (ghost) buttons

**Stats row (mock data):**
- `"12 Liked"` · `"5 Downloads"` · `"Member since Jan 2025"`

**Section:** `"My Activity"` — placeholder message: `"Your liked and downloaded images will appear here."` with a ghost illustration or empty state icon.

---

## 🧩 Reusable Components to Design

| Component | Notes |
|---|---|
| `ImageCard` | Used in Home + All Photos |
| `CategoryPill` | Filter badge |
| `MetaItem` | Icon + label + value row |
| `GradientButton` | Solid violet-cyan CTA |
| `GhostButton` | Outlined, hover fills |
| `InputField` | Dark themed, violet focus |
| `SectionHeader` | Title + subtitle + left accent |

---

## ⚙️ Technical Constraints

- **Framework:** Next.js (App Router) — `app/` directory structure
- **Styling:** Tailwind CSS only — no inline styles, no CSS modules (unless needed for keyframe animations)
- **Fonts:** Load via `next/font/google` — `Syne` + `DM Sans`
- **Images:** Use `next/image` with `picsum.photos` URLs or placeholder paths
- **Icons:** `lucide-react` preferred
- **No logic:** No `useState` for auth/data, no `useEffect`, no API calls, no `next-auth`, no form submissions — **design only**
- **Interactivity allowed:** Hover states, Tailwind `group` utilities, CSS transitions, CSS `@keyframes` for animations
- **Component per file:** Each page and shared component in its own file

---

## 📁 Suggested Folder Structure

```
app/
├── layout.jsx          # Root layout with Navbar + Footer
├── page.jsx            # Home page
├── photos/
│   ├── page.jsx        # All Photos
│   └── [id]/
│       └── page.jsx    # Photo Details
├── signin/
│   └── page.jsx
├── signup/
│   └── page.jsx
└── profile/
    └── page.jsx

components/
├── Navbar.jsx
├── Footer.jsx
├── ImageCard.jsx
├── CategoryPill.jsx
├── GradientButton.jsx
├── GhostButton.jsx
├── InputField.jsx
└── SectionHeader.jsx

data/
└── images.js           # Hardcoded mock data (10–15 image objects)
```

---

## 🗂️ Mock Data Shape

Each image object should follow this shape (hardcode 12–15 of them):

```js
{
  id: "1",
  title: "Neon Cityscape",
  imageUrl: "https://picsum.photos/seed/neon/800/600",
  prompt: "A futuristic city at night, neon lights reflecting on wet streets, cinematic...",
  category: "Cyberpunk",
  model: "Stable Diffusion XL",
  resolution: "1024×768",
  likes: 2341,
  downloads: 872,
  createdAt: "2025-03-14",
  tags: ["neon", "city", "night", "futuristic"]
}
```

---

> **Final Note to Claude:** Prioritize visual impact and design quality above all. Every page should feel like it belongs to a premium AI product. Sweat the details — spacing, micro-transitions, typographic hierarchy, and color consistency. The goal is portfolio-quality output that could be shipped as a real product.
