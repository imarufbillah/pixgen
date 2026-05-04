import { fetchTopImages } from "@/lib/api";
import HomeClient from "./HomeClient";

export const metadata = {
  title: "Home - Explore AI-Generated Art Gallery",
  description:
    "Discover thousands of stunning AI-generated artworks from Stable Diffusion, Midjourney, and DALL-E. Browse cyberpunk, fantasy, abstract, and photorealistic AI art. Join the PixGen community today.",
  openGraph: {
    title: "PixGen - AI Image Generation Gallery",
    description:
      "Explore thousands of stunning AI-generated artworks, curated by style, mood, and model.",
    url: "https://pixgen-by-marufbillah.vercel.app",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PixGen AI Art Gallery",
      },
    ],
  },
  alternates: {
    canonical: "https://pixgen-by-marufbillah.vercel.app",
  },
};

export default async function Home() {
  const topImages = await fetchTopImages(6);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "PixGen - AI Image Generation Gallery",
    description: "Explore thousands of stunning AI-generated artworks",
    url: "https://pixgen-by-marufbillah.vercel.app",
    mainEntity: {
      "@type": "ImageGallery",
      name: "AI-Generated Art Collection",
      description:
        "Curated collection of AI-generated images from various models",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeClient topImages={topImages} />
    </>
  );
}
