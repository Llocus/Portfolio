"use client";

import { Container, Flex, Heading, HStack, Link } from "@chakra-ui/react";
import NextLink from 'next/link';
import { siteConfig } from '../data/siteConfig';
import { TextDecryptOnScroll } from "./TextDecryptOnScroll";
import { Locale } from "../utils/dictionaries";

interface HeaderProps {
  lang: Locale;
  uiTranslations: {
    navProjects: string;
    navAbout: string;
    navResume: string;
  };
}

export const Header = ({ uiTranslations }: HeaderProps) => {
  return (
    <Flex 
      as="header" 
      w="100%" 
      p={4} 
      position="sticky" 
      top="0" 
      zIndex={10} 
      bg="rgba(13, 17, 23, 0.8)" 
      backdropFilter="blur(10px)"
      display={{ base: 'none', md: 'flex' }}
    >
      <Container maxW="container.xl" display="flex" justifyContent="space-between" alignItems="center">
          <Heading size="md" as={NextLink} href="/">
          <TextDecryptOnScroll as="span">
            {siteConfig.personalData.name}
          </TextDecryptOnScroll>
          </Heading>
          <HStack spacing={{ base: 2, md: 4 }}>
              <Link as={NextLink} href="/#projects" fontSize={{ base: 'sm', md: 'md' }}>
                <TextDecryptOnScroll as="span">
                  {uiTranslations.navProjects}
                </TextDecryptOnScroll>
              </Link>
              <Link as={NextLink} href="/#about" fontSize={{ base: 'sm', md: 'md' }}>
                <TextDecryptOnScroll as="span">
                  {uiTranslations.navAbout}
                </TextDecryptOnScroll>
              </Link>
              <Link as={NextLink} href="/resume" fontSize={{ base: 'sm', md: 'md' }}>
                <TextDecryptOnScroll as="span">
                  {uiTranslations.navResume}
                </TextDecryptOnScroll>
              </Link>
          </HStack>
      </Container>
    </Flex>
  );
};