import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center bg-mesh-cream">
      <FadeIn className="flex flex-col items-center">
        <h1 className="font-serif text-6xl md:text-8xl font-bold text-primary mb-4 animate-float">
          404
        </h1>
        <h2 className="text-xl md:text-2xl font-bold text-heading mb-4">
          Page Not Found
        </h2>
        <p className="text-text mb-8 max-w-md">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="btn-shimmer inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-bold uppercase tracking-wider text-white hover:bg-primary-dark hover:scale-105 transition-all duration-300 shadow-lg"
        >
          Go Home
        </Link>
      </FadeIn>
    </section>
  );
}
