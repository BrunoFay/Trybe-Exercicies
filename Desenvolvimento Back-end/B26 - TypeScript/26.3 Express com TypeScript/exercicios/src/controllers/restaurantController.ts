import { RestaurantService } from "../services/restaurantService";
import { RequestHandler, Response } from 'express'

export class RestaurantController {

  constructor(private service = new RestaurantService()) { }
  public getAllRestaurants: RequestHandler = async (req, res, next): Promise<Response> => {
    const restaurants = await this.service.getAllRestaurants()
    return res.status(200).json(restaurants)
  }
  public getRestaurantById: RequestHandler = async (req, res, next): Promise<Response> => {
    const restaurantId = Number(req.params.id)
    const restaurant = await this.service.getRestaurantById(restaurantId)
    return res.status(200).json(restaurant)
  }
  public createRestaurant: RequestHandler = async (req, res, next): Promise<Response> => {
    const restaurant = req.body
    const newRestaurant = await this.service.createRestaurant(restaurant)
    return res.status(201).json(newRestaurant)
  }

  public updateRestaurantById: RequestHandler = async (req, res, next): Promise<Response> => {
    const restaurantId = Number(req.params.id)
    const restaurant = req.body
    const checkIfRestaurantExistInDB = await this.service.getRestaurantById(restaurantId)
    if (!checkIfRestaurantExistInDB) {
      return res.status(404).json({ message: 'restaurnt notfound' })
    }
    await this.service.updateRestaurantById(restaurant, restaurantId)
    return res.status(202).json({ message: 'successfully updated' })
  }
  public removeRestaurantById: RequestHandler = async (req, res, next): Promise<Response> => {
    const restaurantId = Number(req.params.id)
    const checkIfRestaurantExistInDB = await this.service.getRestaurantById(restaurantId)
    if (!checkIfRestaurantExistInDB) {
      return res.status(404).json({ message: 'restaurnt notfound' })
    }
    await this.service.removeRestaurantById(restaurantId)
    return res.status(204).end()
  }
}