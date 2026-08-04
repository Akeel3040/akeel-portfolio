import Section, { SectionHeading } from "./Section";
import ProjectCard from "./ProjectCard";
import { projects, socials } from "../data/portfolio";
import { GitHubIcon } from "./Icons";

export default function Projects() {
  return (
    <Section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="Selected work"
          title="Featured Projects"
          subtitle="Applications I've designed, built and shipped — from full-stack systems to AI tooling."
        />

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold border-2 border-slate-300 dark:border-white/15 text-slate-700 dark:text-slate-200 hover:border-brand-500 hover:text-brand-600 dark:hover:text-brand-400 hover:-translate-y-0.5 transition-all duration-300"
          >
            <GitHubIcon className="w-5 h-5" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </Section>
  );
}
