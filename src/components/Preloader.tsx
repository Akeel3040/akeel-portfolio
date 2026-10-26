import React, { useEffect, useState } from "react";

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Smooth progress increment
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsFadingOut(true);
            setTimeout(onComplete, 800);
          }, 300);
          return 100;
        }
        // Organic pacing
        const increment = Math.floor(Math.random() * 12) + 4;
        return Math.min(100, prev + increment);
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#07090B] transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isFadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      aria-label="Loading MD Akeel Portfolio"
      role="status"
    >
      <div className="flex flex-col items-center max-w-sm px-6 w-full text-center">
        {/* Subtle top indicator */}
        <div className="text-[10px] tracking-[0.35em] text-[#9FC4D0]/60 uppercase font-display mb-4">
          SYSTEM INITIALIZATION
        </div>

        {/* Minimal MD AKEEL Lettermark */}
        <h1 className="text-4xl md:text-5xl font-serif text-white tracking-[0.25em] font-light mb-3 select-none">
          MD AKEEL
        </h1>

        <p className="text-xs tracking-[0.2em] text-[#C9A96A] font-light uppercase mb-10">
          AI / ML Engineer & Full-Stack Developer
        </p>

        {/* Thin Gold Progress Line */}
        <div className="w-full h-[1.5px] bg-white/[0.08] relative overflow-hidden rounded-full mb-3">
          <div
            className="h-full bg-gradient-to-r from-[#9FC4D0] via-[#C9A96A] to-[#E1C48B] transition-all duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Numeric Counter */}
        <div className="flex justify-between w-full text-[10px] font-mono tracking-widest text-slate-500">
          <span>AKTU // 2026–27</span>
          <span className="text-[#9FC4D0]">{progress}%</span>
        </div>
      </div>
    </div>
  );
};
