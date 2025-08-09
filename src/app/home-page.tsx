"use client";

import { useState, useEffect } from "react";
import { Box, Button, Flex, HStack, Heading, Text, VStack, SimpleGrid, Link, Container, Avatar, Spinner } from "@chakra-ui/react";
import NextLink from 'next/link';
import { ProjectCard } from "./components/ProjectCard";
import { SkillsGrid } from "./components/SkillsGrid";
import { siteConfig } from './data/siteConfig';
import { TextDecryptOnScroll } from "./components/TextDecryptOnScroll";

interface GitHubUser { 
  name: string;
  avatar_url: string;
}
interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  language: string;
  html_url: string;
  homepage?: string;
}
type Dictionary = typeof siteConfig.translations.pt;

interface HomePageProps { 
  user: GitHubUser | null;
  repos: GitHubRepo[];
  dictionary: Dictionary;
}

export default function HomePage({ user, repos, dictionary }: HomePageProps) {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <Flex minH="100vh" align="center" justify="center">
        <Spinner size="xl" color="purple.500" />
      </Flex>
    );
  }

  if (!user) {
    return (
      <Flex minH="100vh" align="center" justify="center" direction="column" gap={4} textAlign="center" p={4}>
        <Heading size="lg">{dictionary.ui.gitSomethingWrong}</Heading>
        <Text>{dictionary.ui.gitFailedLoad}</Text>
        <Text color="gray.500">{dictionary.ui.gitFailedDetails}</Text>
      </Flex>
    );
  }

  const experiences = dictionary.experiences;

  return (
    <Container maxW="container.xl" pt={{ base: 4, md: 10 }}>
      <Flex as="section" id="hero" w="100%" minH={{ base: 'auto', md: 'calc(80vh)' }} align="center" justify="center" py={20}>
          <VStack spacing={6} textAlign="center">
              <Avatar size="2xl" name={user.name} src={user.avatar_url} border="4px solid" borderColor="purple.400" />
              <TextDecryptOnScroll as="h1" fontSize={{ base: '3xl', md: '4xl' }} fontWeight="bold">
                  {user.name}
              </TextDecryptOnScroll>
              <TextDecryptOnScroll fontSize={{ base: 'md', md: '2xl' }} color="purple.300">
                  {dictionary.title}
              </TextDecryptOnScroll>
              <VStack spacing={4} pt={4} w="full" maxW="320px" mx="auto">
                  <Button as={Link} href="#contact" colorScheme="purple" size={{ base: 'md', md: 'lg' }} w="full">
                    <TextDecryptOnScroll as="span">
                        {dictionary.ui.heroContactBtn}
                    </TextDecryptOnScroll>
                  </Button>
                  <Button as={Link} href={dictionary.resume} download variant="outline" colorScheme="purple" size={{ base: 'md', md: 'lg' }} w="full">
                    <TextDecryptOnScroll as="span">
                        {dictionary.ui.heroDownloadCvBtn}
                    </TextDecryptOnScroll>
                  </Button>
              </VStack>
          </VStack>
      </Flex>

      <VStack as="section" id="experience" w="100%" spacing={8} py={20}>
         <TextDecryptOnScroll as="h2" fontSize={{ base: '2xl', md: '3xl' }} fontWeight="bold">
            {dictionary.ui.experienceTitle}
         </TextDecryptOnScroll>
         <VStack spacing={8} align="stretch" w={{ base: '100%', lg: '80%' }}>
           {experiences.map((exp, index) => (
             <Box 
               key={index}
               p={6}
               bg="gray.900"
               borderRadius="lg"
               border="1px solid"
               borderColor="gray.700"
               borderLeft="4px solid"
               borderLeftColor="purple.400"
             >
               <TextDecryptOnScroll as="h3" fontSize="xl" fontWeight="bold">{exp.role}</TextDecryptOnScroll>
               <TextDecryptOnScroll color="purple.300" fontWeight="bold">{`${exp.company} | ${exp.period}`}</TextDecryptOnScroll>
               <TextDecryptOnScroll mt={2} color="gray.400">{exp.description}</TextDecryptOnScroll>
             </Box>
           ))}
         </VStack>
      </VStack>

      <VStack as="section" id="projects" w="100%" spacing={10} py={20}>
         <TextDecryptOnScroll as="h2" fontSize={{ base: '2xl', md: '3xl' }} fontWeight="bold">
            {dictionary.ui.recentProjectsTitle}
         </TextDecryptOnScroll>
         <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} w="100%">
            {repos.map((repo) => (
               <ProjectCard 
                  key={repo.id} 
                  title={repo.name}
                  description={repo.description}
                  tags={[repo.language]}
                  repoUrl={repo.html_url}
                  liveUrl={repo.homepage}
               />
            ))}
         </SimpleGrid>
         <Button as={NextLink} href="/projects" variant="solid" colorScheme="purple" size="lg" mt={8}>
            <TextDecryptOnScroll as="span">
                {dictionary.ui.allProjectsBtn}
            </TextDecryptOnScroll>
         </Button>
      </VStack>

      <VStack as="section" id="about" w="100%" spacing={12} py={20}>
          <TextDecryptOnScroll as="h2" fontSize={{ base: '2xl', md: '3xl' }} fontWeight="bold">
            {dictionary.ui.aboutTitle}
          </TextDecryptOnScroll>
          <Flex direction={{ base: "column", lg: "row" }} gap={12} align="center">
              <VStack flex="1" align="start" spacing={4}>
                  <TextDecryptOnScroll as="h3" fontSize={{ base: 'xl', md: '2xl' }} fontWeight="bold">
                    {dictionary.ui.aboutSubtitle}
                  </TextDecryptOnScroll>
                  {dictionary.aboutMe.map((paragraph, index) => (
                    <span key={index} color="gray.300">
                      {paragraph}
                    </span>
                  ))}
              </VStack>
              <Box flex="1.5" w="100%">
                  <SkillsGrid />
              </Box>
          </Flex>
      </VStack>
    </Container>
  );
}