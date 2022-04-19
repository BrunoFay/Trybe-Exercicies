import { Router } from "express";
import { UserController } from "../controllers/userController";
import { userValidateInfos } from "../middlewares/validateUserInfos";

const router = Router()
const userController = new UserController()
router.get('/', userController.getAllUsers).post('/',userValidateInfos, userController.createUser)
router.get('/:id', userController.getUserById)
  .put('/:id',userValidateInfos, userController.updateUser)
  .delete('/:id', userController.removeUser)

export default router