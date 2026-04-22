"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/angeny-logo.png"
            
            alt="Angeny Solutions Logo"
            className="h-15 w-auto object-contain transition-transform hover:scale-105"
          />
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-6 text-sm">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors ${
                  active
                    ? "text-brand-yellow"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <Link
            href="/quote"
            className="rounded-md bg-brand-blue px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 transition-colors"
          >
            Request a Quote
          </Link>
        </div>
      </nav>
    </header>
  );
}