import { ObjectId } from "mongoose"

export type Champions = {
  year: number,
  hostCountry: string,
  champions: string,
  runnerUp: string,
  editionGoals: number,
  editionStrikers: string[],
  bestPlayer: string,
  bestGoalkeeper: string,
  bestYoungPlayer: string,
}
export type ServiceType = {
  getAll: () => Promise<Champions[]>
  getByYear: (year: { year: number }) => Promise<Champions[]>
  create: (newChampion: Partial<Champions>) => Promise<Partial<Champions>>
  update: (id: string, dataToEdit: Partial<Champions>) => Promise<Champions | null>
  delete: (id: string) => Promise<void>
}
export type ModelType = {
  getAll: () => Promise<Champions[]>
  getByYear: (year: { year: number }) => Promise<Champions[]>
  create: (newChampion: Partial<Champions>) => Promise<Partial<Champions>>
  update: (id: string, dataToEdit: Partial<Champions>) => Promise<Champions | null>
  delete: (id: string) => Promise<void>

}