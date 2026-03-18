import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Heart, Users, Music, Trophy, ArrowRight } from "lucide-react";
import { SITE } from "@/lib/constants";
import FadeIn from "@/components/FadeIn";
import HeroDecor from "@/components/HeroDecor";
import WaveDivider from "@/components/WaveDivider";

export const metadata: Metadata = {
  description: SITE.description,
  openGraph: {
    title: "Groveport Madison Band Boosters | Supporting GM Bands",
    description: SITE.description,
    url: SITE.url,
  },
};

const marqueeItems = [
  "Instruments",
  "Competitions",
  "Scholarships",
  "Uniforms",
  "Sheet Music",
  "Transportation",
  "Awards Night",
  "Support Staff",
  "Insurance",
  "Band Programs",
];

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-dark">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-banner.png"
            alt="Groveport Madison Band Boosters banner"
            fill
            className="object-cover opacity-30"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/80 to-dark" />
        </div>
        <HeroDecor />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 py-24 md:py-36 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-primary-light">
              501(c)(3) Nonprofit Organization
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight mb-6">
            Groveport Madison
            <br />
            <span className="text-primary-light">Band Boosters</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg md:text-xl text-white/60 mb-10 leading-relaxed">
            An independent nonprofit entity supporting the Groveport Madison
            Bands. Providing moral and financial support to students who
            participate in the band programs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={SITE.donateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white hover:bg-primary-dark hover:scale-105 hover:shadow-xl shadow-lg transition-all duration-300"
            >
              <Heart className="h-4 w-4" />
              Donate Now
            </a>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/20 px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white hover:bg-white/10 transition-all duration-300"
            >
              Learn More
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== SCROLLING MARQUEE ===== */}
      <div className="bg-dark py-3.5 overflow-hidden border-t border-white/5">
        <div className="animate-marquee flex whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="flex items-center mx-6">
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-white/25">
                {item}
              </span>
              <span className="ml-6 h-1 w-1 rounded-full bg-primary/40" />
            </span>
          ))}
        </div>
      </div>

      <WaveDivider fillColor="#FAFAF8" />

      {/* ===== BENTO SUPPORT GRID ===== */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <FadeIn className="mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
              How We Help
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-heading tracking-tight">
              Supporting Our <span className="text-primary">Band Students</span>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4">
            {/* Card 1: Instruments — Hero Card */}
            <FadeIn className="md:col-span-2 md:row-span-2" delay={1}>
              <div className="group relative h-full min-h-[280px] rounded-3xl bg-gradient-to-br from-primary via-primary to-primary-dark p-8 md:p-10 text-white overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/25">
                <Music className="absolute -bottom-6 -right-6 h-44 w-44 text-white/[0.06] group-hover:text-white/[0.12] group-hover:rotate-6 transition-all duration-700 ease-out" />
                <span className="inline-flex items-center rounded-full bg-white/15 backdrop-blur-sm px-3 py-1 text-[11px] font-bold uppercase tracking-wider mb-6">
                  01
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-bold mb-3 relative z-10 leading-snug">
                  Musical Instruments & Equipment
                </h3>
                <p className="text-white/65 leading-relaxed text-base md:text-lg relative z-10 max-w-sm">
                  Funding instruments, sheet music, and equipment so every
                  student can participate in the band program.
                </p>
              </div>
            </FadeIn>

            {/* Card 2: Competitions */}
            <FadeIn className="md:col-span-2" delay={2}>
              <div className="group relative h-full min-h-[200px] rounded-3xl bg-gradient-to-br from-accent to-accent-light p-7 md:p-8 text-white overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-accent/25">
                <Trophy className="absolute -bottom-4 -right-4 h-28 w-28 text-white/[0.06] group-hover:text-white/[0.12] group-hover:rotate-6 transition-all duration-700 ease-out" />
                <span className="inline-flex items-center rounded-full bg-white/15 backdrop-blur-sm px-3 py-1 text-[11px] font-bold uppercase tracking-wider mb-4">
                  02
                </span>
                <h3 className="font-serif text-xl md:text-2xl font-bold mb-2 relative z-10">
                  Competitions & Events
                </h3>
                <p className="text-white/60 leading-relaxed relative z-10">
                  Supporting travel, registration, and logistics for band
                  competitions and performances.
                </p>
              </div>
            </FadeIn>

            {/* Card 3: Scholarships */}
            <FadeIn delay={3}>
              <div className="group relative h-full min-h-[200px] rounded-3xl bg-gradient-to-br from-gold to-amber-600 p-7 text-white overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-gold/25">
                <Users className="absolute -bottom-3 -right-3 h-24 w-24 text-white/[0.06] group-hover:text-white/[0.12] group-hover:rotate-6 transition-all duration-700 ease-out" />
                <span className="inline-flex items-center rounded-full bg-white/15 backdrop-blur-sm px-3 py-1 text-[11px] font-bold uppercase tracking-wider mb-4">
                  03
                </span>
                <h3 className="font-serif text-lg font-bold mb-2 relative z-10">
                  Scholarships & Awards
                </h3>
                <p className="text-white/60 leading-relaxed text-sm relative z-10">
                  Recognizing outstanding students through scholarships and the
                  Annual Band Awards Night.
                </p>
              </div>
            </FadeIn>

            {/* Card 4: Uniforms & Support */}
            <FadeIn delay={4}>
              <div className="group relative h-full min-h-[200px] rounded-3xl bg-gradient-to-br from-dark to-dark-light p-7 text-white overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-dark/40">
                <Heart className="absolute -bottom-3 -right-3 h-24 w-24 text-white/[0.06] group-hover:text-white/[0.12] group-hover:rotate-6 transition-all duration-700 ease-out" />
                <span className="inline-flex items-center rounded-full bg-white/15 backdrop-blur-sm px-3 py-1 text-[11px] font-bold uppercase tracking-wider mb-4">
                  04
                </span>
                <h3 className="font-serif text-lg font-bold mb-2 relative z-10">
                  Uniforms & Support
                </h3>
                <p className="text-white/60 leading-relaxed text-sm relative z-10">
                  Providing uniforms, support staff, transportation, and
                  insurance for band activities.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ===== ABOUT — EDITORIAL ===== */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-cream/80 to-transparent pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <FadeIn className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">
                About Us
              </span>
              <div className="relative mb-8">
                <span
                  className="absolute -top-10 -left-4 text-[120px] leading-none font-serif text-primary/[0.08] select-none pointer-events-none"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-heading tracking-tight leading-snug">
                  Providing moral and financial support to students in band
                  programs
                </h2>
              </div>
              <div className="h-px bg-gradient-to-r from-primary via-gold/60 to-transparent mb-8" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <p className="text-text leading-relaxed">
                  The Groveport Madison Band Boosters is a 501(c)(3) nonprofit
                  organization established to provide both moral and financial
                  support to the students who participate in the band programs.
                </p>
                <p className="text-text leading-relaxed">
                  We welcome all parents and guardians of band students to join
                  us. Our members conduct monthly board meetings and general
                  meetings as needed, with governing documents available upon
                  request.
                </p>
              </div>
              <Link
                href="/about"
                className="group/link inline-flex items-center gap-2 mt-8 text-sm font-bold text-primary hover:text-primary-dark transition-colors"
              >
                Read more about us
                <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </FadeIn>
            <FadeIn delay={2} className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-primary/15 via-gold/10 to-accent/15 blur-sm" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/hero-banner.png"
                    alt="Groveport Madison Band Boosters"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ===== IMPACT STATS + CTA ===== */}
      <section className="relative py-20 md:py-28 bg-dark overflow-hidden">
        <HeroDecor />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
          {/* Stats Row */}
          <FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 mb-16 md:mb-20 pb-16 md:pb-20 border-b border-white/[0.06]">
              {[
                { value: "4+", label: "Support Areas" },
                { value: "Annual", label: "Awards Night" },
                { value: "100%", label: "Volunteer Run" },
                { value: "501(c)(3)", label: "Tax Exempt" },
              ].map((stat, i) => (
                <div key={stat.label} className="text-center relative">
                  {i > 0 && (
                    <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 h-12 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
                  )}
                  <div className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
                    {stat.value}
                  </div>
                  <p className="text-white/35 text-[11px] font-bold uppercase tracking-[0.2em]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* CTA */}
          <FadeIn delay={2} className="text-center">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-5">
              Help Us{" "}
              <span className="text-primary-light">Support the Band</span>
            </h2>
            <p className="text-white/45 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Your generous donations directly fund instruments, uniforms,
              competitions, scholarships, and everything our band students need
              to excel.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={SITE.donateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shimmer inline-flex items-center gap-2 rounded-full bg-primary px-10 py-4 text-sm font-bold uppercase tracking-wider text-white hover:bg-primary-light hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/25"
              >
                <Heart className="h-4 w-4" />
                Donate Now
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-10 py-4 text-sm font-bold uppercase tracking-wider text-white/60 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300"
              >
                Get in Touch
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
