"use client";

import { ProjectCard } from "./components/ProjectCard";
import { Container, Heading, SimpleGrid, VStack, Text } from "@chakra-ui/react";
import { siteConfig } from './data/siteConfig';
import { TextDecryptOnScroll } from "./components/TextDecryptOnScroll";

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  language: string;
  html_url: string;
  homepage?: string;
}
type Dictionary = typeof siteConfig.translations.pt;

interface ProjetosPageProps {
  repos: GitHubRepo[];
  dictionary: Dictionary;
}

export default function ProjectsPageClient({ repos, dictionary }: ProjetosPageProps) {
  return (
    <Container maxW="container.xl" py={{ base: 10, md: 20 }}>
      <VStack spacing={10}>
        <VStack spacing={4} textAlign="center">
          <Heading as="h1" size="2xl">
            <TextDecryptOnScroll as="span">
              {dictionary.ui.allProjectsTitle}
            </TextDecryptOnScroll>
          </Heading>
          <Text color="gray.400">
            <TextDecryptOnScroll as="span">
              {dictionary.ui.allProjectsDescription}
            </TextDecryptOnScroll>
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} w="100%">
          {repos.map((repo) => (
            <ProjectCard
              key={repo.id}
              title={repo.name}
              description={repo.description}
              tags={[repo.language]}
              repoUrl={repo.html_url}
              liveUrl={repo.homepage}
              dictionary={dictionary}
            />
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
}