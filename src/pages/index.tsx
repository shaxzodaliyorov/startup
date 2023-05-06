import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { withLayout } from "../layouts/layout";
import Seo from "../layouts/seo/seo";
import { HomePageComponent } from "../page-component";
import { Article } from "../services/article.service";

const Home = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <Seo
      metaTitle={`Shaxzod | ${t("main_page_title", { ns: "seo" }) as string} `}
      metaDescription={t("main_page_description", { ns: "seo" }) as string}
    >
      <HomePageComponent />
    </Seo>
  );
};

export default withLayout(Home);
