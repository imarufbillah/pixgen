export default function manifest() {
  return {
    name: "PixGen - AI Image Generation Gallery",
    short_name: "PixGen",
    description:
      "Explore thousands of stunning AI-generated artworks, curated by style, mood, and model.",
    start_url: "/",
    display: "standalone",
    background_color: "#080b10",
    theme_color: "#7c3aed",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
