import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { ArticleType } from "../../interface/article.interface";
import { Language } from "../../interface/constants.interface";
import { withLayout } from "../../layouts/layout";
import Seo from "../../layouts/seo/seo";
import { ArticleDetailedPageComponent } from "../../page-component";
import { Article } from "../../services/article.service";

const ArticleDetailPage = ({ article }: ArticlePropsType) => {
  const router = useRouter();
  return (
    <Seo
      metaTitle={`Shaxzod | ${article.title}`}
      metaDescription={article.discription.text}
    >
      <ArticleDetailedPageComponent article={article} />
    </Seo>
  );
};

export default withLayout(ArticleDetailPage);

export const getServerSideProps: GetServerSideProps<ArticlePropsType> = async ({
  query,
  req,
}) => {
  const slug: string = query.slug as string;
  const lng: Language = req.cookies.i18next as Language;

  const article = await Article.GetDetailArticle(slug);

  if (article.language == lng) {
    return {
      props: {
        article,
      },
    };
  }
  return {
    redirect: {
      destination: "/articles",
      permanent: false,
    },
  };
};

interface ArticlePropsType extends Record<string, unknown> {
  article: ArticleType;
}
