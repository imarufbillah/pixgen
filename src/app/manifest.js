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
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
