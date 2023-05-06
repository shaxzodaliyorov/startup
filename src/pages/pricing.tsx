import { useTranslation } from "react-i18next";
import { withLayout } from "../layouts/layout";
import Seo from "../layouts/seo/seo";
import { PricingPageComponent } from "../page-component";

const Pricing = () => {
  const { t } = useTranslation();

  return (
    <Seo
      metaTitle={`Shaxzod | ${t("pricing_page_title", { ns: "seo" })}`}
      metaDescription={t("pricing_page_description", { ns: "seo" }) as string}
    >
      <PricingPageComponent />
    </Seo>
  );
};

export default withLayout(Pricing);
