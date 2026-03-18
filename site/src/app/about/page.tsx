import type { Metadata } from "next";
import Link from "next/link";
import {
  Heart,
  Music,
  Trophy,
  Users,
  Bus,
  GraduationCap,
  Shield,
  PartyPopper,
  ArrowRight,
  CalendarDays,
} from "lucide-react";
import { SITE } from "@/lib/constants";
import FadeIn from "@/components/FadeIn";
import HeroDecor from "@/components/HeroDecor";
import WaveDivider from "@/components/WaveDivider";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about the Groveport Madison Band Boosters, a 501(c)(3) nonprofit providing moral and financial support to Groveport Madison band students.",
  openGraph: {
    title: "About Us | Groveport Madison Band Boosters",
    description:
      "A 501(c)(3) nonprofit organization supporting Groveport Madison band programs since establishment.",
  },
};

const supportAreas = [
  { icon: Music, label: "Musical Instruments & Equipment", pastel: "bg-red-50 text-red-600 border-red-100" },
  { icon: Music, label: "Sheet Music", pastel: "bg-blue-50 text-blue-600 border-blue-100" },
  { icon: Heart, label: "Uniforms", pastel: "bg-pink-50 text-pink-600 border-pink-100" },
  { icon: Trophy, label: "Band Competitions & Events", pastel: "bg-amber-50 text-amber-600 border-amber-100" },
  { icon: Users, label: "Additional Support Staff", pastel: "bg-green-50 text-green-600 border-green-100" },
  { icon: Bus, label: "Transportation", pastel: "bg-purple-50 text-purple-600 border-purple-100" },
  { icon: GraduationCap, label: "Scholarships", pastel: "bg-teal-50 text-teal-600 border-teal-100" },
  { icon: Trophy, label: "Awards", pastel: "bg-orange-50 text-orange-600 border-orange-100" },
  { icon: Shield, label: "Insurance", pastel: "bg-slate-50 text-slate-600 border-slate-100" },
  { icon: PartyPopper, label: "Annual Band Awards Night", pastel: "bg-rose-50 text-rose-600 border-rose-100" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-dark py-20 md:py-28 overflow-hidden">
        <HeroDecor />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-primary-light mb-3 block">
            Our Story
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
            About the Band Boosters
          </h1>
          <div className="h-1 w-16 rounded-full bg-primary mx-auto mb-5" />
          <p className="mx-auto max-w-2xl text-lg text-white/60 leading-relaxed">
            An independent nonprofit entity supporting the Groveport Madison
            Bands since our establishment.
          </p>
        </div>
      </section>

      <WaveDivider fillColor="#FAFAF8" />

      {/* Mission */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <FadeIn>
            <div className="rounded-3xl overflow-hidden shadow-xl grid grid-cols-1 md:grid-cols-[260px_1fr] lg:grid-cols-[300px_1fr]">
              {/* Left Panel */}
              <div className="bg-gradient-to-br from-primary via-primary to-primary-dark p-8 md:p-10 flex flex-col justify-between text-white relative overflow-hidden">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-white/50 mb-3 block">
                    About
                  </span>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold leading-snug">
                    Our Mission
                  </h2>
                </div>
                <Music className="h-24 w-24 text-white/[0.07] mt-8 md:mt-0" />
              </div>
              {/* Right Panel */}
              <div className="bg-white p-8 md:p-10 lg:p-12">
                <p className="text-heading text-lg font-semibold leading-relaxed mb-5">
                  The Groveport Madison Band Boosters is a 501(c)(3) nonprofit
                  organization, established to provide both moral and financial
                  support to the students who participate in the band programs.
                </p>
                <div className="h-px bg-gradient-to-r from-primary/20 to-transparent mb-5" />
                <p className="text-text leading-relaxed mb-4">
                  We welcome all parents and guardians of band students. Our
                  members conduct monthly board meetings and general meetings as
                  needed, with governing documents (Constitution and By-laws)
                  available upon request.
                </p>
                <p className="text-text leading-relaxed">
                  We provide encouragement and support at concerts, competitions,
                  and other performances by the bands representing Groveport
                  Madison Schools.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <WaveDivider fillColor="white" />

      {/* What We Fund */}
      <section className="py-20 md:py-28 bg-mesh-white bg-dot-grid">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <FadeIn className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
              Fundraising
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-heading tracking-tight mb-4">
              What We Support
            </h2>
            <div className="h-1 w-16 rounded-full bg-primary mx-auto mb-5" />
            <p className="mx-auto max-w-xl text-text leading-relaxed">
              The Band Boosters organize various fundraising efforts annually to
              support the following areas, along with other board-approved
              activities.
            </p>
          </FadeIn>

          <div className="flex flex-wrap justify-center gap-3">
            {supportAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <FadeIn key={area.label} delay={Math.min(index + 1, 9)} as="span" className="inline-flex">
                  <span
                    className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.03] ${area.pastel}`}
                  >
                    <Icon className="h-4 w-4 icon-hover" />
                    {area.label}
                  </span>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Get Involved */}
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
          <FadeIn className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-primary-light mb-3 block">
              Get Involved
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Join Us in Making a{" "}
              <span className="text-primary-light">Difference</span>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
            <FadeIn delay={1}>
              <div className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-sm p-7 h-full hover:border-primary/30 hover:bg-white/[0.07] transition-all duration-500">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-primary/15 text-primary-light mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white mb-2">
                  Volunteer Your Time
                </h3>
                <p className="text-white/50 leading-relaxed text-sm">
                  Help organize events, fundraisers, and support activities
                  that directly benefit our band students.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={2}>
              <div className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-sm p-7 h-full hover:border-accent-light/30 hover:bg-white/[0.07] transition-all duration-500">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-accent/15 text-accent-light mb-5 group-hover:scale-110 transition-transform duration-300">
                  <CalendarDays className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white mb-2">
                  Attend Meetings
                </h3>
                <p className="text-white/50 leading-relaxed text-sm">
                  Join our monthly board meetings and general meetings to stay
                  connected and make your voice heard.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={3}>
              <div className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-sm p-7 h-full hover:border-gold/30 hover:bg-white/[0.07] transition-all duration-500">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-gold/15 text-gold mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white mb-2">
                  Make a Donation
                </h3>
                <p className="text-white/50 leading-relaxed text-sm">
                  Every contribution directly supports instruments, uniforms,
                  scholarships, and more for our students.
                </p>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={4} className="text-center">
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
                Contact Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
