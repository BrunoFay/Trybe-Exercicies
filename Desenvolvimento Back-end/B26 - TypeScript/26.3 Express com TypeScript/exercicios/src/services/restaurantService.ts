import { connection } from "../database/connection";
import { IRestaurantDB, IRestaurant } from "../interfaces/IRestaurant";
import { RestaurantModel } from "../modules/restaurantModels";

export class RestaurantService {
  model: RestaurantModel
  constructor() {
    this.model = new RestaurantModel(connection)
  }
  public async getAllRestaurants(): Promise<IRestaurantDB[]> {
    const restaurants: IRestaurantDB[] = await this.model.getAllRestaurants()
    return restaurants
  }
  public async getRestaurantById(id: number): Promise<IRestaurantDB> {
    const restaurant: IRestaurantDB = await this.model.getRestaurantById(id)
    return restaurant
  }
  public async createRestaurant(restaurant: IRestaurant): Promise<IRestaurantDB> {
    const newRestaurant: IRestaurantDB = await this.model.createRestaurant(restaurant)
    return newRestaurant
  }
  public async updateRestaurantById(restaurant: IRestaurant, id: number): Promise<void> {
    const restaurantFormated = { ...restaurant, id }
    await this.model.updateRestaurantById(restaurantFormated)
  }
  public async removeRestaurantById(id: number): Promise<void> {
    await this.model.removeRestaurantById(id)
  }

}