import Section, { SectionHeading } from "./Section";
import { services } from "../data/portfolio";

export default function Services() {
  return (
    <Section id="services" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="How I can help"
          title="Services"
          subtitle="What I offer to teams and clients, from first prototype to production."
        />

        <div className="mt-12 grid sm:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-brand-300 dark:hover:border-brand-500/40 transition-all duration-300"
            >
              <span className="grid place-items-center w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500/10 to-violet-500/10 text-2xl group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </span>
              <h3 className="mt-5 text-lg font-semibold text-slate-900 dark:text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
