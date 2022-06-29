import { Controller } from ".";
import { Service } from "../services";
import { RecordStore } from "../types/recordStore";
import { NextFunction, Request, Response } from 'express'

export class RecordStoreController implements Controller {
  route: string;
  constructor(private service: Service<RecordStore>) {
    this.route = '/recordStore'
  }
  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { body } = req
      const newRecord = await this.service.create(body)
      res.status(201).json(newRecord)
    } catch (error) {
      next(error)
    }
  }

  read = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const records = await this.service.read();
      return res.status(200).json(records);
    } catch (error) {
      next(error)
    }
  };
  readOne = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params
      const record = await this.service.readOne(id)
      return res.status(200).json(record);

    } catch (error) {
      next(error)
    }
  }
  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params
      const record = await this.service.readOne(id)
      if (!record) return res.status(404).json({ message: 'record not found' })
      const recordUpdated = await this.service.update(id, req.body)
      return res.status(200).json(recordUpdated)
    } catch (error) {
      next(error)
    }
  }
  delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params
      await this.service.delete(id)
      return res.status(200).end()
    } catch (error) {
      next(error)
    }
  }
}