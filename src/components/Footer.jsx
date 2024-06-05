import { Box, Text, Link, Flex } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" bg="brand.800" color="white" py={4} mt={8}>
      <Flex direction="column" align="center">
        <Text fontSize="sm">© {new Date().getFullYear()} MyApp. All rights reserved.</Text>
        <Flex mt={2}>
          <Link href="/privacy" mx={2} fontSize="sm">
            Privacy Policy
          </Link>
          <Link href="/terms" mx={2} fontSize="sm">
            Terms of Service
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;