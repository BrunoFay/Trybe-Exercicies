import { model as createModel } from 'mongoose'
import { championsSchema } from "../schema/championSchema"
import { Champions } from '../types/champions'

export class ChampionsModel {
  constructor(private model = createModel<Champions>('tournaments', championsSchema)) { }
  async getAll() {
    return this.model.find()
  }
  async getByYear(year: { year: number }) {
    return this.model.find(year)
  }
  async create(newChampions: Partial<Champions>) {
    return this.model.create(newChampions)
  }
  async update(id: string, championToEdit: Partial<Champions>) {
    return this.model.findByIdAndUpdate({ _id:id }, { ...championToEdit })
  }
  async delete(id: string) {
    await this.model.deleteOne({_id:id})
  }
}