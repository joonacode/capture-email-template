import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import ImageGridItem from "@components/ImageGridItem";
import Navbar from "@components/Navbar";
import React from "react";

const Home = () => {
  return (
    <Box background={"#ddd"} minH="100vh">
      <Box
        maxW={720}
        background="white"
        mx="auto"
        py={10}
        px={{ base: 5, sm: 10 }}
      >
        <Navbar />
        <Box
          display={"flex"}
          flexDir="column"
          alignItems={"center"}
          justifyContent="center"
          gap={5}
        >
          <Image
            height="54px"
            width="54px"
            src="/profile.png"
            alt="profile"
            mt={10}
            rounded={"full"}
          />
          <Heading as="h2">Hi Diana,</Heading>
          <Text color="#333" textAlign={"center"}>
            Welcome to the Photography collection provided by capture.
          </Text>
          <Image src="banner.png" alt="Banner" />
          <Heading as="h2">Welcome to Capture</Heading>
          <Text color="#333" textAlign={"center"}>
            Welcome to Capture Digital photography collection.Over the next few
            days we{"'"}ll send you a short series of emails to help you get
            started. We look forward to helping you close the gap between the
            practice and theory
          </Text>
          <Button
            size={"lg"}
            w={170}
            background="black"
            color="white"
            colorScheme={"pink"}
          >
            Get Starterd
          </Button>
          <Box height={"1px"} background="#000" opacity={0.2} width="70%" />
          <Heading as="h3" opacity={0.5} fontSize="lg">
            Get Capture App
          </Heading>
          <Text color="#333" opacity={0.5} textAlign={"center"}>
            Welcome to Capture Digital photography collection.Over the next few
            days we{"'"}ll send you a short series of emails to help you get
            started. We look forward to helping you close the gap between the
            practice and theory
          </Text>
          <Grid
            templateRows={"repeat(2, 1fr)"}
            templateColumns="repeat(6, 1fr)"
            gap={3}
            h={500}
          >
            <ImageGridItem
              src="/imagev.jpg"
              colSpan={{ base: 6, sm: 2 }}
              rowSpan={{ base: 12, sm: 2 }}
            />
            <ImageGridItem src="/image1.jpg" colSpan={{ base: 6, sm: 2 }} />
            <ImageGridItem src="/image2.jpg" colSpan={{ base: 6, sm: 2 }} />
            <ImageGridItem src="/image3.jpg" colSpan={{ base: 6, sm: 4 }} />
          </Grid>
          <Box height={"1px"} background="#000" opacity={0.2} width="70%" />
          <HStack gap={5} my={8}>
            <Image width={130} src="/logo_apple.svg" alt="Logo Apple" />
            <Image width={130} src="/logo_gplay.svg" alt="Logo Google Play" />
          </HStack>
          <Text color="#333" opacity={0.5} textAlign="center">
            Capture.inc Warehouse, West India Quay, London E14 AL
          </Text>
          <Text color="#333" opacity={0.5}>
            Copyright &copy; 2020
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
