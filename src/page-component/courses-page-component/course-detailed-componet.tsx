import {
  Box,
  Button,
  Card,
  CardBody,
  Divider,
  Flex,
  Heading,
  Icon,
  Image,
  Stack,
  Tab,
  TabList,
  Tabs,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ReactStars from "react-stars";
import { Courses } from "../../config/constants";
import { CourseType } from "../../interface/courses.interface";
import { TfiAlarmClock } from "react-icons/tfi";
import {
  FaBook,
  FaLanguage,
  FaRibbon,
  FaStar,
  FaUserGraduate,
  FaUserTie,
} from "react-icons/fa";
import { format } from "date-fns";
import { CiViewTimeline } from "react-icons/ci";
import { BiInfinite, BiTime } from "react-icons/bi";
import { BsBarChartLine } from "react-icons/bs";
import { TbCertificate } from "react-icons/tb";
import { Curriculum, Mentor, Overview, Review } from "../../components";

const CourseDetailedComponet = () => {
  const [course, setData] = useState<CourseType>();
  const [tabIndex, setTabIndex] = useState(0);
  const router = useRouter();

  const [media] = useMediaQuery("(min-width: 592px)");

  useEffect(() => {
    const currentCourse = Courses.find((c) => c.slug === router.query.slug);
    setData(currentCourse);
  }, [router.query]);

  const tabHandler = (idx: number) => {
    setTabIndex(idx);
  };

  return (
    <>
      {/* header card */}
      <Card>
        <CardBody pos={"relative"} p={{ base: 2, md: 5 }}>
          <Stack flexDirection={{ base: "column", md: "row" }} gap={5}>
            <Box w={{ base: "100%", md: "60%" }}>
              <Heading mt={5} fontSize={"3xl"}>
                {course?.title}
              </Heading>
              <Text mt={5}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam quaerat exercitationem architecto quos at odio totam,
                doloribus dolorem asperiores. Animi?
              </Text>
              <Stack mt={5} gap={5} direction={!media ? "column" : "row"}>
                <Flex fontSize={"sm"} align={"flex-end"} gap={1}>
                  <Text>5.0</Text>
                  <ReactStars edit={false} value={5} />
                  <Text>(10)</Text>
                </Flex>
                <Flex align={"center"} fontSize={"sm"} gap={1}>
                  <Icon as={FaUserGraduate} />
                  <Text>100 o'quvchilar</Text>
                </Flex>
                <Flex align={"center"} fontSize={"sm"} gap={1}>
                  <Icon as={TfiAlarmClock} />
                  <Text>
                    oxirgi yangilanish {format(new Date(), "dd MMM yyyy")}{" "}
                  </Text>
                </Flex>
              </Stack>
            </Box>
            <Box
              w={{ base: "100%", lg: "39%" }}
              pos={{ base: "relative", lg: "absolute" }}
              right={{ base: 0, lg: 2 }}
            >
              <Card variant={"outline"} boxShadow={"dark-lg"}>
                <CardBody p={{ base: 2, lg: 5 }}>
                  <Image
                    src={course?.image}
                    alt={course?.title}
                    w={"full"}
                    h={"300px"}
                    style={{ objectFit: "cover", borderRadius: "8px" }}
                  />
                  <Stack
                    mt={5}
                    direction={"row"}
                    align={"flex-end"}
                    justify={"space-between"}
                  >
                    <Heading fontSize={"2xl"}>Bepul</Heading>
                    <Text textDecoration={"line-through"}>
                      {course?.price.toLocaleString("en-US", {
                        currency: "USD",
                        style: "currency",
                      })}
                    </Text>
                  </Stack>
                  <Button mt={5} w={"full"} h={14} colorScheme={"cyan"}>
                    Kursni Ko'rish
                  </Button>
                  <Box>
                    <Flex
                      justify={"space-between"}
                      align={"center"}
                      py={2}
                      px={2}
                      fontSize={"17px"}
                    >
                      <Flex fontWeight={"bold"} align={"center"} gap={3}>
                        <CiViewTimeline />
                        Lessons
                      </Flex>
                      <Text fontWeight={"bold"}>{course?.lessonCount}</Text>
                    </Flex>
                    <Divider />
                    <Flex
                      justify={"space-between"}
                      align={"center"}
                      py={2}
                      px={2}
                      fontSize={"17px"}
                      fontWeight={"bold"}
                    >
                      <Flex align={"center"} gap={3}>
                        <BiTime />
                        Total hour
                      </Flex>
                      <Text>{course?.totalHour}</Text>
                    </Flex>
                    <Divider />
                    <Flex
                      justify={"space-between"}
                      align={"center"}
                      py={2}
                      px={2}
                      fontSize={"17px"}
                      fontWeight={"bold"}
                    >
                      <Flex align={"center"} gap={3}>
                        <BsBarChartLine />
                        Level
                      </Flex>
                      <Text>{course?.level}</Text>
                    </Flex>
                    <Divider />
                    <Flex
                      justify={"space-between"}
                      align={"center"}
                      py={2}
                      px={2}
                      fontSize={"17px"}
                      fontWeight={"bold"}
                    >
                      <Flex align={"center"} gap={3}>
                        <FaLanguage />
                        Language
                      </Flex>
                      <Text>English</Text>
                    </Flex>
                    <Divider />
                    <Flex
                      justify={"space-between"}
                      align={"center"}
                      py={2}
                      px={2}
                      fontSize={"17px"}
                      fontWeight={"bold"}
                    >
                      <Flex align={"center"} gap={3}>
                        <TbCertificate />
                        Certificate
                      </Flex>
                      <Text>No</Text>
                    </Flex>
                    <Divider />
                    <Flex
                      justify={"space-between"}
                      align={"center"}
                      py={2}
                      px={2}
                      fontSize={"17px"}
                      fontWeight={"bold"}
                    >
                      <Flex align={"center"} gap={3}>
                        <BiInfinite />
                        Access
                      </Flex>
                      <Text>Lifetime</Text>
                    </Flex>
                    <Divider />
                  </Box>
                </CardBody>
              </Card>
            </Box>
          </Stack>
        </CardBody>
      </Card>
      {/* tabs content */}

      <Tabs
        mt={5}
        mb={"5vh"}
        w={{ base: "100%", lg: "60%" }}
        defaultValue={tabIndex}
        orientation={"horizontal"}
        isFitted
        onChange={tabHandler}
      >
        <TabList>
          {tablist.map((item, idx) => (
            <Tab
              key={idx}
              fontWeight={"bold"}
              textTransform={"capitalize"}
              w={"100%"}
              justifyContent={"center"}
            >
              <Icon
                as={item.Icon}
                mr="2"
                display={{ base: "none", md: "block" }}
              />
              {item.name}
            </Tab>
          ))}
        </TabList>
        <Box w={"full"}>
          {tabIndex === 0 && <Overview />}
          {tabIndex === 1 && <Curriculum />}
          {tabIndex === 2 && <Review />}
          {tabIndex === 3 && <Mentor />}
        </Box>
      </Tabs>
    </>
  );
};

export default CourseDetailedComponet;

const tablist = [
  {
    name: "overview",
    Icon: FaRibbon,
  },
  {
    name: "curriculum",
    Icon: FaBook,
  },
  {
    name: "review",
    Icon: FaStar,
  },
  {
    name: "mentor",
    Icon: FaUserTie,
  },
];
