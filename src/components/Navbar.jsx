"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Sparkles, Menu, X } from "lucide-react";
import { useState } from "react";
import { useSession } from "../contexts/SessionContext";
import { toast } from "sonner";
import GradientButton from "./GradientButton";
import GhostButton from "./GhostButton";
import Image from "next/image";
import NavbarSkeleton from "./skeletons/NavbarSkeleton";

export default function Navbar() {
  const router = useRouter();
  const { session, isPending, signOut } = useSession();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Show skeleton while session is loading
  if (isPending) {
    return <NavbarSkeleton />;
  }

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/photos", label: "All Photos" },
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About" },
    ...(session ? [{ href: "/profile", label: "Profile" }] : []),
  ];

  const handleLogout = async () => {
    const result = await signOut();
    if (result.success) {
      toast.success("Signed out successfully");
      setMobileMenuOpen(false);
      router.push("/");
    } else {
      toast.error("Failed to sign out");
    }
  };

  const getInitials = (name) => {
    if (!name) return "U";
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  // Function to check if a link is active
  const isActiveLink = (href) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <nav
        className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#080b10]/80 backdrop-blur-xl"
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 group"
              aria-label="PixGen home"
            >
              <Sparkles
                className="text-violet-400 group-hover:text-cyan-400 transition-colors duration-300"
                size={20}
                aria-hidden="true"
              />
              <span className="text-lg md:text-xl font-bold font-syne">
                <span className="text-white">Pix</span>
                <span className="bg-linear-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">
                  Gen
                </span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <ul
              className="hidden md:flex items-center gap-6 lg:gap-8"
              role="menubar"
            >
              {navLinks.map((link) => {
                const isActive = isActiveLink(link.href);
                return (
                  <li key={link.href} role="none">
                    <Link
                      href={link.href}
                      className={`relative text-sm lg:text-base transition-colors duration-300 group ${
                        isActive
                          ? "text-white"
                          : "text-slate-300 hover:text-white"
                      }`}
                      role="menuitem"
                    >
                      {link.label}
                      <span
                        className={`absolute -bottom-1 left-0 h-0.5 bg-linear-to-r from-violet-600 to-cyan-500 transition-all duration-300 ${
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center gap-3 lg:gap-4">
              {session ? (
                <>
                  <Link
                    href="/profile"
                    className="flex items-center gap-2 lg:gap-3 group"
                  >
                    <span className="text-xs lg:text-sm text-slate-400 group-hover:text-white transition-colors">
                      {session.user?.name || "User"}
                    </span>
                    <div className="w-8 h-8 lg:w-9 lg:h-9 rounded-full bg-linear-to-br from-violet-600 to-cyan-500 p-0.5">
                      {session.user?.image ? (
                        <Image
                          src={session.user.image}
                          alt={session.user.name}
                          className="w-full h-full rounded-full object-cover"
                          width={36}
                          height={36}
                        />
                      ) : (
                        <div className="w-full h-full rounded-full bg-[#080b10] flex items-center justify-center text-white text-xs lg:text-sm font-semibold">
                          {getInitials(session.user?.name)}
                        </div>
                      )}
                    </div>
                  </Link>
                  <GhostButton
                    onClick={handleLogout}
                    variant="danger"
                    className="text-xs lg:text-sm px-3 lg:px-4 py-1.5 lg:py-2"
                  >
                    Logout
                  </GhostButton>
                </>
              ) : (
                <>
                  <Link href="/signin">
                    <GhostButton className="text-xs lg:text-sm px-3 lg:px-4 py-1.5 lg:py-2">
                      Sign In
                    </GhostButton>
                  </Link>
                  <Link href="/signup">
                    <GradientButton className="text-xs lg:text-sm px-3 lg:px-4 py-1.5 lg:py-2">
                      Sign Up
                    </GradientButton>
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white p-2"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-[#080b10] md:hidden animate-fade-in"
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
        >
          <nav
            className="flex flex-col items-center justify-center h-full gap-8 px-8"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link, index) => {
              const isActive = isActiveLink(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-2xl font-bold transition-all duration-300 font-syne animate-slide-in-left ${
                    isActive
                      ? "text-violet-400 scale-110"
                      : "text-white hover:text-violet-400 hover:scale-110"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {link.label}
                </Link>
              );
            })}

            <div
              className="flex flex-col gap-4 w-full max-w-xs mt-8 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              {session ? (
                <>
                  <Link
                    href="/profile"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="flex items-center justify-center gap-3 p-4 bg-[#0f1318] rounded-xl border border-white/10 hover:border-violet-500/50 transition-all duration-300 hover:scale-105 active:scale-95">
                      <div className="w-12 h-12 rounded-full bg-linear-to-br from-violet-600 to-cyan-500 p-0.5">
                        {session.user?.image ? (
                          <Image
                            src={session.user.image}
                            alt={session.user.name}
                            className="w-full h-full rounded-full object-cover"
                            width={48}
                            height={48}
                          />
                        ) : (
                          <div className="w-full h-full rounded-full bg-[#080b10] flex items-center justify-center text-white font-semibold">
                            {getInitials(session.user?.name)}
                          </div>
                        )}
                      </div>
                      <span className="text-white font-medium">
                        {session.user?.name || "User"}
                      </span>
                    </div>
                  </Link>
                  <GhostButton
                    onClick={handleLogout}
                    variant="danger"
                    className="w-full hover:scale-105 active:scale-95 transition-transform duration-300"
                  >
                    Logout
                  </GhostButton>
                </>
              ) : (
                <>
                  <Link href="/signin" onClick={() => setMobileMenuOpen(false)}>
                    <GhostButton className="w-full hover:scale-105 active:scale-95 transition-transform duration-300">
                      Sign In
                    </GhostButton>
                  </Link>
                  <Link href="/signup" onClick={() => setMobileMenuOpen(false)}>
                    <GradientButton className="w-full hover:scale-105 active:scale-95 transition-transform duration-300">
                      Sign Up
                    </GradientButton>
                  </Link>
                </>
              )}
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
