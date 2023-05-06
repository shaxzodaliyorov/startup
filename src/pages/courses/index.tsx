import { useTranslation } from "react-i18next";
import { withLayout } from "../../layouts/layout";
import Seo from "../../layouts/seo/seo";
import { CoursesPageComponent } from "../../page-component";
const Courses = () => {
  const { t } = useTranslation();
  return (
    <>
      <Seo
        metaTitle={
          `Shaxzod | ${t("course_page_title", { ns: "seo" })}` as string
        }
        metaDescription={t("course_page_description", { ns: "seo" }) as string}
      >
        <CoursesPageComponent />
      </Seo>
    </>
  );
};

export default withLayout(Courses);
