export interface ArticleType {
   createdAt: string,
   excerpt: string,
   id: string,
   language: string,
   image: {
      url: string
   },
   slug: string,
   title: string,
   author: authorType,
   discription: {
      text: string,
      raw: []
   }
}

export interface authorType {
   name: string,
   avatar: {
      url: string
   }
}