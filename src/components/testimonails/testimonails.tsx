import { Center, Icon, Text } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import { testimonailsCoursuel } from "../../config/carsuel";
import SectionTitle from "../section-title/section-title";
import { ImQuotesRight } from "react-icons/im"
import { useTranslation } from "react-i18next";


const Testimonails = () => {

   const { t } = useTranslation()

   return <>
      <SectionTitle
         title={t("testimonials_title", { ns: "home" })}
         subtitle={t("testimonials_description", { ns: "home" })}
         textAlign={"center"}
      />
      <Carousel responsive={testimonailsCoursuel} showDots={false} arrows={true} infinite >
         {data.map((item, index) => (
            <Center key={index} flexDirection={"column"} maxW={"container.sm"} mx={"auto"} >
               <Icon as={ImQuotesRight} fontSize={100} />
               <Text textAlign={"center"} mt={5} >{item.description}</Text>
               <Text textAlign={"center"} fontSize={"xl"} fontWeight={"bold"} mt={3} >
                  {item.name}
               </Text>
            </Center>
         ))}
      </Carousel>
   </>
}

export default Testimonails


const data = [
   {
      name: 'Samar Badriddinov',
      description:
         'It is no exaggeration to say this Educrat experience was transformative–both professionally and personally. This workshop will long remain a high point of my life.',
   },
   {
      name: 'Yusuf Khamdamov',
      description:
         'It is no exaggeration to say this Educrat experience was transformative–both professionally and personally. This workshop will long remain a high point of my life.',
   },
   {
      name: 'Abdulloh Oripov',
      description:
         'It is no exaggeration to say this Educrat experience was transformative–both professionally and personally. This workshop will long remain a high point of my life.',
   },
   {
      name: 'Shoxrux Yusupov',
      description:
         'It is no exaggeration to say this Educrat experience was transformative–both professionally and personally. This workshop will long remain a high point of my life.',
   },
];