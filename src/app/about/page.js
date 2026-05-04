import AboutClient from "./AboutClient";

export const metadata = {
  title: "About PixGen - AI Art Generation Platform",
  description:
    "Learn about PixGen, the ultimate platform for exploring and creating AI-generated art. Discover our mission, vision, and the technology behind stunning AI artwork.",
  keywords: [
    "about PixGen",
    "AI art platform",
    "AI image generation",
    "about us",
    "PixGen mission",
    "AI technology",
  ],
  openGraph: {
    title: "About PixGen - AI Art Generation Platform",
    description:
      "Learn about PixGen and our mission to democratize AI art creation.",
    url: "https://pixgen-by-marufbillah.vercel.app/about",
  },
  alternates: {
    canonical: "https://pixgen-by-marufbillah.vercel.app/about",
  },
};

export default function About() {
  return <AboutClient />;
}
