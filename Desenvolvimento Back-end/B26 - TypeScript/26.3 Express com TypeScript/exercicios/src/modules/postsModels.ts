import { Pool, ResultSetHeader, RowDataPacket } from "mysql2/promise"
import { IPost, IPostDB } from '../interfaces/IPosts'

export class PostsModel {
  connection: Pool
  constructor(connection: Pool) {
    this.connection = connection
  }
  public async getAllPosts(): Promise<IPostDB[]> {
    const [posts] = await this.connection.execute('SELECT * FROM Posts')
    return posts as IPostDB[]
  }
  public async getPostsByQuery(query: string): Promise<IPostDB[]> {
    const [posts] = await this.connection.execute(`SELECT * FROM Posts WHERE publicationDate LIKE '%${query}%' OR author LIKE '%${query}%' OR category LIKE '%${query}%'`)
    return posts as IPostDB[]
  }
  public async getPostById(id: number): Promise<IPostDB> {
    const [post] = await this.connection.execute<RowDataPacket[]>('SELECT * FROM Posts WHERE id=?', [id])
    return post[0] as IPostDB
  }
  public async creatPost(post: IPost): Promise<IPostDB> {
    const newPost = await this.connection.execute<ResultSetHeader>(`INSERT INTO Posts(title,author,category,publicationDate) VALUES(?,?,?,?)`,
      [post.title, post.author, post.category, post.publicationDate])
    const [dataInserted] = newPost
    const { insertId } = dataInserted
    return { id: insertId, ...post }
  }
  public async updatePost(post: IPost, id: number): Promise<void> {
    await this.connection.execute(`UPDATE Posts SET title=?,author=?,category=? publicationDate=?WHERE id= ?`, [post.title, post.author, post.category, post.publicationDate, id])
  }
  public async removePost(id: number): Promise<void> {
    await this.connection.execute(`DELETE  FROM Posts WHERE id=?`, [id])
  }

}