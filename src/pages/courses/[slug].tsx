import { useRouter } from "next/router";
import { withLayout } from "../../layouts/layout";
import Seo from "../../layouts/seo/seo";
import { CourseDetailedComponet } from "../../page-component";
const DetailedCoursePage = () => {
  const router = useRouter();

  return (
    <Seo metaTitle={`Shaxzod course | ${router.query.slug}`}  >
      <CourseDetailedComponet />
    </Seo>
  );
};

export default withLayout(DetailedCoursePage);
