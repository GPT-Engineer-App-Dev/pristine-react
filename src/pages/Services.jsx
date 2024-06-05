import { Container, Heading, Text } from "@chakra-ui/react";

const Services = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <Heading as="h1" size="2xl" mb={4}>Our Services</Heading>
      <Text fontSize="lg">This is the Services page. You can list your services here.</Text>
    </Container>
  );
};

export default Services;