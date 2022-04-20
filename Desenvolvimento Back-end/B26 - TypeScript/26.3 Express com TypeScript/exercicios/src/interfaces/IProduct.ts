export interface IProduct {
  name: string,
  brand: string,
  price: number,
  manufacturingDate: string,
  expirationDate: string,
}
export interface IProductDB extends IProduct {
  id: number
}
export interface IProductPrice {
  price: string
  range: string
  
}