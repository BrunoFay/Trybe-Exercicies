export interface IPost {
  title: string,
  author: string,
  category: string,
  publicationDate: string
}

export interface IPostDB extends IPost {
  id: number
}