import express from 'express'
import createConnection  from './model/connection'
import routes from './routes'

export class Server {
  public express: express.Application
  constructor() {
    this.express = express()
    this.middlewares()
    this.routes()
    createConnection()
  }
  private middlewares() {
    this.express.use(express.json())
  }

  private routes() {
    this.express.use(routes)
  }
}