import { Stack } from "@chakra-ui/react"
import { Cotegories, Hero, HowItWorks, Instructor, NewsLatter, PopularCourses, Sponsorship, Testimonails } from "../../components"

const HomePageComponent = () => {
   return (
      <Stack spacing={10} >
         <Hero />
         <Cotegories />
         <PopularCourses />
         <HowItWorks />
         <Instructor />
         <Testimonails />
         <NewsLatter />
         <Sponsorship />
      </Stack>
   )
}

export default HomePageComponent