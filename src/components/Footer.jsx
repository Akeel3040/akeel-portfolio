import { navLinks, profile, socials } from "../data/portfolio";
import { GitHubIcon, LinkedInIcon, MailIcon, WhatsAppIcon } from "./Icons";

const socialLinks = [
  { href: socials.github, label: "GitHub", Icon: GitHubIcon },
  { href: socials.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
  { href: socials.gmail, label: "Email", Icon: MailIcon },
  { href: socials.whatsapp, label: "WhatsApp", Icon: WhatsAppIcon },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-white/10 bg-white dark:bg-ink-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid sm:grid-cols-3 gap-10">
          <div>
            <a href="#home" className="flex items-center gap-2 font-bold text-lg text-slate-900 dark:text-white">
              <span className="grid place-items-center w-9 h-9 rounded-lg bg-gradient-to-br from-brand-500 to-violet-600 text-white text-sm font-extrabold">
                MA
              </span>
              {profile.name}
            </a>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-400 max-w-xs">
              {profile.title} based in {profile.location}.
            </p>
          </div>

          <nav aria-label="Footer">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
              Explore
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
              Connect
            </h3>
            <div className="mt-4 flex gap-3">
              {socialLinks.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="grid place-items-center w-10 h-10 rounded-lg border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:text-white hover:bg-gradient-to-br hover:from-brand-500 hover:to-violet-600 hover:border-transparent transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <a
              href={profile.resume}
              download
              className="mt-5 inline-block text-sm font-semibold text-brand-600 dark:text-brand-400 hover:underline"
            >
              Download Resume →
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-200 dark:border-white/10 text-center text-sm text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()}{" "}
          <span className="font-medium text-slate-700 dark:text-slate-300">{profile.name}</span>
          {" · "}Built with React, Vite &amp; Tailwind CSS
        </div>
      </div>
    </footer>
  );
}
