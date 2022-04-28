import fs from 'fs/promises';
import { IPlantCrud, IPlant, IOpsInfo } from '../insterface/plantsInterfaces';

class PlantModel implements IPlantCrud {
  private allPlants: IPlant[]

  constructor() {
    this.allPlants = [];
  }

  async getPlants() {
    const plantsRaw = await fs.readFile('plants.json', { encoding: 'utf8' });
    const plants: IPlant[] = JSON.parse(plantsRaw);
    this.allPlants = plants;
    return plants;
  }

  async getPlantById(id: string) {
    const plantsRaw = await fs.readFile('plants.json', { encoding: 'utf8' });
    const plants: IPlant[] = JSON.parse(plantsRaw);

    const plantById = plants.find((plant) => plant.id === id);
    if (!plantById) return null;
    return plantById;
  }

  async removePlantById(id: string) {
    const newPlants = this.allPlants.filter((plant) => plant.id !== id);
    await fs.writeFile('plants.json', JSON.stringify(newPlants));
    await this.updateNumPlantsSaved();
    return true;
  }

  async editPlant(plantId: string, newPlant: IPlant) {
    const updatedPlants = this.allPlants.map((plant) => {
      if (plant.id === plantId) return newPlant;
      return plant;
    });
    await fs.writeFile('plants.json', JSON.stringify(updatedPlants));
    return newPlant;
  }

  async updateNumPlantsSaved(operator: string = 'remove') {
    const opsInfoRaw = await fs.readFile('opsInfo.json', { encoding: 'utf8' });
    let { createdPlants }: IOpsInfo = JSON.parse(opsInfoRaw);
    operator === 'add' ? createdPlants += 1 : createdPlants -= 1;
    await fs.writeFile('opsInfo.json', JSON.stringify({ createdPlants }));
  }

  async savePlant(plant: IPlant) {
    const plants = this.allPlants;
    plants.push(plant);
    await fs.writeFile('plants.json', JSON.stringify(plants));
    await this.updateNumPlantsSaved('add');
    return true;
  }
}

export default PlantModel;