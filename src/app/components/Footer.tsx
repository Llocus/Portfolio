"use client";

import { Box, Container, HStack, Heading, Link, Text, VStack, IconButton } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { siteConfig } from '../data/siteConfig';
import { TextDecryptOnScroll } from "./TextDecryptOnScroll";

interface FooterProps {
  uiTranslations: {
    footerTitle: string;
    footerDescription: string;
    footerRights: string;
  };
}

export const Footer = ({ uiTranslations }: FooterProps) => {
  return (
    <Box as="footer" bg="gray.900" mt={20} borderTop="1px" borderColor="purple.800">
      <Container maxW="container.xl">
          <VStack id="contact" w="100%" spacing={5} py={10}>
              <Heading size="lg" bgGradient="linear(to-r, purple.400, pink.500)" bgClip="text">
                <TextDecryptOnScroll as="span">
                  {uiTranslations.footerTitle}
                </TextDecryptOnScroll>
              </Heading>
            <Text color="gray.400">
                <TextDecryptOnScroll as="span">
                  {uiTranslations.footerDescription}
                </TextDecryptOnScroll>
            </Text>
              
              <HStack spacing={5} pt={4}>
                  <Link href={siteConfig.socialLinks.github} isExternal>
                    <IconButton
                      aria-label="GitHub"
                      icon={<FaGithub size="1.5em" />}
                      isRound={true}
                      variant="outline"
                      colorScheme="purple"
                    />
                  </Link>
                  <Link href={siteConfig.socialLinks.linkedin} isExternal>
                    <IconButton
                      aria-label="LinkedIn"
                      icon={<FaLinkedin size="1.5em" />}
                      isRound={true}
                      variant="outline"
                      colorScheme="purple"
                    />
                  </Link>
                   <Link href={siteConfig.socialLinks.whatsapp} isExternal>
                    <IconButton
                      aria-label="WhatsApp"
                      icon={<FaWhatsapp size="1.5em" />}
                      isRound={true}
                      variant="outline"
                      colorScheme="purple"
                    />
                  </Link>
                  <Link href={siteConfig.socialLinks.email}>
                     <IconButton
                      aria-label="Email"
                      icon={<MdEmail size="1.5em" />}
                      isRound={true}
                      variant="outline"
                      colorScheme="purple"
                    />
                  </Link>
              </HStack>

              <Text fontSize="sm" color="gray.500" pt={10}>
                © {new Date().getFullYear()} {siteConfig.personalData.name}. {uiTranslations.footerRights}
              </Text>
          </VStack>
      </Container>
    </Box>
  );
};