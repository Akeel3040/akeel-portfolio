import React from "react";
import { JOURNEY } from "../data";
import { GraduationCap, Award, FileText, ExternalLink, Calendar, MapPin } from "lucide-react";

export const JourneySection: React.FC = () => {
  return (
    <section
      id="journey"
      className="relative min-h-screen w-full py-28 px-6 md:px-12 z-20 max-w-7xl mx-auto flex flex-col justify-center"
    >
      {/* Editorial Header */}
      <div className="flex items-center gap-3 mb-4">
        <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#9FC4D0]">
          06 // CHRONOLOGY & PEDIGREE
        </span>
        <div className="h-[1px] w-12 bg-[#9FC4D0]/30" />
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-white font-light tracking-tight">
            Academic & <span className="serif-italic text-[#C9A96A]">Technical Journey.</span>
          </h2>
          <p className="mt-3 text-sm md:text-base text-slate-400 font-sans max-w-xl font-light">
            Formal engineering education at Lloyd Institute of Engineering & Technology
            (AKTU), verified certifications, and milestones in computational science.
          </p>
        </div>

        <div className="text-[10px] font-mono tracking-widest text-[#9FC4D0] uppercase">
          CURATED CHRONICLE · 2023 — 2027
        </div>
      </div>

      {/* Minimal Vertical Timeline */}
      <div className="relative pl-6 sm:pl-10 border-l border-[#C9A96A]/30 space-y-14 ml-2 sm:ml-6">
        {JOURNEY.map((item, idx) => {
          const isAcademic = item.year === "CURRENT";

          return (
            <div key={idx} className="relative group">
              {/* Timeline Glowing Node Marker */}
              <div
                className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full border-2 transition-transform duration-300 group-hover:scale-125 ${
                  isAcademic
                    ? "bg-[#C9A96A] border-[#07090B] shadow-[0_0_15px_rgba(201,169,106,0.6)]"
                    : "bg-[#07090B] border-[#9FC4D0] shadow-[0_0_10px_rgba(159,196,208,0.4)]"
                }`}
              />

              {/* Card Container */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#0D1117]/85 border border-white/[0.06] group-hover:border-[#C9A96A]/30 backdrop-blur-xl transition-all duration-300">
                {/* Top Metadata Row */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="flex items-center gap-1.5 text-xs font-mono text-[#C9A96A]">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.period}</span>
                    </span>

                    {item.badge && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-white/[0.04] text-slate-300 border border-white/[0.08]">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-[#9FC4D0]" />
                    <span>{item.location}</span>
                  </div>
                </div>

                {/* Milestone Title & Institution */}
                <h3 className="text-xl sm:text-2xl font-serif text-white font-light group-hover:text-[#9FC4D0] transition-colors">
                  {item.title}
                </h3>
                <div className="text-xs sm:text-sm font-sans text-[#C9A96A] mt-1 font-medium">
                  {item.institution}
                </div>

                {/* Description */}
                <p className="mt-3 text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                  {item.description}
                </p>

                {/* Detailed Key Highlights */}
                <div className="mt-4 space-y-1.5 border-t border-white/[0.06] pt-4">
                  {item.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-400">
                      <span className="w-1 h-1 rounded-full bg-[#9FC4D0] shrink-0 mt-1.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Certificate Download / Credential Link */}
                {item.certificateUrl && (
                  <div className="mt-6 pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3">
                    <span className="text-[10px] font-mono text-slate-500 uppercase">
                      CREDENTIAL VERIFIED BY CODEWITHHARRY
                    </span>

                    <a
                      href={item.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono tracking-wider uppercase bg-white/[0.04] hover:bg-[#C9A96A] hover:text-[#07090B] text-slate-200 border border-white/10 hover:border-[#C9A96A] transition-all duration-300 font-medium"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>VIEW OFFICIAL CERTIFICATE (PDF)</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
