export const metadata = {
  title: "All Photos - Browse AI-Generated Art Gallery",
  description:
    "Browse our complete collection of AI-generated images. Filter by category including cyberpunk, fantasy, nature, abstract, portrait, architecture, and sci-fi. Discover art from Stable Diffusion, Midjourney, and DALL-E.",
  keywords: [
    "AI art gallery",
    "AI images",
    "browse AI art",
    "cyberpunk art",
    "fantasy art",
    "nature AI art",
    "abstract AI art",
    "AI portraits",
    "architecture AI art",
    "sci-fi art"
  ],
  openGraph: {
    title: "All Photos - PixGen AI Art Gallery",
    description:
      "Browse our complete collection of AI-generated images across all categories and styles.",
    url: "https://pixgen.app/photos",
    images: [
      {
        url: "/og-photos.jpg",
        width: 1200,
        height: 630,
        alt: "PixGen AI Art Gallery - All Photos",
      },
    ],
  },
  alternates: {
    canonical: "https://pixgen.app/photos",
  },
};

export default function PhotosLayout({ children }) {
  return children;
}
