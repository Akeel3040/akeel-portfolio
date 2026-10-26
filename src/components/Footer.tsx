import React, { useState, useEffect } from "react";
import { ArrowUp, Terminal, Shield } from "lucide-react";
import { PERSONAL_INFO } from "../data";

export const Footer: React.FC = () => {
  const [istTime, setIstTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setIstTime(new Intl.DateTimeFormat([], options).format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full border-t border-white/[0.06] bg-[#050608] z-20 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-[11px] font-mono tracking-widest text-slate-400">
        {/* Left: Brand & Institution */}
        <div className="flex flex-col items-center md:items-start gap-1.5 text-center md:text-left">
          <div className="text-white font-serif tracking-[0.2em] text-sm">
            MD AKEEL
          </div>
          <div className="text-slate-400 text-[10px]">
            {PERSONAL_INFO.institution}
          </div>
          <div className="text-[#C9A96A] text-[10px]">
            {PERSONAL_INFO.university} · B.Tech CSE (AI & ML)
          </div>
        </div>

        {/* Center: Live IST Clock & Status */}
        <div className="flex flex-col items-center gap-1.5 text-center">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-slate-300">
              GREATER NOIDA (IST): {istTime}
            </span>
          </div>
          <div className="text-[10px] text-slate-400 flex items-center gap-1.5">
            <Shield className="w-3 h-3 text-[#9FC4D0]" />
            <span>NEURAL CORE OPERATIONAL · 60 FPS</span>
          </div>
        </div>

        {/* Right: Designed & Built By & Back to Top */}
        <div className="flex flex-col items-center md:items-end gap-3 text-center md:text-right">
          <div className="uppercase tracking-[0.25em] text-slate-400">
            DESIGNED & BUILT BY{" "}
            <span className="text-white font-serif tracking-normal text-xs">
              MD AKEEL
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 hover:border-[#C9A96A] bg-white/[0.03] text-slate-300 hover:text-[#C9A96A] transition-all duration-300 group"
            aria-label="Back to Top"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
