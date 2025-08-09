"use client";

import { Box } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

const blobAnimation = keyframes`
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(40px, -60px) scale(1.1);
  }
  66% {
    transform: translate(-30px, 30px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
`;

export const AnimatedBackground = () => {
  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      w="100%"
      h="100%"
      zIndex="-1"
      overflow="hidden"
      bg="#0D1117"
    >
      <Box
        position="absolute"
        bgGradient="linear(to-br, purple.500, blue.500)"
        opacity="0.2"
        w={{ base: "300px", md: "600px" }}
        h={{ base: "300px", md: "600px" }}
        top="-150px"
        left="-150px"
        borderRadius="full"
        filter="blur(100px)"
        animation={`${blobAnimation} 20s infinite ease-in-out`}
      />
      <Box
        position="absolute"
        bgGradient="linear(to-tl, purple.700, pink.500)"
        opacity="0.2"
        w={{ base: "250px", md: "500px" }}
        h={{ base: "250px", md: "500px" }}
        bottom="-100px"
        right="-150px"
        borderRadius="full"
        filter="blur(120px)"
        animation={`${blobAnimation} 25s infinite ease-in-out reverse`}
      />
    </Box>
  );
};