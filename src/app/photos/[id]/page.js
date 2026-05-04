import Image from "next/image";
import Link from "next/link";
import { Heart, Download, Cpu, Maximize2, Calendar } from "lucide-react";
import GradientButton from "@/components/GradientButton";
import GhostButton from "@/components/GhostButton";
import MetaItem from "@/components/MetaItem";
import { fetchImages, fetchImageById } from "@/lib/api";

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
      <article className="w-full min-h-screen py-8 sm:py-12 animate-fade-in">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Left Column - Image */}
            <figure className="relative aspect-4/3 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-violet-500/10 group animate-fade-in-scale">
              <Image
                src={image.imageUrl}
                alt={`${image.title} - ${image.category} AI art generated with ${image.model}`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </figure>

            {/* Right Column - Details */}
            <div className="flex flex-col gap-4 sm:gap-6">
              {/* Category Badge */}
              <div className="animate-slide-in-right">
                <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-violet-600/20 text-cyan-400 border border-violet-500/30 hover:scale-105 transition-transform duration-300 cursor-default">
                  {image.category}
                </span>
              </div>

              {/* Title */}
              <h1
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-syne animate-slide-in-right hover:text-violet-400 transition-colors duration-300"
                style={{ animationDelay: "0.1s" }}
              >
                {image.title}
              </h1>

              {/* Prompt Section */}
              <div
                className="flex flex-col gap-3 animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                <h2 className="text-xs sm:text-sm font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                  <span className="w-1 h-4 bg-violet-500 rounded-full" />
                  Prompt
                </h2>
                <div className="p-3 sm:p-4 bg-[#0f1318] border border-white/10 rounded-lg hover:border-violet-500/30 transition-all duration-300 group">
                  <p className="text-xs sm:text-sm text-slate-300 font-mono leading-relaxed group-hover:text-white transition-colors duration-300">
                    {image.prompt}
                  </p>
                </div>
              </div>

              {/* Meta Grid */}
              <div
                className="grid grid-cols-2 gap-3 sm:gap-4 animate-fade-in"
                style={{ animationDelay: "0.3s" }}
              >
                <MetaItem icon={Cpu} label="Model" value={image.model} />
                <MetaItem
                  icon={Maximize2}
                  label="Resolution"
                  value={image.resolution}
                />
                <MetaItem
                  icon={Heart}
                  label="Likes"
                  value={image.likes.toLocaleString()}
                />
                <MetaItem
                  icon={Download}
                  label="Downloads"
                  value={image.downloads.toLocaleString()}
                />
                <MetaItem
                  icon={Calendar}
                  label="Created"
                  value={new Date(image.createdAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                />
              </div>

              {/* Tags */}
              <div
                className="flex flex-col gap-3 animate-fade-in"
                style={{ animationDelay: "0.4s" }}
              >
                <h2 className="text-xs sm:text-sm font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                  <span className="w-1 h-4 bg-cyan-500 rounded-full" />
                  Tags
                </h2>
                <div className="flex flex-wrap gap-2">
                  {image.tags.map((tag, index) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs sm:text-sm border border-white/20 text-slate-300 hover:border-violet-500/50 hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer animate-fade-in"
                      style={{ animationDelay: `${0.05 * index}s` }}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2 sm:mt-4 animate-fade-in"
                style={{ animationDelay: "0.5s" }}
              >
                <GhostButton className="flex-1">
                  <Heart size={18} />
                  <span>Like</span>
                </GhostButton>
                <GradientButton className="flex-1">
                  <Download size={18} />
                  <span>Download</span>
                </GradientButton>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
