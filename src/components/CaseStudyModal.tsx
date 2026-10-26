import React, { useEffect } from "react";
import { Project } from "../data";
import { X, ExternalLink, CheckCircle2, Award, Terminal, ArrowRight } from "lucide-react";
import { GithubIcon } from "./Icons";

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#050608]/90 backdrop-blur-2xl overflow-y-auto animate-in fade-in duration-300"
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
    >
      <div className="relative w-full max-w-4xl bg-[#0D1117] border border-white/10 rounded-3xl p-6 sm:p-10 text-slate-200 shadow-[0_25px_80px_rgba(0,0,0,0.9)] max-h-[90vh] overflow-y-auto my-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/[0.05] hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all duration-200 z-10"
          aria-label="Close Case Study"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header Metadata */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="text-[10px] font-mono tracking-widest text-[#9FC4D0] uppercase">
            ARCHITECTURAL DEEP-DIVE
          </span>
          {project.roleBadge && (
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider bg-[#C9A96A]/10 text-[#C9A96A] border border-[#C9A96A]/20">
              {project.roleBadge}
            </span>
          )}
          {project.supervisor && (
            <span className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
              <Award className="w-3.5 h-3.5 text-[#C9A96A]" />
              <span>Supervisor: {project.supervisor}</span>
            </span>
          )}
        </div>

        {/* Title */}
        <h2 id="case-study-title" className="text-3xl sm:text-4xl font-serif text-white mb-2 font-light">
          {project.title}
        </h2>
        <p className="text-sm sm:text-base text-slate-400 font-sans mb-8 leading-relaxed">
          {project.tagline}
        </p>

        {/* Key Metrics Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] mb-8">
          {project.stats.map((s, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-[10px] font-mono uppercase text-slate-400">
                {s.label}
              </span>
              <span className="text-base sm:text-lg font-serif text-white font-medium mt-0.5">
                {s.value}
              </span>
            </div>
          ))}
        </div>

        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-2 mb-8 pb-6 border-b border-white/[0.06]">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs font-mono tracking-wider bg-white/[0.04] text-slate-300 border border-white/[0.08]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Deep Dive Content Sections */}
        <div className="space-y-8 font-sans">
          {/* 1. Overview */}
          <div>
            <h3 className="text-xs font-mono tracking-widest uppercase text-[#9FC4D0] mb-2 flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5" />
              <span>01 // SYSTEM OVERVIEW</span>
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
              {project.caseStudy.overview}
            </p>
          </div>

          {/* 2. Challenge & Problem Statement */}
          <div>
            <h3 className="text-xs font-mono tracking-widest uppercase text-[#C9A96A] mb-2 flex items-center gap-2">
              <ArrowRight className="w-3.5 h-3.5" />
              <span>02 // THE CORE PROBLEM</span>
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
              {project.caseStudy.challenge}
            </p>
          </div>

          {/* 3. Architectural Solution */}
          <div>
            <h3 className="text-xs font-mono tracking-widest uppercase text-[#9FC4D0] mb-3">
              03 // TECHNICAL ARCHITECTURE
            </h3>
            <div className="space-y-2.5">
              {project.caseStudy.architecture.map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A96A] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Results & Outcomes */}
          <div>
            <h3 className="text-xs font-mono tracking-widest uppercase text-[#C9A96A] mb-3">
              04 // QUANTIFIABLE RESULTS
            </h3>
            <div className="space-y-2">
              {project.caseStudy.results.map((res, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9FC4D0] shrink-0 mt-2" />
                  <span>{res}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal CTAs */}
        <div className="mt-10 pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono tracking-wider uppercase bg-[#C9A96A] text-[#07090B] font-semibold hover:bg-[#E1C48B] transition-colors"
              >
                <span>OPEN LIVE DEMO</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono tracking-wider uppercase bg-white/[0.05] hover:bg-white/10 text-white border border-white/10 transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GITHUB REPOSITORY</span>
            </a>
          </div>

          <button
            onClick={onClose}
            className="text-xs font-mono tracking-wider text-slate-400 hover:text-white uppercase transition-colors"
          >
            CLOSE OVERLAY [ESC]
          </button>
        </div>
      </div>
    </div>
  );
};
