import HomePage from "@/app/home-page";
import { getDictionary, type Locale } from "../utils/dictionaries";
import { siteConfig } from "../data/siteConfig";

async function getGithubData() {
  try {
    const userRes = await fetch(`https://api.github.com/users/${siteConfig.socialLinks.github.split('/').pop()}`, { next: { revalidate: 3600 } });
    if (!userRes.ok) {
      console.error("Failed to fetch GitHub user:", await userRes.text());
      return { user: null, repos: [] };
    }
    const user = await userRes.json();

    const repoRes = await fetch(`https://api.github.com/users/${siteConfig.socialLinks.github.split('/').pop()}/repos?sort=pushed&per_page=6`, { next: { revalidate: 3600 } });
    if (!repoRes.ok) {
      console.error("Failed to fetch GitHub repositories:", await repoRes.text());
      return { user, repos: [] };
    }
    const repos = await repoRes.json();
    return { user, repos };
  } catch (error) {
    console.error("Network or other error fetching from GitHub API:", error);
    return { user: null, repos: [] };
  }
}

export default async function Page({ params }: { params: { lang: Locale } }) {
  const { lang } = params;
  const { user, repos } = await getGithubData();
  const dictionary = await getDictionary(lang);

  return <HomePage user={user} repos={repos} dictionary={dictionary} />;
}
