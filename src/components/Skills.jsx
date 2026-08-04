import Section, { SectionHeading } from "./Section";
import { skills } from "../data/portfolio";

export default function Skills() {
  return (
    <Section id="skills" className="py-20 bg-blue-50 dark:bg-white/[0.02]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="What I work with"
          title="Skills & Technologies"
          subtitle="The languages, frameworks and tools I use to build and ship."
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group) => (
            <div
              key={group.category}
              className="group rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-brand-300 dark:hover:border-brand-500/40 transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <span className="grid place-items-center w-11 h-11 rounded-xl bg-gradient-to-br from-brand-500/10 to-violet-500/10 text-xl">
                  {group.icon}
                </span>
                <h3 className="font-semibold text-slate-900 dark:text-white">
                  {group.category}
                </h3>
              </div>

              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="px-3 py-1.5 rounded-lg text-sm font-medium bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 group-hover:border-brand-200 dark:group-hover:border-brand-500/30 transition-colors"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
