"use client";

import { Heading, Text, HStack, Link, Button, Image, AspectRatio, VStack, Icon } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { TextDecryptOnScroll } from "./TextDecryptOnScroll";
import { languageStyles, siteConfig } from "../data/siteConfig";

type Dictionary = typeof siteConfig.translations.pt;

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  repoUrl: string;
  liveUrl?: string;
  imageUrl?: string;
  dictionary: Dictionary;
}

export const ProjectCard = ({ title, description, tags, repoUrl, imageUrl, dictionary }: ProjectCardProps) => {
  const language = tags && tags.length > 0 ? tags[0] : 'default';
  const style = languageStyles[language] || languageStyles.default;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{ height: '100%' }}
    >
      <VStack
        spacing={4}
        p={5}
        bg="gray.900"
        borderRadius="lg"
        border="1px solid"
        borderColor="gray.700"
        transition="all 0.3s ease"
        _hover={{
          transform: 'translateY(-5px)',
          borderColor: style.color,
          boxShadow: `0 0 15px ${style.color}30`
        }}
        align="start"
        height="100%"
        borderTop="4px solid"
        borderTopColor={style.color}
      >
        {imageUrl && (
          <AspectRatio ratio={16 / 9} w="100%">
            <Image src={imageUrl} alt={`Mockup do projeto ${title}`} borderRadius="md" objectFit="cover" />
          </AspectRatio>
        )}

        <VStack align="start" flex="1" w="100%">
          <Heading size="md">
            <TextDecryptOnScroll as="span">
              {title}
            </TextDecryptOnScroll>
          </Heading>
          <Text color="gray.400" flex="1" fontSize="sm">
            <TextDecryptOnScroll as="span">
              {description || dictionary.ui.gitNoDescription}
            </TextDecryptOnScroll>
          </Text>
        </VStack>

        <HStack justify="space-between" w="100%" align="center">
          <HStack>
            <Icon as={style.icon} color={style.color} />
            <Text fontSize="sm" color="gray.300">
              <TextDecryptOnScroll as="span">
                {language || 'N/A'}
              </TextDecryptOnScroll>
            </Text>
          </HStack>
          <Link href={repoUrl} isExternal>
            <Button size="sm" variant="outline" colorScheme="purple">
              <TextDecryptOnScroll as="span">
                {dictionary.ui.projectsSeeCodeBtn}
              </TextDecryptOnScroll>
            </Button>
          </Link>
        </HStack>
      </VStack>
    </motion.div>
  );
};