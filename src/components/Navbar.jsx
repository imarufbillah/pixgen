"use client";

import Link from "next/link";
import { Sparkles, Menu, X } from "lucide-react";
import { useState } from "react";
import GradientButton from "./GradientButton";
import GhostButton from "./GhostButton";

export default function Navbar({ isLoggedIn = false }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/photos", label: "All Photos" },
    { href: "/profile", label: "Profile" }
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#080b10]/80 backdrop-blur-xl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <Sparkles className="text-violet-400 group-hover:text-cyan-400 transition-colors duration-300" size={20} />
              <span className="text-lg md:text-xl font-bold font-[family-name:var(--font-syne)]">
                <span className="text-white">Pix</span>
                <span className="bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">Gen</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-sm lg:text-base text-slate-300 hover:text-white transition-colors duration-300 group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-600 to-cyan-500 group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center gap-3 lg:gap-4">
              {isLoggedIn ? (
                <>
                  <Link href="/profile" className="flex items-center gap-2 lg:gap-3 group">
                    <span className="text-xs lg:text-sm text-slate-400 group-hover:text-white transition-colors">
                      John Doe
                    </span>
                    <div className="w-8 h-8 lg:w-9 lg:h-9 rounded-full bg-gradient-to-br from-violet-600 to-cyan-500 p-0.5">
                      <div className="w-full h-full rounded-full bg-[#080b10] flex items-center justify-center text-white text-xs lg:text-sm font-semibold">
                        JD
                      </div>
                    </div>
                  </Link>
                  <GhostButton variant="danger" className="text-xs lg:text-sm px-3 lg:px-4 py-1.5 lg:py-2">
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
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#080b10] md:hidden">
          <div className="flex flex-col items-center justify-center h-full gap-8 px-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-bold text-white hover:text-violet-400 transition-colors font-[family-name:var(--font-syne)]"
              >
                {link.label}
              </Link>
            ))}
            
            <div className="flex flex-col gap-4 w-full max-w-xs mt-8">
              {isLoggedIn ? (
                <>
                  <Link href="/profile" onClick={() => setMobileMenuOpen(false)}>
                    <div className="flex items-center justify-center gap-3 p-4 bg-[#0f1318] rounded-xl border border-white/10">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-600 to-cyan-500 p-0.5">
                        <div className="w-full h-full rounded-full bg-[#080b10] flex items-center justify-center text-white font-semibold">
                          JD
                        </div>
                      </div>
                      <span className="text-white font-medium">John Doe</span>
                    </div>
                  </Link>
                  <GhostButton variant="danger" className="w-full">
                    Logout
                  </GhostButton>
                </>
              ) : (
                <>
                  <Link href="/signin" onClick={() => setMobileMenuOpen(false)}>
                    <GhostButton className="w-full">
                      Sign In
                    </GhostButton>
                  </Link>
                  <Link href="/signup" onClick={() => setMobileMenuOpen(false)}>
                    <GradientButton className="w-full">
                      Sign Up
                    </GradientButton>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
