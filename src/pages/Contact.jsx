import { Container, Heading, Text } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <Heading as="h1" size="2xl" mb={4}>Contact Us</Heading>
      <Text fontSize="lg">This is the Contact page. You can add contact information here.</Text>
    </Container>
  );
};

export default Contact;