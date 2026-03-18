"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "span";
  threshold?: number;
}

export default function FadeIn({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
  threshold = 0.1,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const delayClass = delay > 0 ? `fade-delay-${Math.min(delay, 9)}` : "";

  return (
    <Tag
      ref={ref}
      className={`${visible ? "fade-in-visible" : "fade-in-hidden"} ${delayClass} ${className}`}
    >
      {children}
    </Tag>
  );
}
