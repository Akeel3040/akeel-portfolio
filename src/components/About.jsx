import Section, { SectionHeading } from "./Section";
import { education, profile } from "../data/portfolio";

export default function About() {
  return (
    <Section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="Get to know me"
          title="About Me"
          subtitle="A little background on who I am and what I'm working toward."
        />

        <div className="mt-12 grid lg:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
              Who I am
            </h3>
            <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">
              {profile.summary}
            </p>
            <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">
              I care about clean, efficient, user-friendly products — and about
              shipping things that actually work. I'm strongest in problem
              solving and debugging, and I enjoy the part of the job where
              frontend, backend and data all have to meet in the middle.
            </p>

            <dl className="mt-6 grid sm:grid-cols-2 gap-4 text-sm">
              <div>
                <dt className="text-slate-500 dark:text-slate-400">Location</dt>
                <dd className="mt-1 font-medium text-slate-900 dark:text-white">
                  {profile.location}
                </dd>
              </div>
              <div>
                <dt className="text-slate-500 dark:text-slate-400">Email</dt>
                <dd className="mt-1 font-medium break-all text-slate-900 dark:text-white">
                  {profile.email}
                </dd>
              </div>
              <div>
                <dt className="text-slate-500 dark:text-slate-400">Phone</dt>
                <dd className="mt-1 font-medium text-slate-900 dark:text-white">
                  {profile.phone}
                </dd>
              </div>
              <div>
                <dt className="text-slate-500 dark:text-slate-400">Status</dt>
                <dd className="mt-1 font-medium text-emerald-600 dark:text-emerald-400">
                  Available for work
                </dd>
              </div>
            </dl>
          </div>

          <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
              Education
            </h3>
            <ol className="mt-6 relative border-l border-slate-200 dark:border-white/10 space-y-8 pl-6">
              {education.map((item) => (
                <li key={item.degree} className="relative">
                  <span className="absolute -left-[34px] grid place-items-center w-8 h-8 rounded-full bg-gradient-to-br from-brand-500 to-violet-600 text-white text-sm">
                    {item.icon}
                  </span>
                  <h4 className="font-semibold text-slate-900 dark:text-white">
                    {item.degree}
                  </h4>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                    {item.institute}
                  </p>
                  <p className="mt-1 text-xs font-medium text-brand-600 dark:text-brand-400">
                    {item.detail}
                  </p>
                </li>
              ))}
            </ol>

            <div className="mt-8 rounded-xl bg-gradient-to-br from-brand-50 to-violet-50 dark:from-brand-500/10 dark:to-violet-500/10 border border-brand-100 dark:border-white/10 p-5">
              <h4 className="font-semibold text-slate-900 dark:text-white">
                Soft skills
              </h4>
              <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <li>• Strong team collaboration and communication</li>
                <li>• Quick learner, adaptable to new technologies</li>
                <li>• Committed to high-quality, reliable solutions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
