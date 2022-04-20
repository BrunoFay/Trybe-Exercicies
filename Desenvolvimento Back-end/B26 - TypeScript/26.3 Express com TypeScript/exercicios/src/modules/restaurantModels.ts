import { Pool, RowDataPacket, ResultSetHeader } from "mysql2/promise";
import { IRestaurant, IRestaurantDB } from "../interfaces/IRestaurant";

export class RestaurantModel {
  connetion: Pool
  constructor(connection: Pool) {
    this.connetion = connection
  }
  public async getAllRestaurants(): Promise<IRestaurantDB[]> {
    const [restaurants] = await this.connetion.execute(`SELECT * FROM Restaurants`)
    return restaurants as IRestaurantDB[]
  }
  public async getRestaurantById(id: number): Promise<IRestaurantDB> {
    const [restaurant] = await this.connetion.execute<RowDataPacket[]>(`SELECT * FROM Restaurants WHERE id =?`, [id])
    return restaurant[0] as IRestaurantDB
  }
  public async createRestaurant(restaurant: IRestaurant): Promise<IRestaurantDB> {
    const newRestaurant = await this.connetion.execute<ResultSetHeader>(`INSERT INTO Restaurants (name,category,openingTime,closingTime) VALUES(?,?,?,?) `,
      [
        restaurant.name,
        restaurant.category,
        restaurant.openingTime,
        restaurant.closingTime
      ])
    const [dataInserted] = newRestaurant
    const { insertId } = dataInserted
    return { id: insertId, ...restaurant }
  }
  public async updateRestaurantById(restaurant: IRestaurantDB): Promise<void> {
    await this.connetion.execute<ResultSetHeader>(`UPDATE Restaurants SET name=?,category=?,openingTime=?,closingTime=? WHERE id=? `,
      [
        restaurant.name,
        restaurant.category,
        restaurant.openingTime,
        restaurant.closingTime,
        restaurant.id
      ])
  }
  public async removeRestaurantById(id: number): Promise<void> {
    await this.connetion.execute<ResultSetHeader>(`DELETE Restaurants WHERE id=? `,
      [id])
  }
}