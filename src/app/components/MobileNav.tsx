"use client";

import { Flex, HStack, VStack, Text, Icon, Link } from "@chakra-ui/react";
import NextLink from 'next/link';
import { FaHome, FaBriefcase, FaUser, FaFileAlt } from 'react-icons/fa';
import { Locale } from "../utils/dictionaries";

interface MobileNavProps {
  lang: Locale;
  uiTranslations: {
    navHome: any;
    navProjects: string;
    navAbout: string;
    navResume: string;
  };
}

export const MobileNav = ({ lang, uiTranslations }: MobileNavProps) => {

  const navItems = [
    { label: uiTranslations.navHome, icon: FaHome, href: '/' },
    { label: uiTranslations.navProjects, icon: FaBriefcase, href: '/#projects' },
    { label: uiTranslations.navAbout, icon: FaUser, href: '/#about' },
    { label: uiTranslations.navResume, icon: FaFileAlt, href: '/resume' },
  ];

  return (
    <Flex
      as="nav"
      display={{ base: 'flex', md: 'none' }}
      position="fixed"
      bottom="0"
      left="0"
      right="0"
      w="full"
      justify="center"
      zIndex={10}
      p={3}
    >
      <HStack
        spacing={4}
        bg="rgba(20, 25, 35, 0.9)"
        backdropFilter="blur(10px)"
        px={4}
        py={2}
        borderRadius="full"
        border="1px solid"
        borderColor="gray.700"
      >
        {navItems.map((item) => (
          <Link 
            as={NextLink} 
            href={item.href} 
            key={item.label}
            _hover={{ textDecoration: 'none' }}
          >
            <VStack 
              spacing={1} 
              p={2} 
              borderRadius="md" 
              color="gray.400"
              _hover={{ bg: 'purple.900', color: 'white' }} 
              transition="all 0.2s ease-in-out"
              w="65px"
            >
              <Icon as={item.icon} boxSize={5} />
              <Text fontSize="xs" fontWeight="medium">{item.label}</Text>
            </VStack>
          </Link>
        ))}
      </HStack>
    </Flex>
  );
};
