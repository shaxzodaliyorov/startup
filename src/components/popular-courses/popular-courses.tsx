import Carousel from "react-multi-carousel";
import SectionTitle from "../section-title/section-title"
import { CoursesCarsuel } from "../../config/carsuel";
import { useTranslation } from "react-i18next";
import { Courses } from "../../config/constants";
import PopularCoursesCard from "../popular-courses-card/popular-courses-card";

const PopularCourses = () => {
   const { t } = useTranslation()
   return (
      <>
         <SectionTitle title={t("popular_courses_title", { ns: "home" })} subtitle={t("popular_courses_description", { ns: "home" })} />
         <Carousel responsive={CoursesCarsuel} arrows={true} showDots={false} autoPlaySpeed={5000} infinite >
            {Courses.map(item => (
               <PopularCoursesCard key={item.slug} item={item} />
            ))}
         </Carousel>
      </>
   )
}

export default PopularCourses


