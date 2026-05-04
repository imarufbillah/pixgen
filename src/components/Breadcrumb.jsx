"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Breadcrumb() {
  const pathname = usePathname();

  // Don't show breadcrumb on home page
  if (pathname === "/") return null;

  // Generate breadcrumb items from pathname
  const pathSegments = pathname.split("/").filter(Boolean);

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    ...pathSegments.map((segment, index) => {
      const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
      // Capitalize and format the label
      const label = segment
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

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
