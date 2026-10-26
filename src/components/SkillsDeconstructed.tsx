import React, { useState } from "react";
import { SKILL_CATEGORIES } from "../data";
import {
  Code,
  Brain,
  BarChart3,
  Layout,
  Database,
  Terminal,
  CheckCircle2,
  Cpu,
} from "lucide-react";

interface SkillsProps {
  onCategoryChange?: (categoryId: string) => void;
}

export const SkillsDeconstructed: React.FC<SkillsProps> = ({ onCategoryChange }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(SKILL_CATEGORIES[0].id);

  const activeCategory =
    SKILL_CATEGORIES.find((cat) => cat.id === selectedCategory) || SKILL_CATEGORIES[0];

  const handleSelect = (id: string) => {
    setSelectedCategory(id);
    if (onCategoryChange) {
      onCategoryChange(id);
    }
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Code":
        return <Code className="w-5 h-5" />;
      case "Brain":
        return <Brain className="w-5 h-5" />;
      case "BarChart3":
        return <BarChart3 className="w-5 h-5" />;
      case "Layout":
        return <Layout className="w-5 h-5" />;
      case "Database":
        return <Database className="w-5 h-5" />;
      case "Terminal":
        return <Terminal className="w-5 h-5" />;
      default:
        return <Cpu className="w-5 h-5" />;
    }
  };

  return (
    <section
      id="stack"
      className="relative min-h-screen w-full py-28 px-6 md:px-12 z-20 max-w-7xl mx-auto flex flex-col justify-center"
    >
      {/* Editorial Header */}
      <div className="flex items-center gap-3 mb-4">
        <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#9FC4D0]">
          03 // ARCHITECTURAL MATRIX
        </span>
        <div className="h-[1px] w-12 bg-[#9FC4D0]/30" />
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-white font-light tracking-tight">
            Deconstructed by <span className="serif-italic text-[#C9A96A]">design.</span>
          </h2>
          <p className="mt-3 text-sm md:text-base text-slate-400 font-sans max-w-xl font-light">
            Every layer of the computing and intelligence stack unbundled into modular,
            production-tested engineering competencies.
          </p>
        </div>

        <div className="text-[10px] font-mono tracking-widest text-[#9FC4D0] uppercase border border-white/10 px-4 py-2 rounded-full self-start md:self-auto bg-white/[0.02]">
          SELECT LAYER TO INSPECT
        </div>
      </div>

      {/* Main Grid: Interactive Layer Selector on Left & Deep Inspector on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Stack Layers Navigation (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const isSelected = cat.id === selectedCategory;
            return (
              <button
                key={cat.id}
                onClick={() => handleSelect(cat.id)}
                className={`w-full text-left p-5 rounded-xl border transition-all duration-300 relative overflow-hidden group ${
                  isSelected
                    ? "bg-[#0D1117] border-[#C9A96A]/40 shadow-[0_4px_25px_rgba(201,169,106,0.1)]"
                    : "bg-[#0A0D12]/60 border-white/[0.05] hover:border-white/15 hover:bg-[#0D1117]/50"
                }`}
              >
                {/* Active Indicator Bar */}
                {isSelected && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#C9A96A] to-[#9FC4D0]" />
                )}

                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase">
                    {cat.shortCode}
                  </span>
                  <div
                    className={`p-1.5 rounded-lg ${
                      isSelected
                        ? "text-[#C9A96A] bg-[#C9A96A]/10"
                        : "text-slate-400 group-hover:text-white"
                    }`}
                  >
                    {getIcon(cat.icon)}
                  </div>
                </div>

                <div className="text-base font-serif text-white tracking-wide">
                  {cat.title}
                </div>

                <div className="text-xs text-slate-400 font-sans mt-1 line-clamp-1">
                  {cat.description}
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Layer Inspector & Capability Cards (7 cols) */}
        <div className="lg:col-span-7 bg-[#0D1117]/95 border border-white/[0.08] rounded-2xl p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden shadow-2xl">
          {/* Subtle Ambient Radial Highlight */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#9FC4D0]/10 via-transparent to-transparent pointer-events-none rounded-full blur-2xl" />

          {/* Inspector Header */}
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-4 mb-6">
            <div>
              <span className="text-[10px] font-mono tracking-widest text-[#9FC4D0] uppercase">
                {activeCategory.shortCode} INSPECTOR
              </span>
              <h3 className="text-2xl font-serif text-white mt-1">
                {activeCategory.title}
              </h3>
            </div>
            <div className="px-3 py-1 rounded-full text-[10px] font-mono tracking-wider bg-white/[0.04] border border-white/10 text-[#C9A96A]">
              PRODUCTION GRADE
            </div>
          </div>

          <p className="text-sm text-slate-300 font-sans leading-relaxed mb-8">
            {activeCategory.description}
          </p>

          {/* Granular Skills with Precision Progress */}
          <div className="space-y-6">
            {activeCategory.skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-baseline">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A96A]" />
                    <span className="text-sm font-sans font-medium text-white tracking-wide">
                      {skill.name}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-[#9FC4D0]">
                    {skill.level}% PROFICIENCY
                  </span>
                </div>

                {/* Meter Bar */}
                <div className="h-1.5 w-full bg-white/[0.06] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#9FC4D0] via-[#C9A96A] to-[#E1C48B] rounded-full transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>

                {/* Practical Engineering Application Note */}
                {skill.note && (
                  <p className="text-[11px] font-mono text-slate-400 pl-5">
                    ↳ <span className="text-slate-300">{skill.note}</span>
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Verification Footnote */}
          <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-slate-500">
            <span>VALIDATED ACROSS B.TECH CAPSTONES & LIVE PRODUCTION</span>
            <span className="text-[#C9A96A]">LLOYD // AKTU</span>
          </div>
        </div>
      </div>
    </section>
  );
};
