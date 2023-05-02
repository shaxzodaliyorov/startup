import { GetServerSideProps } from "next"
import { ArticleType } from "../../interface/article.interface"
import { Language } from "../../interface/constants.interface"
import { withLayout } from "../../layouts/layout"
import { ArticlesPageComponent } from "../../page-component"
import { Article } from "../../services/article.service"

const Articles = ({ articles }: ArticlesPageProps) => {
   return <ArticlesPageComponent articles={articles} />
}

export default withLayout(Articles)


export const getServerSideProps: GetServerSideProps<ArticlesPageProps> = async ({ req }) => {
   const lng: Language = req.cookies.i18next as Language
   const articles = await Article.GetArticles(lng)
   return {
      props: { articles }
   }
}

interface ArticlesPageProps extends Record<string, unknown> {
   articles: ArticleType[]
}