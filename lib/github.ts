import { profile } from "./site";

export type GitHubRepo = {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  fork: boolean;
  topics: string[];
  updated_at: string;
};

export type GitHubProfile = {
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
  html_url: string;
};

export type GitHubStats = {
  profile: GitHubProfile;
  totalStars: number;
  languages: { name: string; count: number; share: number }[];
  recentRepos: GitHubRepo[];
};

const REVALIDATE_SECONDS = 3600;

async function getJson<T>(path: string): Promise<T | null> {
  try {
    const response = await fetch(`https://api.github.com${path}`, {
      headers: {
        Accept: "application/vnd.github+json",
        ...(process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {}),
      },
      next: { revalidate: REVALIDATE_SECONDS },
    });

    if (!response.ok) return null;
    return (await response.json()) as T;
  } catch {
    return null;
  }
}

export async function getGitHubStats(): Promise<GitHubStats | null> {
  const [account, repos] = await Promise.all([
    getJson<GitHubProfile>(`/users/${profile.githubHandle}`),
    getJson<GitHubRepo[]>(`/users/${profile.githubHandle}/repos?per_page=100&sort=updated`),
  ]);

  if (!account || !repos) return null;

  const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);

  const counts = new Map<string, number>();
  for (const repo of repos) {
    if (!repo.language) continue;
    counts.set(repo.language, (counts.get(repo.language) ?? 0) + 1);
  }

  const sizedLanguages = [...counts.entries()];
  const languageTotal = sizedLanguages.reduce((sum, [, count]) => sum + count, 0);

  const languages = sizedLanguages
    .map(([name, count]) => ({
      name,
      count,
      share: languageTotal === 0 ? 0 : Math.round((count / languageTotal) * 100),
    }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));

  return {
    profile: account,
    totalStars,
    languages,
    recentRepos: [...repos].sort((a, b) => b.updated_at.localeCompare(a.updated_at)).slice(0, 6),
  };
}
