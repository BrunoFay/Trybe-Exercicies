import { RequestHandler, Response } from 'express'
import { IPostDB } from '../interfaces/IPosts'
import { PostsService } from '../services/postsService'

export class PostsController {
  private service: PostsService
  constructor() {
    this.service = new PostsService()
  }
  public getAllPosts: RequestHandler = async (req, res, next): Promise<Response> => {
    const posts: IPostDB[] = await this.service.getAllPosts()
    return res.status(200).json(posts)
  }

  public getPostsByQuery: RequestHandler = async (req, res, next): Promise<Response> => {
    const query = (req.query.author || req.query.category || req.query.publicationDate) as string
    const posts: IPostDB[] = await this.service.getPostsByQuery(query)
    return res.status(200).json(posts)

  }
  public getPostById: RequestHandler = async (req, res, next): Promise<Response> => {
    const postId: number = Number(req.params.id)
    const post: IPostDB = await this.service.getPostById(postId)
    return res.status(200).json(post)
  }
  public creatPost: RequestHandler = async (req, res, next): Promise<Response> => {
    const newPost = await this.service.creatPost(req.body)
    return res.status(201).json(newPost)
  }
  public updatePostById: RequestHandler = async (req, res, next): Promise<Response> => {
    const postId: number = Number(req.params.id)
    const ckeckIfPostExistInDb = await this.service.getPostById(postId)
    if (!ckeckIfPostExistInDb) return res.status(404).json({ message: 'post notfound' })
    await this.service.updatePostById(req.body, postId)
    return res.status(202).json({ message: 'successfully updated' })
  }
  public removePost: RequestHandler = async (req, res, next): Promise<Response> => {
    const postId: number = Number(req.params.id)
    const ckeckIfPostExistInDb = await this.service.getPostById(postId)
    if (!ckeckIfPostExistInDb) return res.status(404).json({ message: 'post notfound' })
    await this.service.removePost(postId)
    return res.status(202).end()
  }
}