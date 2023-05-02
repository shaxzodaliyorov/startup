import { Box, Button, Card, CardBody, Input, Stack } from "@chakra-ui/react"
import { useTranslation } from "react-i18next"
import SectionTitle from "../section-title/section-title"

const NewsLatter = () => {
   const { t } = useTranslation()
   return <>
      <Card mt={10} >
         <CardBody minH={"50vh"} display={"flex"} justifyContent={"center"} alignItems={"center"} >
            <Stack spacing={3} >
               <SectionTitle
                  title={t("newsletter_title", { ns: "home" })}
                  subtitle={t("newsletter_description", { ns: "home" })}
                  textAlign={'center'}
                  maxW={"container.sm"}
               />
               <Box pos={'relative'} >
                  <Input
                     outline={"none"}
                     h={14}
                     w={'full'}
                     placeholder={t("newsletter_placeholder", { ns: "home" }) || ""}
                     bg={"white"}
                     color={"gray.900"}
                     _placeholder={{ color: "gray.500" }}
                  />
                  <Button pos={"absolute"} right={2} top={2} colorScheme={"cyan"} zIndex={5} >{t("newsletter_submit", { ns: "home" })}</Button>
               </Box>
            </Stack>
         </CardBody>
      </Card>
   </>
}

export default NewsLatter