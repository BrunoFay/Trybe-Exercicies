import { RequestHandler } from "express";
import { ServiceType } from "../types/champions";

export class ChampionsController {
  constructor(private service: ServiceType) { }
  getAll: RequestHandler = async (req, res, next) => {
    try {
      if (Object.keys(req.body)[0] === "year") {
        const championsByYear = await this.service.getByYear(req.body)
        if (!championsByYear.length) {
          return res.status(400).json({ message: 'naquele ano não teve copa do mundo.' })
        }
        return res.status(200).json(championsByYear)
      }
      const allChampions = await this.service.getAll()
      return res.status(200).json(allChampions)

    } catch (error) {
      next(error)
    }
  }
  create: RequestHandler = async (req, res, next) => {
    try {
      const newChampions = await this.service.create(req.body)
      return res.status(201).json(newChampions)
    } catch (error) {
      next(error)
    }
  }
  update: RequestHandler = async (req, res, next) => {
    const { id } = req.params
    try {
      const championEdited = await this.service.update(id, req.body)
      return res.status(200).json(championEdited)
    } catch (error) {
      next(error)
    }
  }
  delete: RequestHandler = async (req, res, next) => {
    const { id } = req.params
    try {
      this.service.delete(id)
      return res.status(200).end()
    } catch (error) {
      next(error)
    }
  }
}