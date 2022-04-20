import { Router } from "express";
import { RestaurantController } from "../controllers/restaurantController";
import { validateRestaurantInfos } from "../middlewares/validateRestaurantsInfos";

const route = Router()
const restaurantController = new RestaurantController()
route.get('/:id', restaurantController.getRestaurantById)
route.get('/', restaurantController.getAllRestaurants)
route.post('/', validateRestaurantInfos, restaurantController.createRestaurant)
route.put('/:id', validateRestaurantInfos, restaurantController.updateRestaurantById)
route.delete('/:id', restaurantController.removeRestaurantById)
export default route