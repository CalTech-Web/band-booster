"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Heart } from "lucide-react";
import { SITE, NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 40);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-lg border-b border-gray-100"
            : "bg-white/95 backdrop-blur-sm"
        }`}
        aria-label="Main navigation"
      >
        <div className="mx-auto max-w-7xl flex items-center justify-between px-4 sm:px-6 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0" onClick={closeMobile}>
            <Image
              src="/images/logo.png"
              alt={SITE.name}
              width={48}
              height={48}
              className="h-10 w-10 sm:h-12 sm:w-12 rounded-full"
              priority
            />
            <div className="hidden sm:block">
              <span className="block text-sm font-bold text-heading leading-tight">
                Groveport Madison
              </span>
              <span className="block text-xs font-semibold text-primary uppercase tracking-wider">
                Band Boosters
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-semibold uppercase tracking-wider rounded-lg transition-colors ${
                    isActive
                      ? "text-primary bg-primary/5"
                      : "text-dark hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-primary rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop Donate CTA */}
          <div className="hidden md:block">
            <a
              href={SITE.donateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-bold uppercase tracking-wider text-white hover:bg-primary-dark hover:scale-105 hover:shadow-lg transition-all duration-300 shadow-md"
            >
              <Heart className="h-4 w-4 icon-hover" />
              Donate
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2 text-dark hover:text-primary hover:bg-primary/5 md:hidden transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="border-t border-gray-100 bg-white md:hidden">
            <div className="space-y-1 px-4 pb-6 pt-4">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block py-3 text-base font-bold uppercase tracking-wider transition-colors rounded-lg px-3 ${
                      isActive
                        ? "text-primary bg-primary/5"
                        : "text-dark hover:text-primary hover:bg-primary/5"
                    }`}
                    onClick={closeMobile}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="border-t border-gray-100 pt-4 mt-2">
                <a
                  href={SITE.donateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all"
                  onClick={closeMobile}
                >
                  <Heart className="h-4 w-4" />
                  Donate
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
