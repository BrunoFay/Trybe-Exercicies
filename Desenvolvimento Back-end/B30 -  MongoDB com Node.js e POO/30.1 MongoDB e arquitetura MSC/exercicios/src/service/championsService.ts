import { Champions, ModelType } from "../types/champions";

export class ChampionsService {
  private model: ModelType
  constructor(model: ModelType) {
    this.model = model
  }
  async getAll() {
    return await this.model.getAll()
  }
  async getByYear(year: { year: number }) {
    return await this.model.getByYear(year)
  }
  async create(newChampion: Partial<Champions>) {
    return await this.model.create(newChampion)
  }
  async update(id: string, championToEdit: Partial<Champions>) {
    return await this.model.update(id, championToEdit)
  }
  async delete(id: string) {
    await this.model.delete(id)
  }
}