import { Box, Flex, Grid, Heading, Icon, Text } from "@chakra-ui/react";
import { BsCheck } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";

const Overview = () => {
  const WhatYouLear = "AJAX, Fetch, API, Promise, JavaScript, OOP, JSON,";
  const Requirement = "Basic HTML, CSS, JavaSciprt, SASS, Advanced API";

  return (
    <>
      <Heading mt={10}>Overview</Heading>
      <Text mt={3}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis tempora
        itaque expedita rem eveniet fugit! Mollitia expedita corporis eligendi
        earum, beatae cumque ipsum, alias neque ab facilis natus nesciunt
        commodi!
      </Text>
      <Heading mt={10}>What you will learn</Heading>
      <Grid
        mt={5}
        gridTemplateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)" }}
      >
        {WhatYouLear.split(", ").map((item, idx) => (
          <Flex key={idx} gap={3} align={"center"} my={1}>
            <Icon as={BsCheck} w={6} h={6} borderRadius={"100%"} p={1} />
            <Text>{item}</Text>
          </Flex>
        ))}
      </Grid>
      <Heading mt={10}>Required</Heading>
      <Box mt={3}>
        {Requirement.split(", ").map((item, idx) => (
          <Flex key={idx} gap={2} align={"center"}>
            <Icon as={GoPrimitiveDot} w={5} h={5} />
            <Text>{item}</Text>
          </Flex>
        ))}
      </Box>
    </>
  );
};

export default Overview;
