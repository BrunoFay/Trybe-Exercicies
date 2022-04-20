export interface IRestaurant {
  name: string;
  category: string;
  openingTime: string;
  closingTime: string;
}

export interface IRestaurantDB extends IRestaurant {
  id: number
}