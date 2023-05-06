import { useTranslation } from "react-i18next";
import { withLayout } from "../layouts/layout";
import Seo from "../layouts/seo/seo";
import { AboutPageComponent } from "../page-component";

const About = () => {
  const { t } = useTranslation();
  return (
    <Seo
      metaTitle={`Shaxzod | ${t("about_page_title", { ns: "seo" })}`}
      metaDescription={t("about_page_description", { ns: "seo" }) as string }
    >
      <AboutPageComponent />
    </Seo>
  );
};

export default withLayout(About);
