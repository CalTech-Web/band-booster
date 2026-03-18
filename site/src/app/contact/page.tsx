import type { Metadata } from "next";
import HeroDecor from "@/components/HeroDecor";
import WaveDivider from "@/components/WaveDivider";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the Groveport Madison Band Boosters. Send us a message about volunteering, donations, or the band program.",
  openGraph: {
    title: "Contact Us | GM Band Boosters",
    description:
      "Have a question or want to get involved? Reach out to the Groveport Madison Band Boosters.",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-dark py-20 md:py-28 overflow-hidden">
        <HeroDecor />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-primary-light mb-3 block">
            Get in Touch
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
            Contact Us
          </h1>
          <div className="h-1 w-16 rounded-full bg-primary mx-auto mb-5" />
          <p className="mx-auto max-w-xl text-lg text-white/60 leading-relaxed">
            Have a question or want to get involved? We would love to hear from
            you.
          </p>
        </div>
      </section>

      <WaveDivider fillColor="#FAFAF8" />

      <ContactForm />
    </>
  );
}
