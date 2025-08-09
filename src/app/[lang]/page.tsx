import HomePage from "../home-page";
import { siteConfig } from '../data/siteConfig';
import { getDictionary, type Locale } from "../utils/dictionaries";

async function getGithubData() {
  try {
    const userRes = await fetch(siteConfig.gitapi, {
      next: { revalidate: 3600 }
    });

    if (!userRes.ok) {
      console.error("Failed to fetch GitHub user:", await userRes.text());
      return { user: null, repos: [] };
    }
    const user = await userRes.json();

    const repoRes = await fetch(siteConfig.gitapi + `/repos?sort=updated&direction=desc&per_page=6`, {
      next: { revalidate: 3600 }
    });
    
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

export default async function Page({ params: { lang } }: { params: { lang: Locale } }) {
  const { user, repos } = await getGithubData();
  const dictionary = await getDictionary(lang);

  return <HomePage user={user} repos={repos} dictionary={dictionary} />;
}

