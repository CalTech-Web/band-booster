interface WaveDividerProps {
  fillColor: string;
  className?: string;
  variant?: "wave" | "curve";
}

export default function WaveDivider({
  fillColor,
  className = "",
  variant = "wave",
}: WaveDividerProps) {
  const path =
    variant === "wave"
      ? "M0,32 C360,64 720,0 1080,32 C1260,48 1380,24 1440,16 L1440,0 L0,0 Z"
      : "M0,24 Q720,56 1440,24 L1440,0 L0,0 Z";

  return (
    <div className={`relative -mt-px leading-[0] ${className}`} aria-hidden="true">
      <svg viewBox="0 0 1440 48" preserveAspectRatio="none" className="w-full h-6 sm:h-10 md:h-12">
        <path d={path} fill={fillColor} />
      </svg>
    </div>
  );
}
