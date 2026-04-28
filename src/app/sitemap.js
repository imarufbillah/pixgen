import { images } from "@/data/images";

export default function sitemap() {
  const baseUrl = "https://pixgen-by-marufbillah.vercel.app";

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/photos`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/profile`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/signin`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/signup`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ];

  // Dynamic photo pages
  const photoPages = images.map((image) => ({
    url: `${baseUrl}/photos/${image.id}`,
    lastModified: new Date(image.createdAt),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticPages, ...photoPages];
}
