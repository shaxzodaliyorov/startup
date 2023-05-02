import { Button, Card, CardBody, Grid, Heading, Icon, Stack, Text } from "@chakra-ui/react"
import { useTranslation } from "react-i18next"
import { FaJava } from "react-icons/fa"
import { VscDebugStart } from "react-icons/vsc"
const Hero = () => {
   const { t, i18n } = useTranslation()
   return (
      <Card mt={10} >
         <CardBody p={10} >
            <Grid
               gridTemplateColumns={{ base: "100%", md: "50% 50%" }}
               gap={5}
               justifyContent={'center'}
               alignContent={'center'}
               minH={"50vh"}
            >
               <Stack spacing={3} >
                  <Heading>{t("hero_title", { ns: "home" })}</Heading>
                  <Text>{t("hero_description", { ns: "home" })}</Text>
                  <Grid gridTemplateColumns={{ base: "100%", md: "50% 50%" }} gap={5} >
                     <Button h={14} colorScheme={"cyan"} rightIcon={<VscDebugStart />} >{t("hero_start_learning_btn", { ns: "home" })}</Button>
                     <Button h={14} colorScheme={"cyan"} variant={"outline"} >{t("hero_become_instructor_btn", { ns: "home" })}</Button>
                  </Grid>
               </Stack>
               <Icon as={FaJava} w={400} h={240} justifySelf={'center'} opacity={"0.8"} />
            </Grid>
         </CardBody>
      </Card>
   )
}

export default Hero