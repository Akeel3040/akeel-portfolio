import React from "react";
import { PERSONAL_INFO } from "../data";
import { ArrowDown, Volume2, Sparkles, Terminal } from "lucide-react";

interface HeroProps {
  onPlayVoice: () => void;
  isVoicePlaying: boolean;
}

export const Hero: React.FC<HeroProps> = ({ onPlayVoice, isVoicePlaying }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between items-center px-6 md:px-12 pt-32 pb-12 z-20 overflow-hidden"
    >
      {/* Top Editorial Metadata Banner */}
      <div className="w-full max-w-7xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/[0.06] pb-4">
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-[#9FC4D0] animate-pulse" />
          <span className="text-[10px] font-mono tracking-[0.25em] text-[#9FC4D0] uppercase">
            01 // COGNITIVE ARCHITECTURES
          </span>
        </div>
        <div className="text-[10px] font-mono tracking-[0.2em] text-slate-500 uppercase flex items-center gap-3">
          <span>{PERSONAL_INFO.institution}</span>
          <span className="hidden md:inline text-white/20">|</span>
          <span className="hidden md:inline text-[#C9A96A]/80">AKTU 2026–27</span>
        </div>
      </div>

      {/* Main Center Typography (Overlaid on 3D Neural Core) */}
      <div className="my-auto max-w-5xl text-center flex flex-col items-center pointer-events-none select-none py-12">
        {/* Sub-label */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-[#07090B]/60 backdrop-blur-md mb-6 pointer-events-auto">
          <Terminal className="w-3 h-3 text-[#C9A96A]" />
          <span className="text-[10px] md:text-[11px] font-mono tracking-[0.3em] uppercase text-slate-300">
            {PERSONAL_INFO.title}
          </span>
        </div>

        {/* Grand Serif Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-white tracking-tight leading-[1.05] font-light max-w-4xl drop-shadow-[0_10px_35px_rgba(0,0,0,0.8)]">
          Building intelligence,{" "}
          <span className="serif-italic text-[#9FC4D0]">one model</span> at a time.
        </h1>

        {/* Minimal Editorial Excerpt */}
        <p className="mt-6 text-sm md:text-base text-slate-400 font-sans max-w-xl font-light leading-relaxed tracking-wide">
          Crafting production-grade machine learning pipelines and scalable full-stack
          systems at the intersection of mathematical rigor and real-world deployment.
        </p>

        {/* Interactive CTA Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 pointer-events-auto">
          {/* Primary CTA */}
          <a
            href="#work"
            className="px-7 py-3 rounded-full text-xs font-display tracking-[0.2em] uppercase font-medium bg-gradient-to-r from-[#C9A96A] via-[#E1C48B] to-[#C9A96A] text-[#07090B] hover:shadow-[0_0_30px_rgba(201,169,106,0.35)] transition-all duration-300 hover:scale-[1.02] active:scale-95"
          >
            EXPLORE THE WORK
          </a>

          {/* AI Voice Guide Trigger */}
          <button
            onClick={onPlayVoice}
            className={`group px-6 py-3 rounded-full text-xs font-display tracking-[0.2em] uppercase font-medium border transition-all duration-300 flex items-center gap-2.5 backdrop-blur-md ${
              isVoicePlaying
                ? "border-[#C9A96A] bg-[#C9A96A]/15 text-[#C9A96A]"
                : "border-white/[0.12] bg-white/[0.03] text-slate-200 hover:border-[#9FC4D0]/50 hover:text-[#9FC4D0]"
            }`}
          >
            <Volume2 className={`w-3.5 h-3.5 ${isVoicePlaying ? "animate-bounce" : "group-hover:scale-110"}`} />
            <span>{isVoicePlaying ? "STOP STORY" : "HEAR MY STORY"}</span>
            <span className="text-[9px] font-mono opacity-60">25S</span>
          </button>
        </div>
      </div>

      {/* Bottom Footer Bar with "Scroll to reveal" */}
      <div className="w-full max-w-7xl flex items-end justify-between border-t border-white/[0.06] pt-4 text-[10px] font-mono tracking-widest text-slate-500">
        <div className="hidden sm:flex items-center gap-2">
          <Sparkles className="w-3 h-3 text-[#C9A96A]" />
          <span>NEURAL ARCHITECTURE · THREE.JS ACCELERATED</span>
        </div>

        {/* Animated Scroll Cue */}
        <a
          href="#about"
          className="mx-auto sm:mx-0 flex flex-col items-center gap-2 text-slate-400 hover:text-white transition-colors duration-300 group"
          aria-label="Scroll to About section"
        >
          <span className="text-[9px] tracking-[0.3em] uppercase">SCROLL TO REVEAL</span>
          <div className="w-[1px] h-6 bg-white/20 relative overflow-hidden">
            <div className="w-full h-1/2 bg-[#C9A96A] animate-pulse" />
          </div>
        </a>

        <div className="hidden sm:block text-right text-slate-400">
          <span>LAT 28.4744° N · LON 77.5040° E</span>
        </div>
      </div>
    </section>
  );
};
