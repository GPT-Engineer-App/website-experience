import { Container, Box, Text } from "@chakra-ui/react";

function Projects() {
  return (
    <Container maxW="container.md" centerContent>
      <Box p={5}>
        <Text fontSize="xl">Steven Jobs' Projects</Text>
        <Box p={6} bg="gray.100" boxShadow="md">
          <Text fontSize="lg" fontWeight="bold">
            NeXT Computer
          </Text>
          <Text fontSize="md">An advanced computer system developed in the late 1980s that influenced future operating systems.</Text>
        </Box>
        <Box p={6} bg="gray.100" boxShadow="md">
          <Text fontSize="lg" fontWeight="bold">
            Apple iPhone
          </Text>
          <Text fontSize="md">Revolutionary smartphone introduced in 2007 that changed the way people communicate.</Text>
        </Box>
        <Box p={6} bg="gray.100" boxShadow="md">
          <Text fontSize="lg" fontWeight="bold">
            Apple iPad
          </Text>
          <Text fontSize="md">A line of tablet computers that has set the standard for mobile computing and multimedia consumption since its release in 2010.</Text>
        </Box>
      </Box>
    </Container>
  );
}

export default Projects;
