import { FilmsServices } from "../services/FilmsServices";
import { RequestHandler } from 'express'

export class FilmsController {
  constructor(private service = new FilmsServices()) { }
  getFilms: RequestHandler = async (req, res, next) => {
    try {
      const films = await this.service.getFilms()
      return res.status(200).json(films)

    } catch (error) {
      next(error)
    }
  }
}