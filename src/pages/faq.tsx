import { useTranslation } from "react-i18next";
import { withLayout } from "../layouts/layout";
import Seo from "../layouts/seo/seo";
import { FaqPageComponent } from "../page-component";

const Faq = () => {
  const { t } = useTranslation();

  return (
    <Seo
      metaTitle={`Shaxzod | ${t("faq_page_title", { ns: "seo" })}`}
      metaDescription={t("faq_page_description", { ns: "seo" }) as string}
    >
      <FaqPageComponent />
    </Seo>
  );
};

export default withLayout(Faq);
