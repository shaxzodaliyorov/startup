import { GetServerSideProps } from "next";
import { useTranslation } from "react-i18next";
import { ArticleType } from "../../interface/article.interface";
import { Language } from "../../interface/constants.interface";
import { withLayout } from "../../layouts/layout";
import Seo from "../../layouts/seo/seo";
import { ArticlesPageComponent } from "../../page-component";
import { Article } from "../../services/article.service";

const Articles = ({ articles }: ArticlesPageProps) => {
  const { t } = useTranslation();

  return (
    <Seo
      metaTitle={`Shaxzod | ${t("article_page_title", { ns: "seo" })} `}
      metaDescription={t("article_page_description", { ns: "seo" }) as string}
    >
      <ArticlesPageComponent articles={articles} />
    </Seo>
  );
};

export default withLayout(Articles);

export const getServerSideProps: GetServerSideProps<ArticlesPageProps> = async ({
  req,
}) => {
  const lng: Language = req.cookies.i18next as Language;
  const articles = await Article.GetArticles(lng);
  return {
    props: { articles },
  };
};

interface ArticlesPageProps extends Record<string, unknown> {
  articles: ArticleType[];
}