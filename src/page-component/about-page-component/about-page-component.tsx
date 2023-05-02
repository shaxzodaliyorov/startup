import { Button, Grid, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import SectionTitle from "../../components/section-title/section-title";

const AboutPageComponent = () => {
   const { t } = useTranslation()
   return (
      <>
         <SectionTitle
            textAlign={"center"}
            title={t("about_title", { ns: "global" })}
            subtitle={t("about_descrption", { ns: "global" })}
            my={4}
         />

         <Grid p={4} templateColumns={{ base: "100%", lg: "50% 50%" }} gap={5}>
            <Image src={"/images/about.png"} alt={"shaxzod aliyorov"} />
            <Stack justifySelf={"center"} spacing={4} alignSelf={"center"}>
               <Heading fontSize={"3xl"} color={"gray.500"}>
                  {t("about_heading", { ns: "global" })}
               </Heading>
               <Text>
                  {t("about_text_1", { ns: "global" })}
               </Text>
               <Text>
                  {t("about_text_2", { ns: "global" })}
               </Text>
               <Button colorScheme={"cyan"} h={14} variant={"outline"} w={"fit-content"} >
                  {t("about_btn", { ns: "global" })}
               </Button>
            </Stack>
         </Grid>
      </>
   );
};

export default AboutPageComponent;
