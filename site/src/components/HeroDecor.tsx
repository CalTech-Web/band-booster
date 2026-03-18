export default function HeroDecor() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Gradient glow orbs */}
      <div className="absolute top-1/4 left-[10%] w-64 h-64 rounded-full bg-primary/5 blur-3xl animate-pulse-glow" />
      <div
        className="absolute bottom-1/4 right-[10%] w-48 h-48 rounded-full bg-accent/5 blur-3xl animate-pulse-glow"
        style={{ animationDelay: "1.5s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-gold/5 blur-3xl animate-pulse-glow"
        style={{ animationDelay: "0.8s" }}
      />

      {/* Floating dots */}
      <div className="absolute top-[15%] right-[15%] w-3 h-3 rounded-full bg-primary/20 animate-float" />
      <div className="absolute top-[60%] left-[8%] w-2 h-2 rounded-full bg-gold/30 animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute top-[30%] left-[20%] w-4 h-4 rounded-full border border-white/10 animate-float-slow" style={{ animationDelay: "0.5s" }} />
      <div className="absolute bottom-[20%] right-[25%] w-3 h-3 rounded-full border border-primary/15 animate-float-slow" style={{ animationDelay: "2s" }} />

      {/* Musical note shapes */}
      <svg className="absolute top-[20%] right-[20%] w-8 h-8 text-white/[0.04] animate-float-slow" style={{ animationDelay: "1.2s" }} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
      </svg>
      <svg className="absolute bottom-[30%] left-[12%] w-6 h-6 text-white/[0.04] animate-float" style={{ animationDelay: "0.7s" }} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
      </svg>
    </div>
  );
}
