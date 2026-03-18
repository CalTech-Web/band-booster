import Image from "next/image";
import Link from "next/link";
import { Heart, Users, Music, Trophy, ArrowRight } from "lucide-react";
import { SITE } from "@/lib/constants";
import FadeIn from "@/components/FadeIn";
import HeroDecor from "@/components/HeroDecor";
import WaveDivider from "@/components/WaveDivider";

const highlights = [
  {
    icon: Music,
    title: "Musical Instruments & Equipment",
    description:
      "Funding instruments, sheet music, and equipment so every student can participate.",
    color: "bg-red-50 text-primary",
  },
  {
    icon: Trophy,
    title: "Competitions & Events",
    description:
      "Supporting travel, registration, and logistics for band competitions and performances.",
    color: "bg-blue-50 text-accent",
  },
  {
    icon: Users,
    title: "Scholarships & Awards",
    description:
      "Recognizing outstanding students through scholarships and the Annual Band Awards Night.",
    color: "bg-amber-50 text-gold",
  },
  {
    icon: Heart,
    title: "Uniforms & Support",
    description:
      "Providing uniforms, additional support staff, transportation, and insurance.",
    color: "bg-green-50 text-emerald-700",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
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

      <WaveDivider fillColor="#FAFAF8" />

      {/* What We Support */}
      <section className="py-20 md:py-28 bg-mesh-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <FadeIn className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
              How We Help
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-heading tracking-tight mb-4">
              Supporting Our Band Students
            </h2>
            <div className="h-1 w-16 rounded-full bg-primary mx-auto mb-5" />
            <p className="mx-auto max-w-xl text-text leading-relaxed">
              We organize various fundraising efforts annually to ensure every
              band student has the resources they need to succeed.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <FadeIn key={item.title} delay={index + 1}>
                  <div className="group relative rounded-2xl bg-white p-6 shadow-sm hover:shadow-xl glass-hover border border-gray-100 hover:border-primary/20 hover:-translate-y-1 transition-all duration-300">
                    <div
                      className={`inline-flex items-center justify-center h-12 w-12 rounded-xl ${item.color} mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold text-heading mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-text leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <WaveDivider fillColor="white" />

      {/* About Preview */}
      <section className="py-20 md:py-28 bg-mesh-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
                About Us
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-heading tracking-tight mb-6">
                Who We Are
              </h2>
              <p className="text-text leading-relaxed mb-4">
                The Groveport Madison Band Boosters is a 501(c)(3) nonprofit
                organization established to provide both moral and financial
                support to the students who participate in the band programs.
              </p>
              <p className="text-text leading-relaxed mb-6">
                We welcome all parents and guardians of band students to join us.
                Our members conduct monthly board meetings and general meetings as
                needed, with governing documents available upon request.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-dark transition-colors"
              >
                Read more about us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </FadeIn>
            <FadeIn delay={2}>
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/hero-banner.png"
                    alt="Groveport Madison Band Boosters"
                    width={600}
                    height={200}
                    className="w-full h-auto"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-2xl bg-primary/10 -z-10 animate-pulse-glow" />
                <div className="absolute -top-4 -left-4 h-16 w-16 rounded-2xl bg-accent/10 -z-10 animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <WaveDivider fillColor="#B71C1C" />

      {/* CTA Section */}
      <section className="relative py-16 md:py-20 bg-primary overflow-hidden">
        <HeroDecor />
        <FadeIn className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            Help Us Support the Band
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
            Your generous donations directly fund instruments, uniforms,
            competitions, scholarships, and everything our band students need to
            excel.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={SITE.donateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-primary hover:bg-cream hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <Heart className="h-4 w-4" />
              Donate Now
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white hover:bg-white/10 transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
