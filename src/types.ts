export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  updated_at: string;
  archived: boolean;
  fork: boolean;
}

export type NeuralCoreMode = "hero" | "about" | "skills" | "exploded";

export interface AudioFrequencyData {
  isPlaying: boolean;
  frequency: number; // 0 to 1 normalized
  volume: number;
}
