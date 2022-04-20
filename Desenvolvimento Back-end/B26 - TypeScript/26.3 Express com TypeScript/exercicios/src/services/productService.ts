import { connection } from "../database/connection";
import { IProductDB, IProduct, IProductPrice } from "../interfaces/IProduct";
import { ProductModel } from '../modules/productModels'

export class ProductService {
  model: ProductModel
  constructor() {
    this.model = new ProductModel(connection)
  }
  public async getAllProduct(): Promise<IProductDB[]> {
    const products = await this.model.getAllProduct()
    return products
  }
  public async getProductByQuery(query: IProductPrice): Promise<IProductDB> {
    const setQueryType = query.range === "min" ? ">=" : "=<"
    const queryFormated: IProductPrice = { price: '', range: setQueryType }
    const products = await this.model.getProductByQuery(queryFormated)
    return products
  }
  public async getProductById(id: number): Promise<IProductDB> {
    const products = await this.model.getProductById(id)
    return products
  }
  public async creatProduct(product: IProduct): Promise<IProductDB> {
    const newProductFormated = {
      ...product,
      manufacturing_date: product.manufacturingDate,
      expiration_date: product.expirationDate
    }
    const newProduct = await this.model.creatProduct(newProductFormated)
    return newProduct
  }
  public async updateProductById(product: IProduct, id: number): Promise<void> {
    const editedProductFormated = {
      ...product,
      manufacturing_date: product.manufacturingDate,
      expiration_date: product.expirationDate
    }
    await this.model.updateProductById(editedProductFormated, id)

  }
  public async removeProductById(id: number): Promise<void> {
    await this.model.removeProductById(id)
  }
}