"use client";

import { Box, Button, Container, Heading, Link, Text, VStack } from "@chakra-ui/react";
import { SkillsGrid } from "./components/SkillsGrid";
import { siteConfig } from './data/siteConfig';
import { TextDecryptOnScroll } from "./components/TextDecryptOnScroll";

type Dictionary = typeof siteConfig.translations.pt;

interface ResumePageProps {
  dictionary: Dictionary;
}

export default function ResumePageClient({ dictionary }: ResumePageProps) {
    const experiences = dictionary.experiences;
    return (
        <Container maxW="container.lg" py={{ base: 10, md: 20 }}>
            <VStack spacing={12} align="stretch">
                <VStack spacing={4} textAlign="center">
                    <Heading as="h1" size="2xl">
                        <TextDecryptOnScroll as="span">
                            {dictionary.ui.resumeTitle}
                        </TextDecryptOnScroll>
                    </Heading>
                    <Text color="gray.400">
                        <TextDecryptOnScroll as="span">
                            {dictionary.ui.resumeDescription}
                        </TextDecryptOnScroll>
                    </Text>
                    <Button 
                        as={Link} 
                        href={dictionary.resume}
                        download 
                        variant="solid" 
                        colorScheme="purple"
                        size="lg"
                    >
                        <TextDecryptOnScroll as="span">
                            {dictionary.ui.resumeDownloadBtn}
                        </TextDecryptOnScroll>
                    </Button>
                </VStack>
                
                <VStack spacing={8} align="stretch">
                    <Heading as="h2" size="xl" textAlign="center">
                        <TextDecryptOnScroll as="span">
                            {dictionary.ui.experienceTitle}
                        </TextDecryptOnScroll>
                    </Heading>
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
                            <TextDecryptOnScroll color="purple.300" fontWeight="bold">
                                {`${exp.company} | ${exp.period}`}
                            </TextDecryptOnScroll>
                            <TextDecryptOnScroll mt={2} color="gray.400">
                                {exp.description}
                            </TextDecryptOnScroll>
                        </Box>
                    ))}
                </VStack>

                <VStack spacing={8} align="stretch">
                    <Heading as="h2" size="xl" textAlign="center">
                        <TextDecryptOnScroll as="span">
                            {dictionary.ui.resumeTools}
                        </TextDecryptOnScroll>
                    </Heading>
                    <Box p={{ base: 2, md: 6 }} bg="gray.900" borderRadius="lg" border="1px solid" borderColor="gray.700">
                        <SkillsGrid />
                    </Box>
                </VStack>
            </VStack>
        </Container>
    );
}