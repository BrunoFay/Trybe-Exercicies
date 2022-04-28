import { RequestHandler } from 'express';
import { IPlant, IPlantCrud } from '../insterface/plantsInterfaces';

class PlantController {
  constructor(public service: IPlantCrud) { }

  public getPlants: RequestHandler = async (req, res, next) => {
    try {
      const plants: IPlant[] | [] = await this.service.getPlants();
      return res.status(200).json(plants);
    } catch (error) {
      next(error);
    }
  }

  public getPlantById: RequestHandler = async (req, res, next) => {
    try {
      const { id } = req.params;
      console.log(id);
      
      const plant = await this.service.getPlantById(id);
      if (!plant) return res.status(404).json({ message: 'plant notFound' });
      return res.status(200).json(plant);
    } catch (error) {
      next(error);
    }
  }

  public savePlant: RequestHandler = async (req, res, next) => {
    try {
      const isSaved = await this.service.savePlant(req.body);
      if (isSaved) return res.status(201).json({ message: 'plant saved ' });
    } catch (error) {
      next(error);
    }
  }

  public editPlant: RequestHandler = async (req, res, next) => {
    try {
      const { id } = req.params;
      const plant = await this.service.getPlantById(id);
      if (!plant) return res.status(404).json({ message: 'plant notFound' });
      const isEdited = await this.service.editPlant(id, req.body);
      if (isEdited) return res.status(200).json(isEdited);
    } catch (error) {
      next(error);
    }
  }

  public removePlantById: RequestHandler = async (req, res, next) => {
    try {
      const { id } = req.params;
      const plant = await this.service.getPlantById(id);
      if (!plant) return res.status(404).json({ message: 'plant notFound' });
      const isRemoved = await this.service.removePlantById(id);
      if (isRemoved) return res.status(204).end();
    } catch (error) {
      next(error);
    }
  }
}

export default PlantController;