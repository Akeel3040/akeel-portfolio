import React from "react";
import { FEATURED_PROJECTS, Project } from "../data";
import { GitHubArchive } from "./GitHubArchive";
import {
  ExternalLink,
  Layers,
  ArrowUpRight,
  ShieldCheck,
  Award,
} from "lucide-react";
import { GithubIcon } from "./Icons";

interface SelectedProjectsProps {
  onOpenCaseStudy: (projectId: string) => void;
}

export const SelectedProjects: React.FC<SelectedProjectsProps> = ({ onOpenCaseStudy }) => {
  return (
    <section
      id="work"
      className="relative min-h-screen w-full py-28 px-6 md:px-12 z-20 max-w-7xl mx-auto flex flex-col justify-center"
    >
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-4">
        <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#9FC4D0]">
          05 // SELECTED PORTFOLIO
        </span>
        <div className="h-[1px] w-12 bg-[#9FC4D0]/30" />
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-white font-light tracking-tight">
            Selected <span className="serif-italic text-[#C9A96A]">Works.</span>
          </h2>
          <p className="mt-3 text-sm md:text-base text-slate-400 font-sans max-w-xl font-light">
            Architectures engineered for production reliability, mathematical clarity,
            and quantifiable operational impact.
          </p>
        </div>

        <div className="text-[10px] font-mono tracking-widest text-[#9FC4D0] uppercase">
          CLICK CARD TO EXPAND CASE STUDY
        </div>
      </div>

      {/* Flagship Large Cinematic Project Cards */}
      <div className="space-y-12">
        {FEATURED_PROJECTS.map((project, idx) => {
          const isFeaturedHero = idx === 0;

          return (
            <div
              key={project.id}
              className={`group relative rounded-3xl border transition-all duration-500 overflow-hidden backdrop-blur-xl ${
                isFeaturedHero
                  ? "bg-gradient-to-b from-[#0E141E]/95 to-[#090C12]/95 border-[#C9A96A]/25 p-8 sm:p-12 shadow-[0_15px_60px_rgba(0,0,0,0.8)] hover:border-[#C9A96A]/50"
                  : "bg-[#0D1117]/85 border-white/[0.08] p-8 sm:p-10 hover:border-white/20 shadow-2xl"
              }`}
            >
              {/* Subtle Ambient Backlight Glow on hover */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#9FC4D0]/5 via-transparent to-transparent pointer-events-none rounded-full blur-3xl group-hover:from-[#C9A96A]/10 transition-colors duration-700" />

              {/* Card Header Strip */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-[11px] font-mono tracking-widest text-slate-400">
                    0{idx + 1} // {project.category.toUpperCase()}
                  </span>

                  {project.roleBadge && (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider bg-[#C9A96A]/10 text-[#C9A96A] border border-[#C9A96A]/20">
                      {project.roleBadge}
                    </span>
                  )}
                </div>

                {project.supervisor && (
                  <div className="flex items-center gap-1.5 text-xs font-mono text-[#9FC4D0]">
                    <Award className="w-3.5 h-3.5 text-[#C9A96A]" />
                    <span>Supervisor: {project.supervisor}</span>
                  </div>
                )}
              </div>

              {/* Main Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Narrative */}
                <div className="lg:col-span-8 flex flex-col">
                  <h3
                    onClick={() => onOpenCaseStudy(project.id)}
                    className="text-2xl sm:text-4xl font-serif text-white hover:text-[#9FC4D0] cursor-pointer transition-colors duration-300 font-light"
                  >
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm sm:text-base text-slate-300 font-sans font-light leading-relaxed">
                    {project.tagline}
                  </p>

                  <p className="mt-4 text-xs sm:text-sm text-slate-400 font-sans leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  {/* Architecture Highlights Pill List */}
                  <div className="mt-6 space-y-2">
                    {project.caseStudy.results.slice(0, 2).map((res, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-sans text-slate-300">
                        <ShieldCheck className="w-4 h-4 text-[#C9A96A] shrink-0" />
                        <span>{res}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-[11px] font-mono tracking-wider bg-white/[0.04] text-slate-300 border border-white/[0.07]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Metrics & Quick Actions */}
                <div className="lg:col-span-4 flex flex-col justify-between h-full bg-[#07090B]/60 p-6 rounded-2xl border border-white/[0.06]">
                  {/* Project Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {project.stats.map((s, si) => (
                      <div key={si} className="flex flex-col">
                        <span className="text-[10px] font-mono text-slate-500 uppercase">
                          {s.label}
                        </span>
                        <span className="text-base sm:text-lg font-serif text-white font-medium">
                          {s.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-col gap-2.5 pt-4 border-t border-white/[0.06]">
                    <button
                      onClick={() => onOpenCaseStudy(project.id)}
                      className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-mono tracking-wider uppercase bg-[#C9A96A] text-[#07090B] font-semibold hover:bg-[#E1C48B] transition-colors"
                    >
                      <Layers className="w-3.5 h-3.5" />
                      <span>CASE STUDY OVERLAY</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center gap-2">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-mono tracking-wider uppercase bg-white/[0.05] hover:bg-white/10 text-white border border-white/10 transition-colors"
                        >
                          <ExternalLink className="w-3 h-3 text-[#9FC4D0]" />
                          <span>LIVE DEMO</span>
                        </a>
                      )}

                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-mono tracking-wider uppercase bg-white/[0.05] hover:bg-white/10 text-white border border-white/10 transition-colors"
                      >
                        <GithubIcon className="w-3 h-3 text-slate-400" />
                        <span>SOURCE</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* GitHub Live API Repositories Directory */}
      <GitHubArchive />
    </section>
  );
};
