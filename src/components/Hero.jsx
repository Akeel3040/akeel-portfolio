import { profile, socials, stats } from "../data/portfolio";
import VoiceIntro from "./VoiceIntro";
import { DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon, WhatsAppIcon } from "./Icons";

const socialLinks = [
  { href: socials.github, label: "GitHub", Icon: GitHubIcon },
  { href: socials.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
  { href: socials.gmail, label: "Email", Icon: MailIcon },
  { href: socials.whatsapp, label: "WhatsApp", Icon: WhatsAppIcon },
];

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-brand-400/20 blur-3xl" />
        <div className="absolute top-20 -right-20 w-80 h-80 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(15,23,42,0.06)_1px,transparent_0)] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] [background-size:32px_32px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            {profile.available}
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-brand-500 via-blue-500 to-violet-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-pan">
              {profile.name}
            </span>
          </h1>

          <p className="mt-4 text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-200">
            {profile.title}
          </p>
          <p className="mt-2 text-sm font-medium tracking-wide text-brand-600 dark:text-brand-400">
            {profile.tagline}
          </p>

          <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-slate-600 dark:text-slate-400 leading-relaxed">
            {profile.summary}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
            <a
              href={profile.resume}
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-brand-500 to-violet-600 shadow-lg shadow-brand-500/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              <DownloadIcon className="w-5 h-5" />
              Download Resume
            </a>
            <VoiceIntro />
          </div>

          <div className="mt-8 flex items-center justify-center lg:justify-start gap-3">
            {socialLinks.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className="grid place-items-center w-11 h-11 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:text-white hover:bg-gradient-to-br hover:from-brand-500 hover:to-violet-600 hover:border-transparent hover:-translate-y-0.5 transition-all duration-300"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-8">
          <div className="relative animate-float">
            <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-brand-500 to-violet-600 blur-xl opacity-40" />
            <img
              src={profile.photo}
              alt={profile.name}
              className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full object-cover border-4 border-white dark:border-ink-900 shadow-2xl"
            />
          </div>

          <dl className="grid grid-cols-2 gap-3 w-full max-w-xs">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur p-4 text-center"
              >
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-2xl font-bold text-brand-600 dark:text-brand-400">
                  {stat.value}
                </dd>
                <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">{stat.label}</p>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
