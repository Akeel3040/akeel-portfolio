import React from "react";
import { PERSONAL_INFO, METRICS } from "../data";
import { FileText, Sparkles, MapPin, GraduationCap } from "lucide-react";
import { LinkedinIcon } from "./Icons";

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full py-28 px-6 md:px-12 z-20 max-w-7xl mx-auto flex flex-col justify-center"
    >
      {/* Editorial Section Header */}
      <div className="flex items-center gap-3 mb-4">
        <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#9FC4D0]">
          02 // PHILOSOPHY & ORIGIN
        </span>
        <div className="h-[1px] w-12 bg-[#9FC4D0]/30" />
      </div>

      <div className="text-xs uppercase tracking-[0.25em] text-[#C9A96A] font-display mb-10">
        BORN OF CURIOSITY
      </div>

      {/* Ghost-Echo Editorial Headline */}
      <div className="relative mb-16">
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.1] font-light max-w-4xl">
          “Some things are made to disappear into the dark —{" "}
          <span className="serif-italic text-[#9FC4D0]">
            except what is built
          </span>{" "}
          to endure.”
        </h2>
        <div className="w-24 h-[1px] bg-gradient-to-r from-[#C9A96A] to-transparent mt-8" />
      </div>

      {/* Main Grid: Narrative Bio & Luxury Profile Artifact */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Narrative Text (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-6 text-slate-300 font-sans font-light leading-relaxed text-base md:text-lg">
          <p className="first-letter:text-5xl first-letter:font-serif first-letter:text-[#C9A96A] first-letter:float-left first-letter:mr-3 first-letter:leading-none">
            {PERSONAL_INFO.bio[0]}
          </p>

          <p>{PERSONAL_INFO.bio[1]}</p>

          <p className="text-slate-400 text-sm md:text-base border-l border-[#9FC4D0]/30 pl-4 py-1 italic">
            {PERSONAL_INFO.bio[2]}
          </p>

          {/* Institutional Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 pt-6 border-t border-white/[0.06]">
            <div className="flex items-start gap-3">
              <GraduationCap className="w-5 h-5 text-[#C9A96A] shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-white">
                  ACADEMIC AFFILIATION
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  {PERSONAL_INFO.institution}
                </div>
                <div className="text-[11px] text-[#9FC4D0] mt-0.5">
                  {PERSONAL_INFO.university}
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#9FC4D0] shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-white">
                  GEOGRAPHY & REACH
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  {PERSONAL_INFO.location}
                </div>
                <div className="text-[11px] text-[#C9A96A] mt-0.5">
                  Available Worldwide (Remote & Relocation)
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap items-center gap-4 mt-6">
            <a
              href={PERSONAL_INFO.resumePdf}
              download
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-mono tracking-wider uppercase bg-white/[0.05] border border-white/10 hover:border-[#C9A96A] hover:text-[#C9A96A] transition-all duration-300"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>CURRICULUM VITAE (PDF)</span>
            </a>

            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-mono tracking-wider uppercase bg-white/[0.05] border border-white/10 hover:border-[#9FC4D0] hover:text-[#9FC4D0] transition-all duration-300"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LINKEDIN NETWORK</span>
            </a>
          </div>
        </div>

        {/* Right Luxury Profile Display (5 cols) */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="relative w-full max-w-sm group">
            {/* Ambient Backlight Glow */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-[#9FC4D0]/20 via-[#C9A96A]/15 to-transparent blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            {/* Profile Card Container */}
            <div className="relative rounded-2xl bg-[#0D1117]/90 border border-white/[0.08] p-4 backdrop-blur-xl overflow-hidden shadow-2xl">
              {/* Image Frame */}
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-white/[0.05]">
                <img
                  src={PERSONAL_INFO.profileImage}
                  alt="MD Akeel - AI/ML Engineer"
                  className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07090B] via-transparent to-transparent opacity-80" />

                {/* Status Badge in Photo */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono tracking-widest bg-[#07090B]/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/[0.08]">
                  <span className="text-[#9FC4D0]">MD AKEEL</span>
                  <span className="text-[#C9A96A]">CSE AIML '27</span>
                </div>
              </div>

              {/* Card Footer Details */}
              <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono tracking-wider text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-[#C9A96A]" />
                  <span>IDENTITY VERIFIED</span>
                </span>
                <span className="text-slate-500">LLOYD // AKTU</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics Strip */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20 pt-10 border-t border-white/[0.06]">
        {METRICS.map((metric, idx) => (
          <div key={idx} className="flex flex-col gap-1">
            <div className="text-3xl md:text-4xl font-serif text-white tracking-tight">
              {metric.value}
            </div>
            <div className="text-xs uppercase tracking-widest font-mono text-[#9FC4D0]">
              {metric.label}
            </div>
            <div className="text-[11px] text-slate-500 font-sans mt-0.5">
              {metric.detail}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
