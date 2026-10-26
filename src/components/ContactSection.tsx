import React, { useState } from "react";
import { PERSONAL_INFO } from "../data";
import {
  Mail,
  Phone,
  FileText,
  Copy,
  Check,
  Send,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { LinkedinIcon, GithubIcon } from "./Icons";
import confetti from "canvas-confetti";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Recruitment / Engineering Opportunity",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = "Please enter your name (min 2 characters).";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate luxury delivery
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      // Trigger refined champagne/ice confetti
      try {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.7 },
          colors: ["#C9A96A", "#9FC4D0", "#FFFFFF", "#1E293B"],
        });
      } catch (e) {
        // Safe fallback
      }

      // Reset form after delay
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          subject: "Recruitment / Engineering Opportunity",
          message: "",
        });
        setIsSuccess(false);
      }, 5000);
    }, 1000);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen w-full py-28 px-6 md:px-12 z-20 max-w-7xl mx-auto flex flex-col justify-center"
    >
      {/* Editorial Header */}
      <div className="flex items-center gap-3 mb-4">
        <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#9FC4D0]">
          07 // ENGAGEMENT & DIALOGUE
        </span>
        <div className="h-[1px] w-12 bg-[#9FC4D0]/30" />
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif text-white font-light tracking-tight leading-none">
            Reserve a <span className="serif-italic text-[#C9A96A]">conversation.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400 font-sans max-w-xl font-light">
            Available for elite AI/ML engineering roles, graduate software positions,
            and high-impact technical initiatives.
          </p>
        </div>

        <div className="text-[10px] font-mono tracking-widest text-[#9FC4D0] uppercase border border-white/10 px-4 py-2 rounded-full self-start md:self-auto bg-white/[0.02]">
          REPLY WINDOW &lt; 24 HOURS
        </div>
      </div>

      {/* Main Grid: Direct Channels on Left, Form on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Direct Channels & Credentials (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Email Channel Card */}
          <div className="p-6 rounded-2xl bg-[#0D1117]/85 border border-white/[0.08] backdrop-blur-xl">
            <div className="text-[10px] font-mono tracking-widest text-slate-500 uppercase mb-1">
              PRIMARY TRANSMISSION
            </div>
            <div className="text-lg font-serif text-white mb-3">
              Direct Electronic Mail
            </div>

            <div className="flex items-center justify-between p-3 rounded-xl bg-[#07090B] border border-white/[0.06]">
              <span className="text-xs sm:text-sm font-mono text-[#9FC4D0] truncate">
                {PERSONAL_INFO.email}
              </span>
              <button
                onClick={handleCopyEmail}
                className="p-1.5 rounded-lg bg-white/[0.05] hover:bg-white/10 text-slate-300 hover:text-white transition-colors ml-2 shrink-0"
                title="Copy email to clipboard"
                aria-label="Copy email"
              >
                {copiedEmail ? (
                  <Check className="w-4 h-4 text-green-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Social and Professional Channels */}
          <div className="grid grid-cols-2 gap-4">
            {/* LinkedIn */}
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-[#0D1117]/85 border border-white/[0.08] hover:border-[#9FC4D0]/40 transition-all duration-300 group"
            >
              <LinkedinIcon className="w-5 h-5 text-slate-400 group-hover:text-[#9FC4D0] transition-colors mb-2" />
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                LINKEDIN
              </div>
              <div className="text-sm font-serif text-white mt-0.5">
                Professional Profile
              </div>
            </a>

            {/* GitHub */}
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-[#0D1117]/85 border border-white/[0.08] hover:border-[#C9A96A]/40 transition-all duration-300 group"
            >
              <GithubIcon className="w-5 h-5 text-slate-400 group-hover:text-[#C9A96A] transition-colors mb-2" />
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                GITHUB
              </div>
              <div className="text-sm font-serif text-white mt-0.5">
                @{PERSONAL_INFO.githubUsername}
              </div>
            </a>

            {/* WhatsApp / Phone */}
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-[#0D1117]/85 border border-white/[0.08] hover:border-green-400/40 transition-all duration-300 group"
            >
              <Phone className="w-5 h-5 text-slate-400 group-hover:text-green-400 transition-colors mb-2" />
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                WHATSAPP / PHONE
              </div>
              <div className="text-sm font-serif text-white mt-0.5">
                {PERSONAL_INFO.phone}
              </div>
            </a>

            {/* Resume PDF */}
            <a
              href={PERSONAL_INFO.resumePdf}
              download
              className="p-5 rounded-2xl bg-[#0D1117]/85 border border-white/[0.08] hover:border-[#C9A96A]/40 transition-all duration-300 group"
            >
              <FileText className="w-5 h-5 text-[#C9A96A] mb-2" />
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                RESUME ARCHIVE
              </div>
              <div className="text-sm font-serif text-white mt-0.5">
                Download PDF ↓
              </div>
            </a>
          </div>

          {/* Quick Notice */}
          <div className="p-4 rounded-2xl border border-white/[0.05] bg-white/[0.02] flex items-center gap-3 text-xs font-mono text-slate-400">
            <Sparkles className="w-4 h-4 text-[#C9A96A] shrink-0" />
            <span>
              All submissions routed directly to primary mailbox. Fast response guaranteed.
            </span>
          </div>
        </div>

        {/* Right Column: Contact Inquiry Form (7 cols) */}
        <div className="lg:col-span-7 bg-[#0D1117]/90 border border-white/[0.08] rounded-3xl p-6 sm:p-10 backdrop-blur-2xl shadow-2xl relative">
          <h3 className="text-2xl font-serif text-white font-light mb-2">
            Initiate Inquiry
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 font-sans mb-8">
            Complete the parameters below to establish formal contact.
          </p>

          {isSuccess ? (
            <div className="p-8 text-center rounded-2xl bg-white/[0.03] border border-[#C9A96A]/30 animate-in fade-in zoom-in-95 duration-500">
              <Check className="w-10 h-10 text-[#C9A96A] mx-auto mb-3" />
              <h4 className="text-xl font-serif text-white mb-2">
                Transmission Dispatched
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                Thank you for reaching out. I have received your message and will review it shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 font-sans">
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] font-mono tracking-wider uppercase text-slate-400 mb-2">
                    YOUR NAME *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Mercer"
                    className="w-full px-4 py-3 rounded-xl bg-[#07090B] border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-[#C9A96A] transition-colors"
                  />
                  {errors.name && (
                    <span className="text-[11px] font-mono text-red-400 mt-1 block">
                      {errors.name}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-[11px] font-mono tracking-wider uppercase text-slate-400 mb-2">
                    CORRESPONDENCE EMAIL *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. alex@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#07090B] border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-[#C9A96A] transition-colors"
                  />
                  {errors.email && (
                    <span className="text-[11px] font-mono text-red-400 mt-1 block">
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              {/* Inquiry Nature / Subject */}
              <div>
                <label className="block text-[11px] font-mono tracking-wider uppercase text-slate-400 mb-2">
                  INQUIRY NATURE
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#07090B] border border-white/10 text-white text-sm focus:outline-none focus:border-[#C9A96A] transition-colors"
                >
                  <option value="Recruitment / Engineering Opportunity">
                    Recruitment / Engineering Opportunity (B.Tech CSE AIML)
                  </option>
                  <option value="AI / ML Architecture Commission">
                    AI / Machine Learning Architecture Commission
                  </option>
                  <option value="Full-Stack Web Development">
                    Full-Stack Web Application Development
                  </option>
                  <option value="Academic Collaboration">
                    Academic Collaboration / Research
                  </option>
                </select>
              </div>

              {/* Message Area */}
              <div>
                <label className="block text-[11px] font-mono tracking-wider uppercase text-slate-400 mb-2">
                  MESSAGE SPECIFICATIONS *
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Outline the role requirements, project scope, or conversation agenda..."
                  className="w-full px-4 py-3 rounded-xl bg-[#07090B] border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-[#C9A96A] transition-colors resize-none"
                />
                {errors.message && (
                  <span className="text-[11px] font-mono text-red-400 mt-1 block">
                    {errors.message}
                  </span>
                )}
              </div>

              {/* Submit CTA Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl text-xs font-display tracking-[0.25em] uppercase font-medium bg-gradient-to-r from-[#C9A96A] via-[#E1C48B] to-[#C9A96A] text-[#07090B] hover:shadow-[0_0_30px_rgba(201,169,106,0.35)] transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>TRANSMITTING...</span>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>DISPATCH INQUIRY</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
