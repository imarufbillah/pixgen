import Link from "next/link";
import { Sparkles } from "lucide-react";
import { FaXTwitter, FaInstagram, FaGithub, FaDiscord } from "react-icons/fa6";

export default function Footer() {
  const socialLinks = [
    { icon: FaXTwitter, href: "https://twitter.com/pixgen", label: "Twitter" },
    {
      icon: FaInstagram,
      href: "https://instagram.com/pixgen",
      label: "Instagram",
    },
    { icon: FaGithub, href: "https://github.com/pixgen", label: "GitHub" },
    { icon: FaDiscord, href: "https://discord.gg/pixgen", label: "Discord" },
  ];

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/photos", label: "All Photos" },
    { href: "/profile", label: "Profile" },
    { href: "/about", label: "About" },
    { href: "/privacy", label: "Privacy Policy" },
  ];

  return (
    <footer
      className="w-full bg-[#0f1318] border-t border-white/10 mt-auto"
      role="contentinfo"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Column 1: Logo & Social */}
          <div className="flex flex-col gap-6">
            <Link
              href="/"
              className="flex items-center gap-2 group"
              aria-label="PixGen home"
            >
              <Sparkles
                className="text-violet-400 group-hover:text-cyan-400 transition-colors duration-300"
                size={24}
                aria-hidden="true"
              />
              <span className="text-xl md:text-2xl font-bold font-syne">
                <span className="text-white">Pix</span>
                <span className="bg-linear-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">
                  Gen
                </span>
              </span>
            </Link>

            <p className="text-slate-400 text-sm italic">
              &quot;Where imagination becomes reality.&quot;
            </p>

            <nav
              className="flex items-center gap-3 flex-wrap"
              aria-label="Social media links"
            >
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={`Follow us on ${social.label}`}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="w-10 h-10 rounded-full bg-[#141921] border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-violet-500 hover:shadow-lg hover:shadow-violet-500/30 transition-all duration-300 hover:scale-110 active:scale-95 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <social.icon className="text-lg" />
                </a>
              ))}
            </nav>
          </div>

          {/* Column 2: Navigation Links */}
          <nav
            className="flex flex-col gap-4"
            aria-labelledby="footer-nav-heading"
          >
            <h3
              id="footer-nav-heading"
              className="text-white font-bold text-lg font-syne"
            >
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link, index) => (
                <li
                  key={index}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-all duration-300 text-sm hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 3: About */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold text-lg font-syne">
              About PixGen
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              PixGen is a curated gallery of stunning AI-generated artwork.
              Explore thousands of images created by cutting-edge AI models like
              Stable Diffusion, Midjourney, and DALL-E, discover new styles, and
              get inspired by the intersection of technology and creativity.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/5">
          <p className="text-center text-slate-500 text-sm">
            © {new Date().getFullYear()} PixGen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
