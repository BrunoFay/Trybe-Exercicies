import { ProductService } from "../services/productService";
import { RequestHandler, Response } from 'express'
import { IProductDB, IProduct, IProductPrice } from "../interfaces/IProduct";

export class ProductController {
  private service: ProductService
  constructor() {
    this.service = new ProductService()
  }
  public getAllProduct: RequestHandler = async (req, res, next): Promise<Response> => {
    const products = await this.service.getAllProduct()
    return res.status(200).json(products)
  }
  public getProductByQuery: RequestHandler = async (req, res, next): Promise<Response> => {
    const query: IProductPrice = {
      price: (req.query.min || req.query.max) as string,
      range: (Object.keys(req.query)[0])
    }
    const product = await this.service.getProductByQuery(query)
    return res.status(200).json(product)
  }
  public getProductById: RequestHandler = async (req, res, next): Promise<Response> => {
    const productId = Number(req.params.id)
    const product = await this.service.getProductById(productId)
    return res.status(200).json(product)
  }
  public creatProduct: RequestHandler = async (req, res, next): Promise<Response> => {
    const newProduct: IProduct = req.body
    const response = await this.service.creatProduct(newProduct)
    return res.status(201).json(response)
  }
  public updateProductById: RequestHandler = async (req, res, next): Promise<Response> => {
    const productId = Number(req.params.id)
    const editedProduct: IProduct = req.body
    const checkIfProductExistInDB = await this.service.getProductById(productId)
    if (!checkIfProductExistInDB) {
      return res.status(404).json({ message: 'product notfound' })
    }
    await this.service.updateProductById(editedProduct, productId)
    return res.status(202).json({ message: 'successfully updated' })
  }
  public removeProductById: RequestHandler = async (req, res, next): Promise<Response> => {
    const productId = Number(req.params.id)
    const checkIfProductExistInDB = await this.service.getProductById(productId)
    if (!checkIfProductExistInDB) {
      return res.status(404).json({ message: 'product notfound' })
    }
    await this.service.removeProductById(productId)
    return res.status(204).end()
  }
}