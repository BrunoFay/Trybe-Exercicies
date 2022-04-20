import { Router } from "express";
import { UserController } from "../controllers/userController";
import { userValidateInfos } from "../middlewares/validateUserInfos";

const route = Router()
const userController = new UserController()
route.get('/', userController.getAllUsers).post('/',userValidateInfos, userController.createUser)
route.get('/:id', userController.getUserById)
  .put('/:id',userValidateInfos, userController.updateUserById)
  .delete('/:id', userController.removeUser)

export default route