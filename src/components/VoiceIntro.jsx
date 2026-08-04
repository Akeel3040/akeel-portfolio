import { useEffect, useRef, useState } from "react";
import { profile } from "../data/portfolio";

const isSupported = () =>
  typeof window !== "undefined" && "speechSynthesis" in window;

/** Picks the most natural-sounding English voice the browser offers. */
function pickVoice(voices) {
  const english = voices.filter((voice) => voice.lang?.toLowerCase().startsWith("en"));
  if (english.length === 0) return null;

  const preferred = ["Google UK English Female", "Google US English", "Samantha", "Karen", "Daniel"];
  for (const name of preferred) {
    const match = english.find((voice) => voice.name === name);
    if (match) return match;
  }
  return english.find((voice) => voice.localService) ?? english[0];
}

/**
 * AI voice intro — speaks a short bio with the browser's built-in
 * Web Speech API. No API key, no network request, no dependency.
 */
export default function VoiceIntro() {
  const [supported, setSupported] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const voiceRef = useRef(null);

  useEffect(() => {
    if (!isSupported()) return;
    setSupported(true);

    const synth = window.speechSynthesis;
    // getVoices() is populated asynchronously in Chrome.
    const loadVoices = () => {
      voiceRef.current = pickVoice(synth.getVoices());
    };
    loadVoices();
    synth.addEventListener("voiceschanged", loadVoices);

    // Chrome keeps speaking after the tab navigates away otherwise.
    const stop = () => synth.cancel();
    window.addEventListener("beforeunload", stop);

    return () => {
      synth.removeEventListener("voiceschanged", loadVoices);
      window.removeEventListener("beforeunload", stop);
      synth.cancel();
    };
  }, []);

  const toggleSpeech = () => {
    const synth = window.speechSynthesis;

    if (speaking) {
      synth.cancel();
      setSpeaking(false);
      return;
    }

    synth.cancel(); // clear anything queued from a previous click
    const utterance = new SpeechSynthesisUtterance(profile.voiceIntro);
    utterance.lang = voiceRef.current?.lang || "en-US";
    utterance.rate = 0.95;
    utterance.pitch = 1;
    utterance.volume = 1;
    if (voiceRef.current) utterance.voice = voiceRef.current;

    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => setSpeaking(false);

    synth.speak(utterance);
    setSpeaking(true);
  };

  if (!supported) return null;

  return (
    <div className="flex flex-col items-center sm:items-start gap-2">
      <button
        type="button"
        onClick={toggleSpeech}
        aria-pressed={speaking}
        className={`group inline-flex items-center gap-3 rounded-xl px-6 py-3 font-semibold shadow-lg transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-500 dark:focus-visible:ring-offset-slate-900 ${
          speaking
            ? "bg-rose-500 text-white hover:bg-rose-600 shadow-rose-500/30"
            : "border-2 border-brand-500 text-brand-600 dark:text-brand-400 hover:bg-brand-500 hover:text-white hover:shadow-brand-500/30"
        }`}
      >
        {speaking ? (
          <span className="flex items-end gap-[3px] h-4" aria-hidden="true">
            {[0, 150, 300, 450].map((delay) => (
              <span
                key={delay}
                className="w-[3px] h-4 rounded-full bg-current animate-wave"
                style={{ animationDelay: `${delay}ms` }}
              />
            ))}
          </span>
        ) : (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.895-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z"
              clipRule="evenodd"
            />
          </svg>
        )}
        {speaking ? "Stop Intro" : "Listen to My Intro"}
      </button>

      <p
        className="text-xs text-slate-500 dark:text-slate-400"
        aria-live="polite"
      >
        {speaking ? "🎙️ Speaking…" : "AI voice · powered by your browser"}
      </p>
    </div>
  );
}
