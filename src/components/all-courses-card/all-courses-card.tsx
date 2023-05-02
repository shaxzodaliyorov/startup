import { Box, Button, Divider, Flex, Heading, HStack, Icon, Image, Stack, Text } from "@chakra-ui/react"
import { useTranslation } from "react-i18next"
import { AiOutlineClockCircle } from "react-icons/ai"
import { BiDetail } from "react-icons/bi"
import { BsMinecartLoaded } from "react-icons/bs"
import { CiViewList } from "react-icons/ci"
import { SiGoogleanalytics } from "react-icons/si"
import ReactStars from "react-stars"
import { AllCoursesCardProps } from "./all-courses-card.props"

const AllCoursesCard = ({ course }: AllCoursesCardProps): JSX.Element => {
   const { t } = useTranslation()
   return <>
      <Box py={4} >
         <Flex gap={4} flexDirection={{ base: "column", md: "row" }} >
            <Image src={course.image} alt={course.title} w={{ base: "100%", md: "250px" }} h={"250px"} borderRadius={"lg"} objectFit={"cover"} />
            <Stack>
               <HStack>
                  <Text color={"#e59819"} >{course.reviewAvarage.toFixed(1)}</Text>
                  <ReactStars edit={false} color2={"#e59819"} value={course.reviewAvarage} />
                  <Text opacity={".8"} >({course.reviewCount})</Text>
               </HStack>
               <Heading fontSize={"xl"} >{course.title}</Heading>
               <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium nostrum laboriosam est ut.</Text>
               <Flex flexDirection={{ base: "column", md: "row" }} gap={3} fontSize={"14px"} >
                  <HStack align={"center"} >
                     <Image
                        src={course.author.avatar}
                        alt={course.author.firstName}
                        w={50}
                        h={50}
                        borderRadius={"full"} />
                     <Text>{course.author.firstName}.{course.author.lastName[0]}</Text>
                  </HStack>
                  <HStack>
                     <Flex alignItems={"center"} gap={1} >
                        <Icon as={CiViewList} />
                        <Text>{course.lessonCount} Lesson</Text>
                     </Flex>
                     <Flex alignItems={"center"} gap={1} >
                        <Icon as={AiOutlineClockCircle} />
                        <Text>{course.totalHour} Hours</Text>
                     </Flex>
                     <Flex alignItems={"center"} gap={1} >
                        <Icon as={SiGoogleanalytics} />
                        <Text>{course.level}</Text>
                     </Flex>
                  </HStack>
               </Flex>
               <Divider />
               <Flex align={{ base: "flex-start", md: "center" }} flexDirection={{ base: "column", md: "row" }} justifyContent={"space-between"} >
                  <Text fontWeight={"bold"} fontSize={"xl"} > {course.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}</Text>
                  <Flex mt={{ base: 5, md: 0 }} gap={4} >
                     <Button rightIcon={<BsMinecartLoaded />} colorScheme={"cyan"} >Add To Card</Button>
                     <Button colorScheme={"cyan"} variant={"outline"} >Detail</Button>
                  </Flex>
               </Flex>
            </Stack>
         </Flex>
      </Box>
      <Divider />
   </>
}

export default AllCoursesCard