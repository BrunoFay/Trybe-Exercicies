import { Router } from "express";
import { PostsController } from "../controllers/postsController";
import { postsValidateInfos } from "../middlewares/validatePostsInfos";
const router = Router()
const postsController = new PostsController()
router.get('/', postsController.getPostsByQuery)
router.get('/', postsController.getAllPosts)
router.get('/:id', postsController.getPostById)
router.post('/',postsValidateInfos, postsController.creatPost)
router.put('/:id',postsValidateInfos,postsController.updatePost)
router.delete('/:id',)


export default router