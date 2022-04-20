import { Router } from "express";
import { PostsController } from "../controllers/postsController";
import { postsValidateInfos } from "../middlewares/validatePostsInfos";
const route = Router()
const postsController = new PostsController()
route.get('/?q', postsController.getPostsByQuery)
route.get('/:id', postsController.getPostById)
route.get('/', postsController.getAllPosts)
route.post('/',postsValidateInfos, postsController.creatPost)
route.put('/:id',postsValidateInfos,postsController.updatePost)
route.delete('/:id',)


export default route