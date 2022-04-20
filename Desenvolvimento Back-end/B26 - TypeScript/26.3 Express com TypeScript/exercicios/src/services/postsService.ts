import { PostsModel } from '../modules/postsModels'
import { connection } from '../database/connection'
import { IPost, IPostDB } from '../interfaces/IPosts'

export class PostsService {
  model: PostsModel
  constructor() {
    this.model = new PostsModel(connection)
  }
  public async getAllPosts(): Promise<IPostDB[]> {
    const posts = await this.model.getAllPosts()
    return posts
  }

  public async getPostById(id: number): Promise<IPostDB> {
    const post = await this.model.getPostById(id)
    return post
  }
  public async getPostsByQuery(query: string): Promise<IPostDB[]> {
    const post = await this.model.getPostsByQuery(query)
    return post
  }
  public async creatPost(post: IPost): Promise<IPostDB> {
    const dateNow = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
    const newPost = await this.model.creatPost({ ...post, publicationDate: dateNow })
    return newPost
  }
  public async updatePostById(post: IPost, id: number): Promise<void> {
    const dateNow = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
    const postFormated = { ...post, publicationDate: dateNow, id }
    await this.model.updatePostById(postFormated)
  }
  public async removePost(id: number): Promise<void> {
    await this.model.removePost(id)
  }

}