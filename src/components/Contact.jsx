import { useState } from "react";
import Section, { SectionHeading } from "./Section";
import { profile, socials } from "../data/portfolio";
import { GitHubIcon, LinkedInIcon, MailIcon, WhatsAppIcon } from "./Icons";

const channels = [
  {
    label: "Email",
    value: profile.email,
    href: socials.gmail,
    Icon: MailIcon,
    color: "text-rose-500",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/m-akeel",
    href: socials.linkedin,
    Icon: LinkedInIcon,
    color: "text-blue-600",
  },
  {
    label: "GitHub",
    value: "github.com/Akeel3040",
    href: socials.github,
    Icon: GitHubIcon,
    color: "text-slate-900 dark:text-white",
  },
  {
    label: "WhatsApp",
    value: profile.phone,
    href: socials.whatsapp,
    Icon: WhatsAppIcon,
    color: "text-emerald-500",
  },
];

const EMPTY_FORM = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(EMPTY_FORM);

  const updateField = (field) => (event) =>
    setForm((current) => ({ ...current, [field]: event.target.value }));

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = `Project Inquiry from ${form.name}`;
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const inputClass =
    "w-full p-4 rounded-xl border border-slate-300 dark:border-white/10 bg-white dark:bg-white/5 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition";

  return (
    <Section id="contact" className="py-20 bg-slate-50 dark:bg-white/[0.02]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="Let's talk"
          title="Get in Touch"
          subtitle="Have a project idea or a role in mind? Send me a message — I usually reply within 24 hours."
        />

        <div className="mt-12 grid lg:grid-cols-[0.9fr_1.1fr] gap-8">
          <div className="space-y-4">
            {channels.map(({ label, value, href, Icon, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 p-5 shadow-sm hover:shadow-lg hover:-translate-y-0.5 hover:border-brand-300 dark:hover:border-brand-500/40 transition-all duration-300"
              >
                <span className={`shrink-0 ${color}`}>
                  <Icon className="w-6 h-6" />
                </span>
                <span className="min-w-0">
                  <span className="block font-semibold text-slate-900 dark:text-white">
                    {label}
                  </span>
                  <span className="block text-sm text-slate-600 dark:text-slate-400 break-all">
                    {value}
                  </span>
                </span>
              </a>
            ))}
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 p-7 shadow-sm grid sm:grid-cols-2 gap-5"
          >
            <div>
              <label htmlFor="contact-name" className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">
                Your name
              </label>
              <input
                id="contact-name"
                required
                value={form.name}
                onChange={updateField("name")}
                placeholder="Jane Doe"
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="contact-email" className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">
                Your email
              </label>
              <input
                id="contact-email"
                required
                type="email"
                value={form.email}
                onChange={updateField("email")}
                placeholder="jane@example.com"
                className={inputClass}
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="contact-message" className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">
                Project details
              </label>
              <textarea
                id="contact-message"
                required
                rows="6"
                value={form.message}
                onChange={updateField("message")}
                placeholder="Tell me a bit about what you're building…"
                className={`${inputClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              className="sm:col-span-2 py-3.5 px-6 rounded-xl font-semibold text-white bg-gradient-to-r from-brand-500 to-violet-600 shadow-lg shadow-brand-500/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              Let's Work Together
            </button>

            <p className="sm:col-span-2 text-center text-xs text-slate-500 dark:text-slate-400">
              This opens your email client with the message pre-filled.
            </p>
          </form>
        </div>
      </div>
    </Section>
  );
}
