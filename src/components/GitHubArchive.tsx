import React, { useState, useEffect } from "react";
import { GitHubRepo } from "../types";
import { PERSONAL_INFO } from "../data";
import { Star, GitFork, ExternalLink, Search, FolderGit2, AlertCircle } from "lucide-react";

export const GitHubArchive: React.FC = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState<string>("ALL");

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(
          `https://api.github.com/users/${PERSONAL_INFO.githubUsername}/repos?sort=updated&per_page=100`
        );

        if (!res.ok) {
          throw new Error(`GitHub API returned status ${res.status}`);
        }

        const data: GitHubRepo[] = await res.json();
        // Filter out forks if desired, or keep all public
        setRepos(data);
        setError(null);
      } catch (err: any) {
        console.warn("GitHub fetch note:", err.message);
        setError("GitHub live sync unavailable. Displaying local archives.");
        // Fallback repo items
        setRepos([
          {
            id: 101,
            name: "AK-Gym",
            full_name: `${PERSONAL_INFO.githubUsername}/AK-Gym`,
            description: "Modern commercial gym management system with role-based auth, Razorpay payments & QR check-in.",
            html_url: `https://github.com/${PERSONAL_INFO.githubUsername}/AK-Gym`,
            homepage: "https://ak-gym.lovestoblog.com/",
            stargazers_count: 5,
            forks_count: 2,
            language: "PHP",
            topics: ["php", "mysql", "gym-management", "razorpay"],
            updated_at: "2024-11-15T00:00:00Z",
            archived: false,
            fork: false,
          },
          {
            id: 102,
            name: "Video-Snap-AI",
            full_name: `${PERSONAL_INFO.githubUsername}/Video-Snap-AI`,
            description: "Automated AI-powered video and reel generation pipeline built in Python with data preprocessing.",
            html_url: `https://github.com/${PERSONAL_INFO.githubUsername}/Video-Snap-AI`,
            homepage: null,
            stargazers_count: 4,
            forks_count: 1,
            language: "Python",
            topics: ["python", "ai", "machine-learning", "automation"],
            updated_at: "2024-10-10T00:00:00Z",
            archived: false,
            fork: false,
          },
          {
            id: 103,
            name: "akeel-portfolio",
            full_name: `${PERSONAL_INFO.githubUsername}/akeel-portfolio`,
            description: "Cinematic portfolio showcasing machine learning architectures, full-stack systems and credentials.",
            html_url: `https://github.com/${PERSONAL_INFO.githubUsername}/akeel-portfolio`,
            homepage: "https://akeel-portfolio.vercel.app",
            stargazers_count: 3,
            forks_count: 0,
            language: "TypeScript",
            topics: ["react", "threejs", "portfolio", "tailwind"],
            updated_at: "2026-10-26T00:00:00Z",
            archived: false,
            fork: false,
          },
        ]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRepos();
  }, []);

  // Filtered repositories
  const filteredRepos = repos.filter((r) => {
    const matchesQuery =
      r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (r.description && r.description.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesLang =
      selectedLanguage === "ALL" ||
      (r.language && r.language.toLowerCase() === selectedLanguage.toLowerCase());

    return matchesQuery && matchesLang;
  });

  const languages = ["ALL", ...Array.from(new Set(repos.map((r) => r.language).filter(Boolean)))];

  const getLanguageColor = (lang: string | null) => {
    switch (lang?.toLowerCase()) {
      case "python":
        return "bg-blue-400";
      case "php":
        return "bg-indigo-400";
      case "javascript":
        return "bg-yellow-400";
      case "typescript":
        return "bg-sky-400";
      case "html":
        return "bg-orange-400";
      case "css":
        return "bg-pink-400";
      default:
        return "bg-slate-400";
    }
  };

  return (
    <div className="mt-20 pt-16 border-t border-white/[0.08]">
      {/* Archive Header & Controls */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div>
          <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-[#C9A96A] uppercase mb-2">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>GITHUB DIRECTORY ARCHIVE</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif text-white font-light">
            Public Repositories ({repos.length})
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 font-sans mt-1">
            Synchronized directly from @{PERSONAL_INFO.githubUsername} via GitHub REST API.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
          {/* Search Input */}
          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Search repositories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 rounded-xl text-xs font-mono bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#C9A96A]"
            />
          </div>

          {/* Language Selector */}
          <select
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            className="w-full sm:w-auto px-3 py-2 rounded-xl text-xs font-mono bg-[#0D1117] border border-white/10 text-slate-300 focus:outline-none focus:border-[#C9A96A]"
          >
            {languages.map((l) => (
              <option key={l} value={l as string}>
                {l}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* API Notice if any */}
      {error && (
        <div className="flex items-center gap-2 p-3 mb-6 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-300">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Grid of Repository Cards */}
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div
              key={n}
              className="h-36 rounded-2xl bg-[#0D1117]/60 border border-white/[0.05] animate-pulse"
            />
          ))}
        </div>
      ) : filteredRepos.length === 0 ? (
        <div className="text-center py-12 text-xs font-mono text-slate-500 border border-dashed border-white/10 rounded-2xl">
          No repositories match "{searchQuery}"
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredRepos.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between p-5 rounded-2xl bg-[#0D1117]/75 hover:bg-[#121722] border border-white/[0.06] hover:border-[#C9A96A]/30 transition-all duration-300 hover:-translate-y-1 shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h4 className="text-base font-serif text-white group-hover:text-[#9FC4D0] transition-colors truncate">
                    {repo.name}
                  </h4>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#C9A96A] shrink-0" />
                </div>

                <p className="text-xs text-slate-400 font-sans line-clamp-2 leading-relaxed">
                  {repo.description || "Experimental architecture and codebase exploration."}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/[0.05] flex items-center justify-between text-[11px] font-mono text-slate-400">
                {/* Language */}
                <div className="flex items-center gap-1.5">
                  <span
                    className={`w-2 h-2 rounded-full ${getLanguageColor(
                      repo.language
                    )}`}
                  />
                  <span>{repo.language || "Plain"}</span>
                </div>

                {/* Stars & Forks */}
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 text-slate-400 group-hover:text-[#C9A96A]">
                    <Star className="w-3 h-3" />
                    <span>{repo.stargazers_count}</span>
                  </span>
                  <span className="flex items-center gap-1 text-slate-400">
                    <GitFork className="w-3 h-3" />
                    <span>{repo.forks_count}</span>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};
