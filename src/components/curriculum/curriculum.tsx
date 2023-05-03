import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Heading,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { GoPrimitiveDot } from "react-icons/go";
import { AiFillPlayCircle } from "react-icons/ai";
import { getLessonTime } from "../../helpers/time.helpers";

const Curriculum = () => {
  return (
    <>
      <Heading mt={10}>Curriculum</Heading>
      <Flex align={"center"} gap={2} mt={3}>
        {data.length} Modules <Icon as={GoPrimitiveDot} />{" "}
        {data.map((c) => c.lessons.length).reduce((a, b) => +a + +b, 0)} lessons
      </Flex>

      <Accordion defaultIndex={0} allowToggle mr={2}>
        {data.map((item, idx) => (
          <AccordionItem
            key={idx}
            border={"1px solid cyan.500"}
            borderRadius={"8px"}
            mt={5}
          >
            <AccordionButton
              h={"60px"}
              background={useColorModeValue("cyan.100", "cyan.900")}
              color={useColorModeValue("black", "white")}
              borderRadius={"lg"}
              fontWeight={"bold"}
            >
              <Box flex="1" textAlign={"left"}>
                <AccordionIcon />
                {item.title}
              </Box>
              <Text fontSize={"sm"}>{item.lessons.length}ta&nbsp;Dars</Text>
            </AccordionButton>
            <AccordionPanel mb={4}>
              {item.lessons.map((less, index) => (
                <Flex
                  key={index}
                  justify={"space-between"}
                  align={"center"}
                  py={2}
                >
                  <Flex align={"center"} gap={2} w={"80%"}>
                    <Icon as={AiFillPlayCircle} w={7} h={7} />
                    <Text>{less.name}</Text>
                  </Flex>
                  <Text fontSize={"sm"}>
                    {getLessonTime(less.hour, less.minutes, less.seconds)}
                  </Text>
                </Flex>
              ))}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Curriculum;

const data = [
  {
    title: "1-Modul. Kursga kirish",
    lessons: [
      {
        name: "#1. Samarali kursni tugatish",
        hour: 0,
        minutes: 8,
        seconds: 59,
      },
      {
        name: "#2. Kod muharirini sozlash. VSCode",
        hour: 1,
        minutes: 12,
        seconds: 23,
      },
      {
        name: "#3. JSHint bilan ishlash",
        hour: 0,
        minutes: 13,
        seconds: 16,
      },
    ],
  },
  {
    title: "2-Modul. javaScript asoslari",
    lessons: [
      {
        name: "#4. JavaScript nima",
        hour: 0,
        minutes: 18,
        seconds: 23,
      },
      {
        name: "#5. O'zgaruvchilar",
        hour: 0,
        minutes: 22,
        seconds: 20,
      },
      {
        name: "#6. Qat'iy rejim",
        hour: 0,
        minutes: 5,
        seconds: 25,
      },
    ],
  },
  {
    title: "3-Modul. javaScript loyiha",
    lessons: [
      {
        name: "#35. Classlist",
        hour: 0,
        minutes: 11,
        seconds: 44,
      },
      {
        name: "#36. Delegatsiya",
        hour: 0,
        minutes: 11,
        seconds: 39,
      },
      {
        name: "#37. Loyiha, Tab",
        hour: 0,
        minutes: 18,
        seconds: 4,
      },
    ],
  },
];
