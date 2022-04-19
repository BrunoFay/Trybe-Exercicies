export interface IUser {
  name: string,
  email: string,
  password: string
}
export interface IUserDb extends IUser {
  id: number,
}