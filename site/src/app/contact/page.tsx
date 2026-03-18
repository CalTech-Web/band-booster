"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle, Mail, Music } from "lucide-react";
import { SITE } from "@/lib/constants";
import FadeIn from "@/components/FadeIn";
import HeroDecor from "@/components/HeroDecor";
import WaveDivider from "@/components/WaveDivider";

type FormStatus = "idle" | "sending" | "sent" | "error";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://forms.caltechweb.com/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          site: SITE.domain,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          source: "contact-page",
        }),
      });

      if (res.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full rounded-xl border border-gray-200 bg-cream/50 px-4 py-3 text-sm text-heading placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:shadow-[0_0_0_3px_rgba(183,28,28,0.08),0_2px_8px_rgba(183,28,28,0.04)] focus:bg-white transition-all duration-300 outline-none";

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

      {/* Contact Split Layout */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <FadeIn>
            <div className="rounded-3xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-[380px_1fr]">
              {/* Left Panel */}
              <div className="relative bg-gradient-to-br from-dark via-dark to-dark-light p-8 md:p-10 lg:p-12 text-white overflow-hidden flex flex-col justify-between">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />
                <div className="relative z-10">
                  <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary-light/70 mb-3 block">
                    Contact
                  </span>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold leading-snug mb-6">
                    We would love to hear from you
                  </h2>
                  <p className="text-white/50 leading-relaxed mb-8">
                    Whether you have questions about the band program, want to
                    volunteer, or are interested in making a donation, reach out
                    and we will get back to you.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.08] text-primary-light shrink-0">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-wider text-white/35 mb-0.5">
                          Email
                        </p>
                        <p className="text-sm text-white/70">
                          Use the form to send us a message
                        </p>
                      </div>
                    </div>

                    <div className="h-px bg-gradient-to-r from-white/10 to-transparent" />

                    <a
                      href={SITE.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 group/social"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.08] text-primary-light shrink-0 group-hover/social:bg-primary/20 transition-colors duration-300">
                        <svg
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-wider text-white/35 mb-0.5">
                          Social
                        </p>
                        <p className="text-sm text-white/70 group-hover/social:text-white transition-colors duration-300">
                          Follow us on Facebook
                        </p>
                      </div>
                    </a>
                  </div>
                </div>

                <Music className="relative z-10 h-20 w-20 text-white/[0.06] mt-10 lg:mt-0" />
              </div>

              {/* Right Panel — Form */}
              <div className="bg-white p-8 md:p-10 lg:p-12">
                <div className="flex items-center gap-3 mb-8">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Send className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl font-bold text-heading">
                    Send Us a Message
                  </h2>
                </div>

                {status === "sent" ? (
                  <div className="flex flex-col items-center py-12 text-center">
                    <CheckCircle className="h-14 w-14 text-green-500 mb-4" />
                    <h3 className="text-xl font-bold text-heading mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-text">
                      Thank you for reaching out. We will get back to you soon.
                    </p>
                    <button
                      type="button"
                      className="mt-6 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
                      onClick={() => setStatus("idle")}
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-heading mb-1.5"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-heading mb-1.5"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="you@example.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold text-heading mb-1.5"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className={`${inputClass} resize-none`}
                        placeholder="How can we help?"
                      />
                    </div>

                    {status === "error" && (
                      <div className="flex items-center gap-2 rounded-lg bg-red-50 border border-red-100 px-4 py-3 text-sm text-red-700">
                        <AlertCircle className="h-4 w-4 shrink-0" />
                        Something went wrong. Please try again.
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="btn-shimmer inline-flex items-center justify-center gap-2 w-full rounded-xl bg-primary px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      {status === "sending" ? (
                        <>
                          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
