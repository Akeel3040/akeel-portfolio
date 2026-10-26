import React, { useState } from "react";
import { Volume2, VolumeX, Play, Pause, Square, FileText, ChevronUp, ChevronDown } from "lucide-react";
import { PERSONAL_INFO } from "../data";

interface VoiceGuideProps {
  isPlaying: boolean;
  isPaused: boolean;
  waveform: number[];
  progress: number;
  onToggle: () => void;
  onStop: () => void;
}

export const VoiceGuide: React.FC<VoiceGuideProps> = ({
  isPlaying,
  isPaused,
  waveform,
  progress,
  onToggle,
  onStop,
}) => {
  const [showScript, setShowScript] = useState(false);

  return (
    <aside
      aria-label="AI Voice Guide"
      className="fixed bottom-6 right-6 z-40 flex flex-col items-end pointer-events-auto"
    >
      {/* Expandable Script Card */}
      {showScript && (
        <div className="mb-3 w-80 sm:w-96 p-4 rounded-2xl bg-[#0D1117]/95 border border-[#C9A96A]/30 backdrop-blur-2xl shadow-2xl text-xs text-slate-300 font-sans leading-relaxed animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="flex items-center justify-between text-[10px] font-mono tracking-widest text-[#9FC4D0] uppercase mb-2">
            <span>VOICE SCRIPT TRANSCRIPT</span>
            <span className="text-[#C9A96A]">WEB AUDIO / SPEECH</span>
          </div>
          <p className="italic text-slate-200">
            "{PERSONAL_INFO.voiceScript}"
          </p>
        </div>
      )}

      {/* Floating Audio Controller Capsule */}
      <div className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-[#0D1117]/90 border border-white/10 hover:border-[#C9A96A]/40 backdrop-blur-xl shadow-[0_10px_35px_rgba(0,0,0,0.8)] transition-all duration-300">
        {/* Play/Pause Button */}
        <button
          onClick={onToggle}
          className={`p-2 rounded-full transition-all duration-300 ${
            isPlaying && !isPaused
              ? "bg-[#C9A96A] text-[#07090B] shadow-[0_0_15px_rgba(201,169,106,0.4)]"
              : "bg-white/[0.06] text-white hover:bg-[#C9A96A]/20 hover:text-[#C9A96A]"
          }`}
          title={isPlaying && !isPaused ? "Pause narrative" : "Play AI Voice Narrative"}
          aria-label={isPlaying && !isPaused ? "Pause AI voice" : "Play AI voice"}
        >
          {isPlaying && !isPaused ? (
            <Pause className="w-3.5 h-3.5" />
          ) : (
            <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
          )}
        </button>

        {/* Real-time Equalizer Waveform Bars */}
        <div className="flex items-center gap-0.5 h-5 px-1 w-24 sm:w-28 justify-center">
          {waveform.map((height, i) => (
            <div
              key={i}
              className={`w-1 rounded-full transition-all duration-75 ${
                isPlaying && !isPaused
                  ? i % 3 === 0
                    ? "bg-[#C9A96A]"
                    : "bg-[#9FC4D0]"
                  : "bg-white/20"
              }`}
              style={{
                height: `${Math.max(15, Math.min(100, height * 100))}%`,
              }}
            />
          ))}
        </div>

        {/* Status Indicator & Label */}
        <div className="hidden sm:flex flex-col text-left">
          <span className="text-[9px] font-mono tracking-widest text-[#9FC4D0] uppercase">
            {isPlaying && !isPaused
              ? "AI VOICE ACTIVE"
              : isPaused
              ? "AUDIO PAUSED"
              : "AI NARRATIVE"}
          </span>
          <span className="text-[10px] font-display text-white font-medium">
            Hear My Story
          </span>
        </div>

        {/* Stop Button */}
        {isPlaying && (
          <button
            onClick={onStop}
            className="p-1.5 rounded-full text-slate-400 hover:text-red-400 transition-colors"
            title="Stop audio"
            aria-label="Stop audio"
          >
            <Square className="w-3 h-3 fill-current" />
          </button>
        )}

        {/* Script Toggle */}
        <button
          onClick={() => setShowScript(!showScript)}
          className="p-1.5 rounded-full text-slate-400 hover:text-[#9FC4D0] transition-colors"
          title="Read transcript text"
          aria-label="Toggle transcript"
        >
          {showScript ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronUp className="w-3.5 h-3.5" />}
        </button>
      </div>
    </aside>
  );
};
