import { Box, Text, Link, Flex, Stack } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" bg="brand.800" color="white" py={6} mt={8}>
      <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between" maxW="6xl" mx="auto" px={4}>
        <Text fontSize="sm" textAlign={{ base: "center", md: "left" }}>© {new Date().getFullYear()} MyApp. All rights reserved.</Text>
        <Stack direction={{ base: "column", md: "row" }} spacing={4} mt={{ base: 4, md: 0 }}>
          <Link href="/privacy" fontSize="sm" textAlign="center">
            Privacy Policy
          </Link>
          <Link href="/terms" fontSize="sm" textAlign="center">
            Terms of Service
          </Link>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Footer;