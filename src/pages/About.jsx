import { Container, Heading, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <Heading as="h1" size="2xl" mb={4}>About Us</Heading>
      <Text fontSize="lg">This is the About page. You can add more information about your application here.</Text>
    </Container>
  );
};

export default About;