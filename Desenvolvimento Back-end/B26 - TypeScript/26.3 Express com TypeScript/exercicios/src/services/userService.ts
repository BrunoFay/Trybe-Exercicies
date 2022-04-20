import { IUser, IUserDb } from "../interfaces/IUser";
import { UserModel } from "../modules/userModels";
import { connection } from "../database/connection"


export class UserService {
  public model: UserModel
  constructor() {
    this.model = new UserModel(connection)

  }
  async getAllUsers(): Promise<IUserDb[]> {
    const users = await this.model.getAllUsers()
    return users
  }
  async getUserById(id: number): Promise<IUserDb> {
    const user = await this.model.getUserById(id)
    return user 
  }
  async getUserByEmail(email:string):Promise<IUserDb | void>{
    const user = await this.model.getUserByEmail(email)
    return user 

  }
  async createUser(user: IUser): Promise<IUserDb> {
    const newUser = await this.model.createUser(user)
    return newUser
  }
  async updateUserById(user: IUser, id: number): Promise<IUserDb | void> {
    const userFormated = { id, ...user }
    await this.model.updateUserById(userFormated)

  }
  async removeUser(id: number): Promise<void> {
    await this.model.removeUser(id)
  }
} 