import useScrollReveal from "../hooks/useScrollReveal";

/** Section wrapper that fades its content in on first scroll into view. */
export default function Section({ id, className = "", children }) {
  const [ref, visible] = useScrollReveal();

  return (
    <section
      id={id}
      ref={ref}
      className={`scroll-mt-24 transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </section>
  );
}

/** Consistent eyebrow + title + subtitle heading used by every section. */
export function SectionHeading({ eyebrow, title, subtitle, align = "center" }) {
  const alignment = align === "left" ? "text-left" : "text-center mx-auto";

  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow && (
        <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-brand-600 dark:text-brand-400">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
        {title}
      </h2>
      <div
        className={`mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-brand-500 to-violet-500 ${
          align === "left" ? "" : "mx-auto"
        }`}
      />
      {subtitle && (
        <p className="mt-5 text-slate-600 dark:text-slate-400 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
