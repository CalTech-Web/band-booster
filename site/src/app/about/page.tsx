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
} from "lucide-react";
import { SITE } from "@/lib/constants";

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
      <section className="bg-dark py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
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

      {/* Mission */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="rounded-2xl bg-white p-8 md:p-12 shadow-sm border border-gray-100">
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
              Our Mission
            </span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-heading mb-6">
              Supporting Band Students
            </h2>
            <p className="text-text text-lg leading-relaxed mb-4">
              The Groveport Madison Band Boosters is a{" "}
              <strong className="text-heading">501(c)(3) nonprofit organization</strong>,
              established to provide both moral and financial support to the
              students who participate in the band programs.
            </p>
            <p className="text-text leading-relaxed mb-4">
              We welcome all parents and guardians of band students. Our members
              conduct monthly board meetings and general meetings as needed, with
              governing documents (Constitution and By-laws) available upon
              request.
            </p>
            <p className="text-text leading-relaxed">
              We provide encouragement and support at concerts, competitions, and
              other performances by the bands representing Groveport Madison
              Schools.
            </p>
          </div>
        </div>
      </section>

      {/* What We Fund */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-14">
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
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {supportAreas.map((area) => {
              const Icon = area.icon;
              return (
                <span
                  key={area.label}
                  className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 ${area.pastel}`}
                >
                  <Icon className="h-4 w-4 icon-hover" />
                  {area.label}
                </span>
              );
            })}
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
            Get Involved
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-heading tracking-tight mb-6">
            Join Us in Making a Difference
          </h2>
          <p className="text-text text-lg leading-relaxed mb-8 max-w-xl mx-auto">
            Whether through volunteering your time, attending our meetings, or
            making a donation, every contribution helps our band students
            succeed.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={SITE.donateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white hover:bg-primary-dark hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <Heart className="h-4 w-4" />
              Donate Now
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border-2 border-primary/20 px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-primary hover:bg-primary/5 transition-all duration-300"
            >
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
