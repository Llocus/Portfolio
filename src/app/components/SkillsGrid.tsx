"use client";

import { SimpleGrid, Icon, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { siteConfig } from "../data/siteConfig";
import { TextDecryptOnScroll } from "./TextDecryptOnScroll";

export const SkillsGrid = () => (
  <SimpleGrid columns={{ base: 2, sm: 3, md: 4 }} spacing={10}>
    {siteConfig.technologies.map(skill => (
      <motion.div whileHover={{ y: -5, scale: 1.05 }} key={skill.name}>
        <VStack 
          p={4} 
          bg="gray.900" 
          borderRadius="lg" 
          border="1px solid" 
          borderColor="gray.700" 
          spacing={4}
        >
          <Icon as={skill.icon} boxSize={10} color={skill.color} />
            <Text fontWeight="bold">
                <TextDecryptOnScroll as="span">
                {skill.name}
                </TextDecryptOnScroll>
            </Text>
        </VStack>
      </motion.div>
    ))}
  </SimpleGrid>
);