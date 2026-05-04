import Link from "next/link";
import { fetchImages, fetchImageById } from "@/lib/api";
import PhotoDetailClient from "./PhotoDetailClient";

// Generate static params for all images (optional but recommended for performance)
export async function generateStaticParams() {
  const images = await fetchImages();
  return images.map((image) => ({
    id: image.id,
  }));
}

export async function generateMetadata({ params }) {
  // Await params since it's a Promise in Next.js 15+
  const resolvedParams = await params;
  // Find the image based on the dynamic route parameter
  const image = await fetchImageById(resolvedParams.id);

  // Fallback if image not found
  if (!image) {
    return {
      title: "Image Not Found - PixGen",
      description: "The requested image could not be found.",
    };
  }

  return {
    title: `${image.title} - AI-Generated ${image.category} Art`,
    description: `${image.prompt.substring(0, 155)}... Created with ${image.model}. ${image.likes.toLocaleString()} likes, ${image.downloads.toLocaleString()} downloads.`,
    keywords: [
      image.title,
      image.category,
      image.model,
      "AI art",
      "AI-generated image",
      ...image.tags,
    ],
    openGraph: {
      title: `${image.title} - PixGen`,
      description: image.prompt,
      url: `https://pixgen-by-marufbillah.vercel.app/photos/${resolvedParams.id}`,
      type: "article",
      images: [
        {
          url: image.imageUrl,
          width: 1024,
          height: 768,
          alt: image.title,
        },
      ],
      article: {
        publishedTime: image.createdAt,
        tags: image.tags,
      },
    },
    twitter: {
      card: "summary_large_image",
      title: `${image.title} - PixGen`,
      description: image.prompt.substring(0, 200),
      images: [image.imageUrl],
    },
    alternates: {
      canonical: `https://pixgen-by-marufbillah.vercel.app/photos/${resolvedParams.id}`,
    },
  };
}

export default async function PhotoDetails({ params }) {
  // Await params since it's a Promise in Next.js 15+
  const resolvedParams = await params;

  // Find the image based on the dynamic route parameter
  const imageId = String(resolvedParams.id);
  const image = await fetchImageById(imageId);

  // If image not found, show 404 or redirect
  if (!image) {
    const allImages = await fetchImages();
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Image Not Found
          </h1>
          <p className="text-slate-400 mb-8">
            The image you&apos;re looking for doesn&apos;t exist. (ID:{" "}
            {resolvedParams.id})
          </p>
          <p className="text-slate-500 text-sm mb-8">
            Available IDs: {allImages.map((img) => img.id).join(", ")}
          </p>
          <Link
            href="/photos"
            className="text-violet-400 hover:text-violet-300"
          >
            ← Back to Gallery
          </Link>
        </div>
      </div>
    );
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    name: image.title,
    description: image.prompt,
    contentUrl: image.imageUrl,
    thumbnailUrl: image.imageUrl,
    uploadDate: image.createdAt,
    creator: {
      "@type": "Organization",
      name: "PixGen Community",
    },
    keywords: image.tags.join(", "),
    width: "1024px",
    height: "768px",
    interactionStatistic: [
      {
        "@type": "InteractionCounter",
        interactionType: "https://schema.org/LikeAction",
        userInteractionCount: image.likes,
      },
      {
        "@type": "InteractionCounter",
        interactionType: "https://schema.org/DownloadAction",
        userInteractionCount: image.downloads,
      },
    ],
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "AI Model",
        value: image.model,
      },
      {
        "@type": "PropertyValue",
        name: "Category",
        value: image.category,
      },
      {
        "@type": "PropertyValue",
        name: "Resolution",
        value: image.resolution,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PhotoDetailClient image={image} />
    </>
  );
}
