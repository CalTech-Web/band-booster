import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-dark text-white/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 md:py-16">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo.png"
                alt={SITE.name}
                width={44}
                height={44}
                className="h-11 w-11 rounded-full"
              />
              <div>
                <span className="block text-sm font-bold text-white leading-tight">
                  Groveport Madison
                </span>
                <span className="block text-xs font-semibold text-primary-light uppercase tracking-wider">
                  Band Boosters
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/50 max-w-xs">
              {SITE.description}
            </p>
            {/* Social */}
            <div className="mt-5 flex gap-3">
              <a
                href={SITE.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/60 hover:bg-primary hover:text-white transition-all duration-200"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href={SITE.donateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Donate
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">
              Support the Band
            </h3>
            <p className="text-sm text-white/50 leading-relaxed mb-4">
              Your donations help fund musical instruments, sheet music, uniforms,
              competitions, scholarships, and more.
            </p>
            <a
              href={SITE.donateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-white hover:bg-primary-dark transition-colors"
            >
              Make a Donation
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-[11px] text-white/40">{SITE.copyright}</span>
          <span className="text-[11px] text-white/40">
            Built by{" "}
            <a
              href="https://caltechweb.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors"
            >
              CalTech Web
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
