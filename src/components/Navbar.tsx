import React, { useState, useEffect } from "react";
import { PERSONAL_INFO } from "../data";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  onOpenVoice?: () => void;
  isVoicePlaying?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenVoice, isVoicePlaying }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "GENESIS", href: "#hero" },
    { label: "ABOUT", href: "#about" },
    { label: "THE STACK", href: "#stack" },
    { label: "360° SHOWCASE", href: "#showcase" },
    { label: "THE WORK", href: "#work" },
    { label: "JOURNEY", href: "#journey" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isScrolled
            ? "py-3 bg-[#07090B]/85 backdrop-blur-md border-b border-white/[0.06] shadow-2xl"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Left Brand Wordmark */}
          <a
            href="#hero"
            className="group flex items-center gap-3 select-none focus:outline-none"
            aria-label="MD Akeel Home"
          >
            <span className="text-xl md:text-2xl font-serif tracking-[0.2em] text-white group-hover:text-[#9FC4D0] transition-colors duration-300">
              AKEEL
            </span>
            <div className="hidden sm:flex items-center gap-2 pl-3 border-l border-white/10 text-[9px] font-mono tracking-widest text-[#9FC4D0]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9FC4D0] animate-ping" />
              <span className="opacity-70">CSE (AI&ML) · 2026–27</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[11px] font-display uppercase tracking-[0.25em] text-slate-400 hover:text-white transition-colors duration-300 relative py-1 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C9A96A] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action Pill */}
          <div className="flex items-center gap-4">
            {/* Audio Quick Trigger if available */}
            {onOpenVoice && (
              <button
                onClick={onOpenVoice}
                className={`hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-mono tracking-wider transition-all duration-300 border ${
                  isVoicePlaying
                    ? "border-[#C9A96A] bg-[#C9A96A]/10 text-[#C9A96A]"
                    : "border-white/10 bg-white/[0.03] text-slate-400 hover:text-[#9FC4D0] hover:border-[#9FC4D0]/30"
                }`}
                title="Listen to AI Intro"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                <span>{isVoicePlaying ? "NARRATING" : "HEAR INTRO"}</span>
              </button>
            )}

            {/* Gold 'Hire Me' / 'Reserve' Pill */}
            <a
              href="#contact"
              className="relative inline-flex items-center gap-2 px-4 md:px-5 py-2 rounded-full text-[11px] font-display font-medium tracking-[0.2em] uppercase text-[#07090B] bg-gradient-to-r from-[#C9A96A] via-[#E1C48B] to-[#C9A96A] hover:shadow-[0_0_20px_rgba(201,169,106,0.35)] transition-all duration-300 active:scale-95 group"
            >
              <span>HIRE ME</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Mobile Burger Menu Button */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-40 bg-[#07090B]/98 backdrop-blur-xl flex flex-col justify-center px-8 lg:hidden animate-in fade-in duration-300">
          <div className="text-[10px] tracking-[0.3em] font-mono text-[#9FC4D0] mb-6">
            NAVIGATION INDEX
          </div>
          <nav className="flex flex-col gap-6">
            {navItems.map((item, idx) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileOpen(false)}
                className="flex items-baseline justify-between border-b border-white/[0.06] pb-3 text-2xl font-serif text-white hover:text-[#C9A96A] transition-colors"
              >
                <span>{item.label}</span>
                <span className="text-[11px] font-mono text-slate-600">0{idx + 1}</span>
              </a>
            ))}
          </nav>

          <div className="mt-10 pt-6 border-t border-white/[0.08] flex flex-col gap-4">
            <div className="text-xs text-slate-400 font-sans">
              {PERSONAL_INFO.institution}
            </div>
            <a
              href={PERSONAL_INFO.resumePdf}
              download
              className="text-xs font-mono tracking-widest text-[#C9A96A] hover:underline"
            >
              DOWNLOAD RESUME (PDF) ↓
            </a>
          </div>
        </div>
      )}
    </>
  );
};
