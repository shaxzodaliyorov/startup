import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import { format, formatDistance } from "date-fns";
import { useTranslation } from "react-i18next";
import ReactStars from "react-stars";

const Review = () => {
  const { t } = useTranslation();

  return (
    <>
      <Heading mt={3}>{t("review", { ns: "courses" })}</Heading>
      {data.map((item, index) => (
        <Flex key={index} gap={4} mt={6} borderBottomWidth={"1px"} pb={2}>
          <Avatar
            src={""}
            display={{ base: "none", md: "block" }}
            size={"md"}
          />

          <Box>
            <Flex align={"center"} gap={2} mt={1}>
              <Text fontWeight={"bold"}>{item.name}</Text>
              <Text>
                {formatDistance(new Date("20:20:2021"), new Date())} ago
              </Text>
            </Flex>
            <ReactStars edit={false} value={item.rating} />
            <Text mt={2}>{item.summary}</Text>
          </Box>
        </Flex>
      ))}
      <Center>
        {data.length >= 5 && (
          <Button
            size={"sm"}
            variant={"outline"}
            colorScheme={"cyan.400"}
            fontWeight={"bold"}
            mt={5}
          >
            More...
          </Button>
        )}
      </Center>
    </>
  );
};

export default Review;

const data = [
  {
    name: "Aziz Rohimov",
    rating: 5,
    summary: "raxmat",
  },
  {
    name: "Axmadjon Mustafayev",
    rating: 5,
    summary: "kurs ajoyib raxmat",
  },

  {
    name: "Nurillo Mahmudjonov ",
    rating: 5,
    summary: "aka katta raxmat ancha narsa o'rgandim kurdan",
  },
  {
    name: "Aziz faxriddin o'g'li",
    rating: 3,
    summary: "raxmat",
  },
  {
    name: "Samar Badriddinov",
    rating: 5,
    summary: "cool",
  },
];
