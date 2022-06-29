import { ZodError } from 'zod'
import { Model } from '../models'
export interface Service<t> {
  read: () => Promise<t[]>
  readOne: (id: string) => Promise<t | null>
  create: (data: t) => Promise<t | ServiceError>
  update: (id: string, data: t) => Promise<t | null | ServiceError>
  delete: (id: string) => Promise<void | ServiceError>
}
export interface ServiceError {
  error: ZodError;
}
export abstract class Services<t> implements Service<t>{
  constructor(protected model: Model<t>) { }

  async read() { return this.model.read() }
  async readOne(id: string) { return this.model.readOne(id) }
  async create(data: t): Promise<t | ServiceError> { return this.model.create(data) }
  async update(id: string, data: t): Promise<t | null | ServiceError> { return this.model.update(id, data) }
  async delete(id: string) { this.model.delete(id) }
}