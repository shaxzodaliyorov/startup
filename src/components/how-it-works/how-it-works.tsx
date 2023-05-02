import { Box, Flex, SimpleGrid, Stack, Text, useColorModeValue } from "@chakra-ui/react"
import { Fragment } from "react"
import { useTranslation } from "react-i18next"
import { FinishRightIcon, OnlineCourseIcon, OnlineLearningIcon, OnlineStudentIcon, RightLineIcon } from "../../icons"
import SectionTitle from "../section-title/section-title"

const HowItWorks = () => {

   const backgroundColor = useColorModeValue("gray.200", "gray.700")

   const { t } = useTranslation()

   return (
      <>
         <SectionTitle title={t("how_it_works_title", { ns: "home" })} subtitle={t("how_it_works_description", { ns: "home" })} textAlign={"center"} />
         <SimpleGrid mt={10} columns={5} spacing={10} alignItems={"center"}  >
            {data.map((item, index) => {
               const odd = index % 2
               return <Fragment key={index} >
                  {!odd ? <Stack align={"center"} justify={"center"} >
                     <Flex
                        w={100}
                        h={100}
                        justify={"center"}
                        align={"center"}
                        backgroundColor={backgroundColor}
                        borderRadius={"full"}
                     >{item.icon}</Flex>
                     <Text textAlign={"center"}  >{t(item.title ? item.title : "", { ns: "home" })}</Text>
                  </Stack> : <Stack justify={"center"} >{item.icon}</Stack>}
               </Fragment>
            })}
         </SimpleGrid>
      </>
   )
}

export default HowItWorks

const data = [
   { title: "how_it_works_first_step", icon: <OnlineCourseIcon /> },
   { icon: <RightLineIcon /> },
   { title: "how_it_works_second_step", icon: <OnlineLearningIcon /> },
   { icon: <FinishRightIcon /> },
   { title: "how_it_works_third_step", icon: <OnlineStudentIcon /> }
]