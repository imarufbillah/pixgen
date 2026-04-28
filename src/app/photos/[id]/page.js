import Image from "next/image";
import Link from "next/link";
import { Heart, Download, Cpu, Maximize2, Calendar } from "lucide-react";
import GradientButton from "@/components/GradientButton";
import GhostButton from "@/components/GhostButton";
import MetaItem from "@/components/MetaItem";
import { images } from "@/data/images";

// Generate static params for all images (optional but recommended for performance)
export async function generateStaticParams() {
  return images.map((image) => ({
    id: image.id,
  }));
}

export async function generateMetadata({ params }) {
  // Await params since it's a Promise in Next.js 15+
  const resolvedParams = await params;
  // Find the image based on the dynamic route parameter
  const image = images.find(img => img.id === resolvedParams.id) || images[0];
  
  return {
    title: `${image.title} - AI-Generated ${image.category} Art`,
    description: `${image.prompt.substring(0, 155)}... Created with ${image.model}. ${image.likes.toLocaleString()} likes, ${image.downloads.toLocaleString()} downloads.`,
    keywords: [
      image.title,
      image.category,
      image.model,
      "AI art",
      "AI-generated image",
      ...image.tags
    ],
    openGraph: {
      title: `${image.title} - PixGen`,
      description: image.prompt,
      url: `https://pixgen.app/photos/${resolvedParams.id}`,
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
      canonical: `https://pixgen.app/photos/${resolvedParams.id}`,
    },
  };
}

export default async function PhotoDetails({ params }) {
  // Await params since it's a Promise in Next.js 15+
  const resolvedParams = await params;
  
  // Find the image based on the dynamic route parameter
  // Ensure we're comparing the right types
  const imageId = String(resolvedParams.id);
  const image = images.find(img => String(img.id) === imageId);
  
  // Debug logging (remove in production)
  console.log('Params ID:', resolvedParams.id, 'Type:', typeof resolvedParams.id);
  console.log('Converted ID:', imageId);
  console.log('Available image IDs:', images.map(img => `${img.id} (${typeof img.id})`));
  console.log('Found image:', image ? image.title : 'Not found');
  
  // If image not found, show 404 or redirect
  if (!image) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Image Not Found</h1>
          <p className="text-slate-400 mb-8">
            The image you're looking for doesn't exist. (ID: {resolvedParams.id})
          </p>
          <p className="text-slate-500 text-sm mb-8">
            Available IDs: {images.map(img => img.id).join(', ')}
          </p>
          <Link href="/photos" className="text-violet-400 hover:text-violet-300">
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
      name: "PixGen Community"
    },
    keywords: image.tags.join(", "),
    width: "1024px",
    height: "768px",
    interactionStatistic: [
      {
        "@type": "InteractionCounter",
        interactionType: "https://schema.org/LikeAction",
        userInteractionCount: image.likes
      },
      {
        "@type": "InteractionCounter",
        interactionType: "https://schema.org/DownloadAction",
        userInteractionCount: image.downloads
      }
    ],
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "AI Model",
        value: image.model
      },
      {
        "@type": "PropertyValue",
        name: "Category",
        value: image.category
      },
      {
        "@type": "PropertyValue",
        name: "Resolution",
        value: image.resolution
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="w-full min-h-screen py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Left Column - Image */}
            <figure className="relative aspect-4/3 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-violet-500/10">
              <Image
                src={image.imageUrl}
                alt={`${image.title} - ${image.category} AI art generated with ${image.model}`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </figure>

          {/* Right Column - Details */}
          <div className="flex flex-col gap-4 sm:gap-6">
            {/* Category Badge */}
            <div>
              <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-violet-600/20 text-cyan-400 border border-violet-500/30">
                {image.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-syne">
              {image.title}
            </h1>

            {/* Prompt Section */}
            <div className="flex flex-col gap-3">
              <h2 className="text-xs sm:text-sm font-semibold text-slate-400 uppercase tracking-wider">
                Prompt
              </h2>
              <div className="p-3 sm:p-4 bg-[#0f1318] border border-white/10 rounded-lg">
                <p className="text-xs sm:text-sm text-slate-300 font-mono leading-relaxed">
                  {image.prompt}
                </p>
              </div>
            </div>

            {/* Meta Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
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
            <div className="flex flex-col gap-3">
              <h2 className="text-xs sm:text-sm font-semibold text-slate-400 uppercase tracking-wider">
                Tags
              </h2>
              <div className="flex flex-wrap gap-2">
                {image.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs sm:text-sm border border-white/20 text-slate-300 hover:border-violet-500/50 hover:text-white transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2 sm:mt-4">
              <GhostButton className="flex-1 flex items-center justify-center gap-2 text-sm sm:text-base">
                <Heart size={18} />
                Like
              </GhostButton>
              <GradientButton className="flex-1 flex items-center justify-center gap-2 text-sm sm:text-base">
                <Download size={18} />
                Download
              </GradientButton>
            </div>
          </div>
        </div>
        </div>
      </article>
    </>
  );
}
