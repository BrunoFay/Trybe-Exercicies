import { RequestHandler } from 'express'
import { IUser } from '../interfaces/IUser'
import { UserService } from '../services/userService'

export class UserController {
  private userService: UserService
  constructor() {
    this.userService = new UserService()
  }
  public getAllUsers: RequestHandler = async (req, res, next) => {
    const response = await this.userService.getAllUsers()
    return res.status(200).json(response)
  }
  public getUserById: RequestHandler = async (req, res, next) => {
    const userId = Number(req.params.id)
    const checkeIfUserExistInDB = await this.userService.getUserById(userId)
    if (!checkeIfUserExistInDB) return res.status(404).json({ message: 'user notfound' })
    return res.status(200).json(checkeIfUserExistInDB)
  }
  public createUser: RequestHandler = async (req, res, next) => {
    const newUser: IUser = req.body
    const emailAlreadyExistsInDb = await this.userService.getUserByEmail(req.body.email)
    if (emailAlreadyExistsInDb) {
      return res.status(400).json({ message: `the email ${req.body.email} is alredy in use` })
    }
    const response = await this.userService.createUser(newUser)
    return res.status(201).json(response)
  }
  public updateUser: RequestHandler = async (req, res, next) => {
    const userId = Number(req.params.id)
    const updatedUser: IUser = req.body
    const checkeIfUserExistInDB = await this.userService.getUserById(userId)
    if (!checkeIfUserExistInDB) return res.status(404).json({ message: 'user notfound' })
    const response = await this.userService.updateUser(updatedUser, userId)

    return res.status(200).json(response)

  }
  public removeUser: RequestHandler = async (req, res, next) => {
    const userId = Number(req.params.id)
    const checkeIfUserExistInDB = await this.userService.getUserById(userId)
    if (!checkeIfUserExistInDB) return res.status(404).json({ message: 'user notfound' })
    await this.userService.removeUser(userId)
    return res.status(204).end()

  }

}