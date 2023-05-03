import { withLayout } from "../../layouts/layout"
import { CoursesPageComponent } from "../../page-component"
const Courses = () => {
   return (
      <>
         <CoursesPageComponent />
      </>
   )
}

export default withLayout(Courses)