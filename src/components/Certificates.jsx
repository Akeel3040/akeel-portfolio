import Section, { SectionHeading } from "./Section";
import { certificates } from "../data/portfolio";
import { CertificateIcon, ExternalLinkIcon } from "./Icons";

export default function Certificates() {
  return (
    <Section id="certificates" className="py-20 bg-blue-50 dark:bg-white/[0.02]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="Verified learning"
          title="Certifications"
          subtitle="Courses I've completed, with the original certificates available to view."
        />

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {certificates.map((cert) => (
            <article
              key={cert.credentialId}
              className="group relative rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 p-6 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div
                className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${cert.accent}`}
                aria-hidden="true"
              />

              <div className="flex items-start gap-4">
                <span
                  className={`grid place-items-center shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${cert.accent} text-2xl shadow-lg`}
                  aria-hidden="true"
                >
                  {cert.icon}
                </span>
                <div className="min-w-0">
                  <h3 className="font-bold text-slate-900 dark:text-white leading-snug">
                    {cert.title}
                  </h3>
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-400">
                    <CertificateIcon className="w-4 h-4 text-brand-500" />
                    {cert.issuer}
                    <span aria-hidden="true">·</span>
                    {cert.date}
                  </p>
                </div>
              </div>

              <ul className="mt-5 flex flex-wrap gap-2">
                {cert.skills.map((skill) => (
                  <li
                    key={skill}
                    className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10"
                  >
                    {skill}
                  </li>
                ))}
              </ul>

              <p className="mt-5 text-[11px] uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Credential ID
              </p>
              <p className="mt-1 text-xs font-mono break-all text-slate-600 dark:text-slate-400">
                {cert.credentialId}
              </p>

              <a
                href={cert.file}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-brand-500 to-violet-600 hover:opacity-90 transition"
              >
                <ExternalLinkIcon className="w-4 h-4" />
                View Certificate
              </a>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
