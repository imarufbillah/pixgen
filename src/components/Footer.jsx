import Link from "next/link";
import { Sparkles } from "lucide-react";
import { FaXTwitter, FaInstagram, FaGithub, FaDiscord } from "react-icons/fa6";

export default function Footer() {
  const socialLinks = [
    { icon: FaXTwitter, href: "#", label: "Twitter" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaGithub, href: "#", label: "GitHub" },
    { icon: FaDiscord, href: "#", label: "Discord" }
  ];

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/photos", label: "All Photos" },
    { href: "/profile", label: "Profile" },
    { href: "#", label: "About" },
    { href: "#", label: "Privacy Policy" }
  ];

  return (
    <footer className="w-full bg-[#0f1318] border-t border-white/10 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Column 1: Logo & Social */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2 group">
              <Sparkles className="text-violet-400 group-hover:text-cyan-400 transition-colors duration-300" size={24} />
              <span className="text-xl md:text-2xl font-bold font-[family-name:var(--font-syne)]">
                <span className="text-white">Pix</span>
                <span className="bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">Gen</span>
              </span>
            </Link>
            
            <p className="text-slate-400 text-sm italic">
              "Where imagination becomes reality."
            </p>
            
            <div className="flex items-center gap-3 flex-wrap">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-[#141921] border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-violet-500 hover:shadow-lg hover:shadow-violet-500/30 transition-all duration-300"
                >
                  <social.icon className="text-lg" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold text-lg font-[family-name:var(--font-syne)]">
              Quick Links
            </h3>
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-slate-400 hover:text-white transition-colors duration-300 text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: About */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold text-lg font-[family-name:var(--font-syne)]">
              About PixGen
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              PixGen is a curated gallery of stunning AI-generated artwork. 
              Explore thousands of images created by cutting-edge AI models, 
              discover new styles, and get inspired by the intersection of 
              technology and creativity.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/5">
          <p className="text-center text-slate-500 text-sm">
            © 2025 PixGen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
