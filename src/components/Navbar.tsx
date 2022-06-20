import { Heading, HStack, Image } from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  return (
    <HStack gap="8px">
      <Image src="/logo.svg" h="24px" w="24px" alt="logo" />
      <Heading as="h1" size="md" color="#2438A1">
        Capture
      </Heading>
    </HStack>
  );
};

export default Navbar;
