import { getDictionary, type Locale } from "../../utils/dictionaries";
import { siteConfig } from "../../data/siteConfig";
import ProjectsPage from "../../../app/projects-page";

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  language: string;
  html_url: string;
  homepage?: string;
}

async function getAllGithubRepos(): Promise<GitHubRepo[]> {
    const res = await fetch(`https://api.github.com/users/${siteConfig.socialLinks.github.split('/').pop()}/repos?sort=updated&direction=desc&per_page=100`, { 
        next: { revalidate: 3600 }
    });

    if (!res.ok) {
        console.error("Failed to fetch all repositories");
        return [];
    }
    
    return res.json();
}

export default async function ProjetosPage({ params: { lang } }: { params: { lang: Locale } }) {
  const repos = await getAllGithubRepos();
  const dictionary = await getDictionary(lang);

  return <ProjectsPage repos={repos} dictionary={dictionary} />;
}