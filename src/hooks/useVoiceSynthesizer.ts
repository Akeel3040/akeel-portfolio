import { useState, useEffect, useRef, useCallback } from "react";
import { PERSONAL_INFO } from "../data";

export interface VoiceState {
  isPlaying: boolean;
  isPaused: boolean;
  isSupported: boolean;
  audioPulse: number; // 0.0 to 1.0 (for 3D neural core pulse)
  waveform: number[]; // Array of 16-24 normalized frequency values for animated visualizer
  progress: number; // 0 to 100 percentage
}

export function useVoiceSynthesizer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isSupported, setIsSupported] = useState(true);
  const [audioPulse, setAudioPulse] = useState(0);
  const [waveform, setWaveform] = useState<number[]>(Array(16).fill(0.1));
  const [progress, setProgress] = useState(0);

  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const animFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);
  const estimatedDurationRef = useRef<number>(14000); // ~14s for script

  useEffect(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      setIsSupported(false);
    }
  }, []);

  // Update waveform animation loop
  const updateWaveform = useCallback(() => {
    if (!isPlaying || isPaused) {
      setAudioPulse(0);
      setWaveform(Array(16).fill(0.08));
      return;
    }

    const elapsed = Date.now() - startTimeRef.current;
    const prog = Math.min(100, Math.round((elapsed / estimatedDurationRef.current) * 100));
    setProgress(prog);

    // Procedural speech-like frequency variation
    const time = elapsed * 0.008;
    const newWaveform = Array(16).fill(0).map((_, i) => {
      const base = Math.sin(time + i * 0.6) * 0.5 + 0.5;
      const harmonic = Math.sin(time * 2.3 + i * 0.3) * 0.3 + 0.3;
      const noise = (Math.random() - 0.5) * 0.2;
      return Math.min(1, Math.max(0.12, (base + harmonic + noise) * 0.85));
    });

    const averageIntensity = newWaveform.reduce((a, b) => a + b, 0) / newWaveform.length;
    setAudioPulse(averageIntensity);
    setWaveform(newWaveform);

    animFrameRef.current = requestAnimationFrame(updateWaveform);
  }, [isPlaying, isPaused]);

  useEffect(() => {
    if (isPlaying && !isPaused) {
      animFrameRef.current = requestAnimationFrame(updateWaveform);
    } else {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
      setAudioPulse(0);
      setWaveform(Array(16).fill(0.08));
    }

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [isPlaying, isPaused, updateWaveform]);

  const speak = useCallback(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(PERSONAL_INFO.voiceScript);
    utteranceRef.current = utterance;

    // Select the best natural-sounding voice available
    const voices = window.speechSynthesis.getVoices();
    const preferredVoice = voices.find(
      (v) =>
        (v.lang.startsWith("en") && (v.name.includes("Natural") || v.name.includes("Google") || v.name.includes("Daniel") || v.name.includes("Oliver") || v.name.includes("Arthur") || v.name.includes("Samantha"))) ||
        v.lang === "en-GB" ||
        v.lang === "en-US"
    );

    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }

    utterance.rate = 0.95; // Slightly measured, authoritative luxury cadence
    utterance.pitch = 0.98; // Rich tone

    utterance.onstart = () => {
      setIsPlaying(true);
      setIsPaused(false);
      startTimeRef.current = Date.now();
      // Rough estimation based on 32 words at 130 wpm
      estimatedDurationRef.current = 14500;
    };

    utterance.onend = () => {
      setIsPlaying(false);
      setIsPaused(false);
      setProgress(100);
      setTimeout(() => setProgress(0), 1000);
    };

    utterance.onerror = (e) => {
      // If speech synthesis has an error (e.g. user navigation or cancel)
      console.warn("Speech synthesis event:", e);
      setIsPlaying(false);
      setIsPaused(false);
    };

    window.speechSynthesis.speak(utterance);
  }, []);

  const pause = useCallback(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.pause();
      setIsPaused(true);
    }
  }, []);

  const resume = useCallback(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.resume();
      setIsPaused(false);
    }
  }, []);

  const stop = useCallback(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      setIsPaused(false);
      setProgress(0);
      setAudioPulse(0);
      setWaveform(Array(16).fill(0.08));
    }
  }, []);

  const toggle = useCallback(() => {
    if (!isPlaying) {
      speak();
    } else if (isPaused) {
      resume();
    } else {
      pause();
    }
  }, [isPlaying, isPaused, speak, resume, pause]);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  return {
    isPlaying,
    isPaused,
    isSupported,
    audioPulse,
    waveform,
    progress,
    speak,
    pause,
    resume,
    stop,
    toggle,
  };
}
