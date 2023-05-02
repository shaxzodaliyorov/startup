import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Flex, Input, Radio, RadioGroup, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import ReactStars from "react-stars";
import { AllCoursesCard } from "../../components";
import SectionTitle from "../../components/section-title/section-title";
import { Courses, coursesFilter } from "../../config/constants";

const CoursesPageComponent = () => {
   const { t } = useTranslation()
   return (
      <>
         <SectionTitle title={t("title", { ns: "courses" })} subtitle={t("description", { ns: "courses" })} />
         <Box pos={'relative'} mt={5} >
            <Input
               outline={"none"}
               h={14}
               w={'full'}
               placeholder={t("search_input_placeholder", { ns: "courses" }) || ""}
               bg={"white"}
               color={"gray.900"}
               _placeholder={{ color: "gray.500" }}
            />
            <Button pos={"absolute"} right={2} top={2} colorScheme={"cyan"} zIndex={5} >{t("search_input_btn", { ns: "courses" })}</Button>
         </Box>
         <Flex gap={5} mt={5} flexDirection={{ base: "column", md: "row" }} >
            <Box w={{ base: "100%", md: "30%" }} h={"fit-content"} p={5} border={"1px"} borderRadius={"lg"} borderColor={useColorModeValue("gray.200", "gray.700")} >
               {coursesFilter.map((item, index) => {
                  return <Accordion key={index} allowToggle defaultIndex={index === 0 ? 0 : index} >
                     <AccordionItem borderTop={"none"} key={index} >
                        <AccordionButton>
                           <Text fontSize={"xl"} flex='1' textAlign='left'>
                              {t(item.title, { ns: "courses" })}
                           </Text>
                           <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4}>
                           <RadioGroup >
                              <Stack>
                                 {item.categoryList.map((c) => {
                                    return <Radio key={c.id} value={c.id} colorScheme={"cyan"} >
                                       <Flex gap={2} >
                                          {item.id === "rating" && <ReactStars value={Number(c.id)} edit={false} />}
                                          {t(c.name, { ns: "courses" })}
                                       </Flex>
                                    </Radio>
                                 })}
                              </Stack>
                           </RadioGroup>
                        </AccordionPanel>
                     </AccordionItem>
                  </Accordion>
               })}
            </Box>
            <Box w={{ base: "100%", lg: "70%" }} >
               {Courses.map((item, index) => (
                  <AllCoursesCard key={index} course={item} />
               ))}
            </Box>
         </Flex>
      </>
   )
}

export default CoursesPageComponent;