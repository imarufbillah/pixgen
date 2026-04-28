import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL("https://pixgen-by-marufbillah.vercel.app"),
  title: {
    default: "PixGen - AI Image Generation Gallery | Explore AI Art",
    template: "%s | PixGen",
  },
  description:
    "Explore thousands of stunning AI-generated artworks, curated by style, mood, and model. Discover cyberpunk, fantasy, abstract, and photorealistic AI art from Stable Diffusion, Midjourney, and DALL-E.",
  keywords: [
    "AI art",
    "AI image generation",
    "AI-generated images",
    "Stable Diffusion",
    "Midjourney",
    "DALL-E",
    "AI gallery",
    "digital art",
    "AI artwork",
    "generative art",
    "cyberpunk art",
    "fantasy art",
    "abstract art",
    "AI art community",
  ],
  authors: [{ name: "PixGen Team" }],
  creator: "PixGen",
  publisher: "PixGen",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pixgen-by-marufbillah.vercel.app",
    siteName: "PixGen",
    title: "PixGen - AI Image Generation Gallery",
    description:
      "Explore thousands of stunning AI-generated artworks, curated by style, mood, and model.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PixGen - AI Image Generation Gallery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PixGen - AI Image Generation Gallery",
    description:
      "Explore thousands of stunning AI-generated artworks, curated by style, mood, and model.",
    images: ["/og-image.jpg"],
    creator: "@pixgen",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "PixGen",
    description:
      "AI Image Generation Gallery - Explore stunning AI-generated artworks",
    url: "https://pixgen-by-marufbillah.vercel.app",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://pixgen-by-marufbillah.vercel.app/photos?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="canonical" href="https://pixgen-by-marufbillah.vercel.app" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#080b10] text-slate-100">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster 
          theme="dark" 
          position="top-right"
          toastOptions={{
            style: {
              background: '#0f1318',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#f1f5f9',
            },
          }}
        />
      </body>
    </html>
  );
}
