"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Breadcrumb() {
  const pathname = usePathname();
  const [imageTitle, setImageTitle] = useState(null);

  // Check if we're on a photo detail page
  const isPhotoDetail = pathname.match(/^\/photos\/(\d+)$/);

  useEffect(() => {
    // Fetch image title if on photo detail page
    if (isPhotoDetail) {
      // Use setTimeout to avoid synchronous setState in effect
      const timer = setTimeout(() => {
        const titleElement = document.querySelector("h1");
        if (titleElement && titleElement.textContent) {
          setImageTitle(titleElement.textContent);
        }
      }, 0);

      return () => clearTimeout(timer);
    } else {
      // Also use setTimeout for consistency
      const timer = setTimeout(() => {
        setImageTitle(null);
      }, 0);

      return () => clearTimeout(timer);
    }
  }, [pathname, isPhotoDetail]);

  // Don't show breadcrumb on home page
  if (pathname === "/") return null;

  // Generate breadcrumb items from pathname
  const pathSegments = pathname.split("/").filter(Boolean);

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    ...pathSegments.map((segment, index) => {
      const href = `/${pathSegments.slice(0, index + 1).join("/")}`;

      // Check if this is the last segment and we're on photo detail page
      const isLastSegment = index === pathSegments.length - 1;

      // Use image title if available and this is the photo ID segment
      let label;
      if (isLastSegment && isPhotoDetail && imageTitle) {
        label = imageTitle;
      } else {
        // Capitalize and format the label
        label = segment
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");
      }

      return { label, href };
    }),
  ];

  return (
    <nav
      aria-label="Breadcrumb"
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-4"
    >
      <ol className="flex items-center gap-2 text-sm flex-wrap">
        {breadcrumbItems.map((item, index) => {
          const isLast = index === breadcrumbItems.length - 1;
          const isHome = index === 0;

          return (
            <li key={item.href} className="flex items-center gap-2">
              {index > 0 && (
                <ChevronRight
                  size={14}
                  className="text-slate-600"
                  aria-hidden="true"
                />
              )}
              {isLast ? (
                <span className="text-violet-400 font-medium flex items-center gap-1.5">
                  {isHome && <Home size={14} />}
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  {isHome && <Home size={14} />}
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
