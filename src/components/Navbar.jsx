import { Box, Flex, Link, Spacer, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="brand.800" color="white" px={4} py={2}>
      <Flex align="center">
        <Text fontSize="xl" fontWeight="bold">
          MyApp
        </Text>
        <Spacer />
        <Flex>
          <Link as={RouterLink} to="/" px={2}>
            Home
          </Link>
          {/* Add more links as needed */}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;