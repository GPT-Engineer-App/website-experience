import { Container, VStack, Heading, Text, Button, Image, Link } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Link href="/projects">
          <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTUwMDgwMTZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Profile Image" />
        </Link>
        <Heading as="h1" size="xl">
          Terry
        </Heading>
        <Text fontSize="md" color="gray.500">
          Software Developer | React Specialist
        </Text>
        <Text fontSize="md" textAlign="center">
          Passionate about building scalable web applications and interactive user experiences.
        </Text>
        <VStack spacing={2}>
          <Button leftIcon={<FaLinkedin />} colorScheme="blue" variant="solid">
            <Link href="https://www.linkedin.com/in/johndoe" isExternal>
              LinkedIn
            </Link>
          </Button>
          <Button leftIcon={<FaGithub />} colorScheme="gray" variant="solid">
            <Link href="https://github.com/gpt-engineer-org/gpt-engineer" isExternal>
              GitHub
            </Link>
          </Button>
          <Button leftIcon={<FaEnvelope />} colorScheme="teal" variant="solid">
            <Link href="mailto:johndoe@example.com" isExternal>
              Email Me
            </Link>
          </Button>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
