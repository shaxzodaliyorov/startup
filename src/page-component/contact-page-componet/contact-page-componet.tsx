import { Button, Card, CardBody, FormControl, FormLabel, Heading, HStack, Input, Stack, Text, Textarea } from "@chakra-ui/react"
import { useTranslation } from "react-i18next"
import SectionTitle from "../../components/section-title/section-title"

const ContactPageComponet = () => {

   const { t } = useTranslation()

   return <HStack h={"90vh"} justify={'flex-start'} flexDirection={{ base: "column", lg: "row" }} align={"center"} gap={4} >
      <SectionTitle w={{ base: "100%", lg: "40%" }} title={t("contact_title", { ns: "global" })} subtitle={t("contact_description", { ns: "global" })} />

      <Card w={{ base: "100%", lg: "60%" }} >
         <CardBody>
            <Heading fontSize={"2xl"} >{t("contact_heading", { ns: "global" })}</Heading>
            <Text fontSize={"lg"} mt={4} >
               {t("contact_text", { ns: "global" })}
            </Text>
            <Stack spacing={4} mt={5} >
               <FormControl>
                  <FormLabel>Name</FormLabel>
                  <Input type={"text"} placeholder={t("contact_name", { ns: "global" }) || ""} h={14} />
               </FormControl>
               <FormControl>
                  <FormLabel>Name</FormLabel>
                  <Input type={"text"} placeholder={t("contact_email", { ns: "global" }) || ""} h={14} />
               </FormControl>
               <FormControl>
                  <FormLabel>Name</FormLabel>
                  <Textarea placeholder={t("contact_message", { ns: "global" }) || ""} h={"150px"} />
               </FormControl>
               <Button w={"full"} colorScheme={"cyan"} h={14} >
                  {t("contact_btn", { ns: "global" })}
               </Button>
            </Stack>
         </CardBody>
      </Card>
   </HStack>
}

export default ContactPageComponet