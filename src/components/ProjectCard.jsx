import { ExternalLinkIcon, GitHubIcon } from "./Icons";

/**
 * One project card. `liveUrl` may be null (e.g. a locally-run module),
 * in which case only the repository link is rendered.
 */
export default function ProjectCard({ project }) {
  const { title, subtitle, description, highlights, tags, liveUrl, repoUrl, badge, icon, accent } =
    project;

  return (
    <article className="group flex flex-col rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300">
      <div className={`relative h-28 bg-gradient-to-br ${accent} flex items-center justify-center`}>
        <span className="text-5xl drop-shadow-lg" aria-hidden="true">
          {icon}
        </span>
        {badge && (
          <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-white/90 text-slate-800">
            {badge}
          </span>
        )}
      </div>

      <div className="flex flex-col flex-1 p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
          {subtitle}
        </p>
        <h3 className="mt-2 text-lg font-bold text-slate-900 dark:text-white">
          {title}
        </h3>
        <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          {description}
        </p>

        {highlights?.length > 0 && (
          <ul className="mt-4 space-y-1.5">
            {highlights.map((point) => (
              <li
                key={point}
                className="flex gap-2 text-sm text-slate-600 dark:text-slate-400"
              >
                <span className="text-brand-500 shrink-0" aria-hidden="true">
                  ✓
                </span>
                {point}
              </li>
            ))}
          </ul>
        )}

        <ul className="mt-5 flex flex-wrap gap-2 mb-auto">
          {tags.map((tag) => (
            <li
              key={tag}
              className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-6 pt-5 border-t border-slate-100 dark:border-white/10 flex flex-wrap gap-3">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-brand-500 to-violet-600 hover:opacity-90 transition"
            >
              <ExternalLinkIcon className="w-4 h-4" />
              Live Demo
            </a>
          )}
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold border border-slate-300 dark:border-white/15 text-slate-700 dark:text-slate-200 hover:border-brand-400 hover:text-brand-600 dark:hover:text-brand-400 transition"
          >
            <GitHubIcon className="w-4 h-4" />
            Source Code
          </a>
        </div>
      </div>
    </article>
  );
}
