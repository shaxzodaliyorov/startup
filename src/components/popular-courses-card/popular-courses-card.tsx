import { PopularCoursesCardProps } from "./popular-courses-card.props"

import { Divider, Flex, Heading, HStack, Icon, Image, Stack, Text } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import { CourseType } from "../../interface/courses.interface";
import SectionTitle from "../section-title/section-title"
import ReactStars from "react-stars"
import { CiViewList } from "react-icons/ci"
import { AiOutlineClockCircle } from "react-icons/ai";
import { SiGoogleanalytics } from "react-icons/si"
import { CoursesCarsuel } from "../../config/carsuel";
import { useTranslation } from "react-i18next";
import { Courses } from "../../config/constants";

const PopularCoursesCard = ({ item }: PopularCoursesCardProps) => {
   return (
      <Stack key={item.slug} spacing={3} p={3} cursor={"pointer"} >
         <Image
            src={item.image}
            alt={item.title}
            objectFit={'cover'}
            h={"210px"}
            w={"full"}
            borderRadius={"lg"}
         />
         <HStack>
            <Text color={"#e59819"} >{item.reviewAvarage.toFixed(1)}</Text>
            <ReactStars edit={false} color2={"#e59819"} value={item.reviewAvarage} />
            <Text opacity={".8"} >({item.reviewCount})</Text>
         </HStack>
         <Heading fontSize={"xl"} >{item.title}</Heading>
         <HStack>
            <Flex alignItems={"center"} gap={1} >
               <Icon as={CiViewList} />
               <Text>{item.lessonCount} Lesson</Text>
            </Flex>
            <Flex alignItems={"center"} gap={1} >
               <Icon as={AiOutlineClockCircle} />
               <Text>{item.totalHour} Hours</Text>
            </Flex>
            <Flex alignItems={"center"} gap={1} >
               <Icon as={SiGoogleanalytics} />
               <Text>{item.level}</Text>
            </Flex>
         </HStack>
         <Divider />
         <Flex justifyContent={"space-between"} align={'center'} >
            <HStack align={"center"} >
               <Image
                  src={item.author.avatar}
                  alt={item.author.firstName}
                  w={50}
                  h={50}
                  borderRadius={"full"} />
               <Text>{item.author.firstName}.{item.author.lastName[0]}</Text>
            </HStack>
            <Text>{item.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}</Text>
         </Flex>
      </Stack>
   )
}

export default PopularCoursesCard