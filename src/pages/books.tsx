import { withLayout } from "../layouts/layout";
import { BooksPageComponent } from "../page-component";
import Seo from "../layouts/seo/seo";
import { useTranslation } from "react-i18next";
const Books = () => {
  const { t } = useTranslation();

  return (
    <Seo
      metaTitle={`Shaxzod | ${t("books_page_title", { ns: "seo" })} `}
      metaDescription={t("books_page_description", { ns: "seo" }) as string}
    >
      <BooksPageComponent />
    </Seo>
  );
};

export default withLayout(Books);
