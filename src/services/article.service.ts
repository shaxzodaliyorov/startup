import { gql, request } from "graphql-request"
import { ArticleType } from "../interface/article.interface"
import { Language } from "../interface/constants.interface"


const graphql_API = process.env.NEXT_PUBLIC_HYGRAPH_ENDPIONT as string


export const Article = {
  async GetArticles(lng: Language) {
    const query = gql`
      query MyQuery($lng:Language) {
  articlsID(where:{language:$lng}) {
    title
    slug
    language
    excerpt
    id
    createdAt
    author {
      name
      avatar {
        url
      }
    }
    discription {
      text
    }
    image {
      url
    }
  }
}
      `
    const result = await request<{ articlsID: ArticleType[] }>(graphql_API, query, { lng })
    return result.articlsID
  },
  async GetDetailArticle(slug: string) {
    const query = gql`
      query DetailedArticle($slug:String!){
      articls(where: {slug: $slug}) {
      createdAt
      excerpt
      language
      discription {
        text
        raw
      }
      image {
        url
      }
      title
      author {
      avatar {
        url
      }
      name
      }
      }
      }
    `
    const result = await request<{ articls: ArticleType }>(graphql_API, query, { slug })
    return result.articls
  }
}