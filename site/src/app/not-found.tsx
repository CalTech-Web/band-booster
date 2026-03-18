import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="font-serif text-6xl md:text-8xl font-bold text-primary mb-4">
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
        className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-bold uppercase tracking-wider text-white hover:bg-primary-dark transition-all duration-300 shadow-md"
      >
        Go Home
      </Link>
    </section>
  );
}
