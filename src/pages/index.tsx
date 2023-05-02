import { useEffect } from "react"
import { withLayout } from "../layouts/layout"
import { HomePageComponent } from "../page-component"
import { Article } from "../services/article.service"

const Home = (): JSX.Element => {
  useEffect(() => {
    Article.GetArticles().then(res => console.log(res))
  }, [])
  return <HomePageComponent />
}

export default withLayout(Home)