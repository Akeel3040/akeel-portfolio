import React, { useState, useEffect } from "react";
import { useLenis } from "./hooks/useLenis";
import { useVoiceSynthesizer } from "./hooks/useVoiceSynthesizer";
import { Preloader } from "./components/Preloader";
import { CustomCursor } from "./components/CustomCursor";
import { BackgroundFog } from "./components/BackgroundFog";
import { NeuralCore3D } from "./components/NeuralCore3D";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { AboutSection } from "./components/AboutSection";
import { SkillsDeconstructed } from "./components/SkillsDeconstructed";
import { Showcase360 } from "./components/Showcase360";
import { SelectedProjects } from "./components/SelectedProjects";
import { CaseStudyModal } from "./components/CaseStudyModal";
import { VoiceGuide } from "./components/VoiceGuide";
import { JourneySection } from "./components/JourneySection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { ScrollProgress } from "./components/ScrollProgress";
import { FEATURED_PROJECTS, Project } from "./data";
import { NeuralCoreMode } from "./types";

export function App() {
  const [loading, setLoading] = useState(true);
  const [activeCaseStudy, setActiveCaseStudy] = useState<Project | null>(null);
  const [neuralMode, setNeuralMode] = useState<NeuralCoreMode>("hero");

  // Activate Lenis smooth scroll
  useLenis(!loading);

  // Activate AI voice narrative engine
  const {
    isPlaying: isVoicePlaying,
    isPaused: isVoicePaused,
    audioPulse,
    waveform,
    progress: voiceProgress,
    toggle: toggleVoice,
    stop: stopVoice,
    speak: speakVoice,
  } = useVoiceSynthesizer();

  // Scroll spy to morph 3D Neural Core state based on section
  useEffect(() => {
    if (loading) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroEl = document.getElementById("hero");
      const aboutEl = document.getElementById("about");
      const stackEl = document.getElementById("stack");

      const heroBottom = (heroEl?.offsetTop || 0) + (heroEl?.offsetHeight || 800) * 0.7;
      const aboutBottom = (aboutEl?.offsetTop || 800) + (aboutEl?.offsetHeight || 800) * 0.7;

      if (scrollY < heroBottom) {
        setNeuralMode("hero");
      } else if (scrollY < aboutBottom) {
        setNeuralMode("about");
      } else {
        setNeuralMode("skills");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  const handleOpenCaseStudy = (projectId: string) => {
    const proj = FEATURED_PROJECTS.find((p) => p.id === projectId);
    if (proj) {
      setActiveCaseStudy(proj);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#07090B] text-slate-200 overflow-x-hidden selection:bg-[#9FC4D0]/20 selection:text-[#9FC4D0]">
      {/* 1. Cinematic Preloader */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* 2. Custom Magnetic Cursor */}
      <CustomCursor />

      {/* 3. Subtle Film Grain & Soft Vignette Overlays */}
      <div className="film-grain" aria-hidden="true" />
      <div className="vignette-overlay" aria-hidden="true" />

      {/* 4. Volumetric Drifting Dust Canvas */}
      <BackgroundFog />

      {/* 5. Central 3D AI Neural Core (Reacts to Audio Pulse & Section Scroll) */}
      <div className="fixed inset-0 pointer-events-none z-10">
        <NeuralCore3D mode={neuralMode} audioPulse={audioPulse} />
      </div>

      {/* 6. Hairline & Ruler Scroll Progress */}
      <ScrollProgress />

      {/* 7. Sticky Minimal Luxury Navigation */}
      <Navbar
        onOpenVoice={speakVoice}
        isVoicePlaying={isVoicePlaying && !isVoicePaused}
      />

      {/* Main Narrative Flow */}
      <main className="relative z-20">
        {/* Section 01: Hero */}
        <Hero
          onPlayVoice={toggleVoice}
          isVoicePlaying={isVoicePlaying && !isVoicePaused}
        />

        {/* Section 02: About ("Born of Curiosity") */}
        <AboutSection />

        {/* Section 03: Deconstructed by Design (Skills) */}
        <SkillsDeconstructed
          onCategoryChange={() => setNeuralMode("exploded")}
        />

        {/* Section 04: 360° Interactive Project Showcase */}
        <Showcase360 onOpenCaseStudy={handleOpenCaseStudy} />

        {/* Section 05: Selected Work & GitHub Live Archive */}
        <SelectedProjects onOpenCaseStudy={handleOpenCaseStudy} />

        {/* Section 06: Education & Journey Timeline */}
        <JourneySection />

        {/* Section 07: Contact ("Reserve a Conversation") */}
        <ContactSection />
      </main>

      {/* 8. Editorial Footer */}
      <Footer />

      {/* 9. Floating AI Voice Guide Pill with Live Waveform */}
      <VoiceGuide
        isPlaying={isVoicePlaying}
        isPaused={isVoicePaused}
        waveform={waveform}
        progress={voiceProgress}
        onToggle={toggleVoice}
        onStop={stopVoice}
      />

      {/* 10. Full-Screen Case Study Modal Overlay */}
      <CaseStudyModal
        project={activeCaseStudy}
        onClose={() => setActiveCaseStudy(null)}
      />
    </div>
  );
}

export default App;
