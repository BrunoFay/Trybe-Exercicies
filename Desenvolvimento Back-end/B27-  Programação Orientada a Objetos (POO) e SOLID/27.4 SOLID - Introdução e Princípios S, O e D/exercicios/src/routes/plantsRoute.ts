import { Router } from 'express';
import PlantController from '../controller/plantsController';
import PlantService from '../service/ plantService';
import PlantModel from '../model/plantsModels';

const route = Router();
const model = new PlantModel();
const service = new PlantService(model);
const constructor = new PlantController(service);
route.get('/', constructor.getPlants);
route.get('/:id', constructor.getPlantById);
route.post('/', constructor.savePlant);
route.put('/:id', constructor.editPlant);
route.delete('/:id', constructor.removePlantById);

export default route;