import { Pool, RowDataPacket, ResultSetHeader } from 'mysql2/promise'
import { IProduct, IProductDB, IProductPrice } from '../interfaces/IProduct'

export class ProductModel {
  connection: Pool
  constructor(connetion: Pool) {
    this.connection = connetion
  }
  public async getAllProduct(): Promise<IProductDB[]> {
    const [products] = await this.connection.execute<RowDataPacket[]>(`SELECT * from Products`)
    return products as IProductDB[]
  }

  public async getProductByQuery(query: IProductPrice): Promise<IProductDB> {
    console.log(query);
    const [products] = await this.connection.execute<RowDataPacket[]>(`SELECT * from Products WHERE price ? ?`, [query.range, query.price])
    return products[0] as IProductDB
  }

  public async getProductById(id: number): Promise<IProductDB> {
    const [products] = await this.connection.execute<RowDataPacket[]>(`SELECT * from Products WHERE id=?`, [id])
    return products[0] as IProductDB
  }
  public async creatProduct(product: IProduct): Promise<IProductDB> {
    const products = await this.connection.execute<ResultSetHeader>(`INSERT INTO Products (name,brand,price,manufacturing_date,expiration_date) VALUES (?,?,?,?,?)`,
      [product.name,
      product.brand,
      product.price,
      product.manufacturingDate,
      product.expirationDate])
    const [dataInserted] = products
    const { insertId } = dataInserted
    return { id: insertId, ...product }
  }
  public async updateProductById(product: IProduct, id: number): Promise<void> {
    await this.connection.execute<RowDataPacket[]>(`UPDATE Products SE name=?,brand=?,price=?,manufacturing_date=?,expiration_date=? WHERE id=?`,
      [product.name,
      product.brand,
      product.price,
      product.manufacturingDate,
      product.expirationDate,
        id])
  }
  public async removeProductById(id: number): Promise<void> {
    await this.connection.execute(`DELETE FROM Products WHERE id=?`, [id])
  }
}