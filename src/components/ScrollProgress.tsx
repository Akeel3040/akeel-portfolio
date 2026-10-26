import React, { useState, useEffect } from "react";

export const ScrollProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Hairline Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-[60] pointer-events-none bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-[#9FC4D0] via-[#C9A96A] to-[#E1C48B] transition-all duration-75"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Subtle Right Side Progress Ruler (Desktop) */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-4 pointer-events-none text-[9px] font-mono tracking-widest text-slate-400">
        <div className="writing-vertical text-[#9FC4D0] uppercase rotate-180">
          INDEX
        </div>
        <div className="w-[1px] h-24 bg-white/10 relative overflow-hidden">
          <div
            className="w-full bg-[#C9A96A] transition-all duration-100"
            style={{ height: `${scrollProgress}%` }}
          />
        </div>
        <span className="text-white text-[10px]">
          {Math.round(scrollProgress)}%
        </span>
      </div>
    </>
  );
};
