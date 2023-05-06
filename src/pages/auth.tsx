import { useTranslation } from "react-i18next";
import Seo from "../layouts/seo/seo";
import { AuthPageComponet } from "../page-component";

const Auth = () => {
  const { t } = useTranslation();

  return (
    <Seo
      metaTitle={`Shaxzod | ${t("auth_page_title", { ns: "seo" })}`}
      metaDescription={t("auth_page_description", { ns: "seo" }) as string}
    >
      <AuthPageComponet />
    </Seo>
  );
};

export default Auth;
