import { IPlant, IPlantCrud } from '../insterface/plantsInterfaces';

class PlantService implements IPlantCrud {
  private model: IPlantCrud

  constructor(model: IPlantCrud) {
    this.model = model;
  }

  initPlant(plant: IPlant) {
    const { id, breed, needsSun, origin, specialCare, size } = plant;

    const waterFrequency = needsSun
      ? size * 0.77 + (origin === 'Brazil' ? 8 : 7)
      : (size / 2) * 1.33 + (origin === 'Brazil' ? 8 : 7);

    const newPlant: IPlant = {
      id,
      breed,
      needsSun,
      origin,
      specialCare: {
        ...specialCare,
        waterFrequency,
      },
      size,
    };
    return newPlant;
  }

  async getPlants() {
    const plants = await this.model.getPlants();
    return plants;
  }

  async getPlantById(id: string) {
    const plantById = await this.model.getPlantById(id);
    return plantById;
  }

  async removePlantById(id: string) {
    const plantExistInDB = this.getPlantById(id);
    if (!plantExistInDB) return false;
    const isremoved = await this.model.removePlantById(id);
    return isremoved;
  }

  async getPlantsThatNeedsSunWithId(id: string) {
    const result = (plant: IPlant) => {
      const needsSunById = (plant.needsSun === true) && plant.id === id;
      const specialCare = plant.specialCare === undefined || plant.specialCare.waterFrequency > 2;

      if (needsSunById && specialCare) return true;
      return false;
    };
    return result;
  }

  async editPlant(plantId: string, newPlant: IPlant) {
    const plantExistInDB = this.getPlantById(plantId);
    if (!plantExistInDB) return false;
    const plantEdited = await this.model.editPlant(plantId, newPlant);
    return plantEdited;
  }

  async savePlant(plant: IPlant) {
    const newPlant = this.initPlant({ ...plant });
    await this.model.savePlant(newPlant);
    return true;
  }
}

export default PlantService;