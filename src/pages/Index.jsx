import { Container, Text, VStack, Box, Heading } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to Your React App</Heading>
        <Text fontSize="lg">This is your starting point. Begin developing your app here.</Text>
      </VStack>
    </Container>
  );
};

export default Index;