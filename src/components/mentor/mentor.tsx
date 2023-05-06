import {
  Avatar,
  Box,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import {
  AiFillPlayCircle,
  AiFillStar,
  AiOutlinePlayCircle,
} from "react-icons/ai";
import { FaUserGraduate } from "react-icons/fa";

const Mentor = () => {
  const { t } = useTranslation();
  return (
    <>
      <Heading mt={5}>{t("mentor", { ns: "courses" })}</Heading>
      <Flex mt={5} gap={5} align={"center"}>
        <Avatar
          src="https://media.graphassets.com/YpL2s0jESA2Z7EwBrh69"
          display={{ base: "none", md: "block" }}
          size={"2xl"}
        />
        <Box>
          <Text fontWeight={"bold"} fontSize={"20px"}>
            Shaxzod Aliyorov
          </Text>
          <Text>Software Engineer & Coding instructor</Text>
          <Stack
            direction={{ base: "column", md: "row" }}
            mt={2}
            gap={2}
            align={{ base: "flex-start", md: "center" }}
          >
            <Flex align={"center"} gap={1}>
              <Icon as={AiFillStar} color={"cyan.400"} />
              <Text>4.8 Reyting</Text>
            </Flex>
            <Flex align={"center"} gap={1}>
              <Icon as={FaUserGraduate} color={"cyan.400"} />
              <Text>+5,000 O'quvchi</Text>
            </Flex>
            <Flex align={"center"} gap={1}>
              <Icon as={AiOutlinePlayCircle} color={"cyan.400"} />
              <Text>10 Kurslar</Text>
            </Flex>
          </Stack>
        </Box>
      </Flex>
      <Text mt={4}>
        <Box as={"span"} fontWeight={"bold"} color={"cyan.500"}>
          Shaxzod Aliyorov
        </Box>{" "}
        - Shaxzod platformasi asoschisi hamda Amerika, Tunisia va Rossiya
        do'vlatrida bir nachta StartUp loyihalarda ishtrok etgan. Xozirgi kunda
        Amerikadagi sug'urta kompaniyasida ishlaydi.
      </Text>
      <Text mt={4}>
        <Box as={"span"} fontWeight={"bold"} color={"cyan.500"}>
          Stack
        </Box>{" "}
        - O'z tajribam davomida men bir nechta stack lardan foydalanganman, MERN
        (TypeScript, NextJS), Angular, VueJS, AWS, React Native. Ushbu
        platformaning asosiy maqsadi o'z bilimlarimni bo'lishish.
      </Text>
    </>
  );
};

export default Mentor;
