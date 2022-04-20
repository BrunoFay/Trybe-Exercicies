import { Pool, ResultSetHeader, RowDataPacket } from "mysql2/promise"
import { IUser, IUserDb } from "../interfaces/IUser"

export class UserModel {
  public connection: Pool
  constructor(connection: Pool) {
    this.connection = connection
  }
  public async getAllUsers(): Promise<IUserDb[]> {
    const [user] = await this.connection.execute(`SELECT * FROM Users`)
    return user as IUserDb[]
  }
  public async getUserById(id: number): Promise<IUserDb> {
    const [user] = await this.connection.execute<RowDataPacket[]>(`SELECT * FROM Users WHERE id = ?`, [id])
    return user[0] as IUserDb
  }
  public async getUserByEmail(email: string): Promise<IUserDb> {
    const [user] = await this.connection.execute<RowDataPacket[]>(`SELECT * FROM Users WHERE email = ?`, [email])
    return user[0] as IUserDb
  }
  public async createUser(user: IUser): Promise<IUserDb> {
    const userCreated = await this.connection.execute<ResultSetHeader>(`INSERT INTO Users (name,email,password) VALUES (?,?,?)`, [
      user.name,
      user.email,
      user.password
    ])
    const [dataInserted] = userCreated;
    const { insertId } = dataInserted;
    return { id: insertId, ...user }
  }
  public async updateUserById(user: IUserDb) {
    await this.connection.execute<RowDataPacket[]>(`UPDATE Users SET name=?,email=?,password=? WHERE id= ?`, [
      user.name,
      user.email,
      user.password,
      user.id])
  }
  public async removeUser(id: number) {
    await this.connection.execute(`DELETE  FROM Users WHERE id=?`, [id])
  }
}