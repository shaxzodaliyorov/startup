import { useTranslation } from "react-i18next";
import { withLayout } from "../layouts/layout";
import Seo from "../layouts/seo/seo";
import { ContactPageComponet } from "../page-component";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <Seo
      metaTitle={`Shaxzod | ${t("contact_page_title", { ns: "seo" })}`}
      metaDescription={t("contact_page_description", { ns: "seo" }) as string}
    >
      <ContactPageComponet />
    </Seo>
  );
};

export default withLayout(Contact);
