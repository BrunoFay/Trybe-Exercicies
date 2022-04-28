export interface IPlant {
  id?: string,
  breed: string,
  needsSun: Boolean,
  origin: string,
  size: number,
  specialCare?: { waterFrequency: number }
}
export interface IPlantCrud {
  getPlants(): Promise<IPlant[]|[]>
  getPlantById(id: string): Promise<IPlant|null>
  removePlantById(id: string): Promise<boolean>
  editPlant(id: string, plant: IPlant): Promise<IPlant|boolean>
  savePlant(plant: IPlant): Promise<boolean>
}

export interface IOpsInfo { createdPlants: number }