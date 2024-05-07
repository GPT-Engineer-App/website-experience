import React from "react";
import { Box, Text } from "@chakra-ui/react";

function Projects() {
  return (
    <Box p={5}>
      <Text fontSize="xl">Steven Jobs' Projects</Text>
      <Box p={4}>
        <Image src="https://via.placeholder.com/150" alt="NeXT Computer" />
        <Text fontSize="lg" fontWeight="bold">
          NeXT Computer
        </Text>
        <Text fontSize="md">An advanced computer system developed in the late 1980s that influenced future operating systems.</Text>
      </Box>
      <Box p={4}>
        <Image src="https://via.placeholder.com/150" alt="Apple iPhone" />
        <Text fontSize="lg" fontWeight="bold">
          Apple iPhone
        </Text>
        <Text fontSize="md">Revolutionary smartphone introduced in 2007 that changed the way people communicate.</Text>
      </Box>
      <Box p={4}>
        <Image src="https://via.placeholder.com/150" alt="Apple iPad" />
        <Text fontSize="lg" fontWeight="bold">
          Apple iPad
        </Text>
        <Text fontSize="md">A line of tablet computers that has set the standard for mobile computing and multimedia consumption since its release in 2010.</Text>
      </Box>
    </Box>
  );
}

export default Projects;
