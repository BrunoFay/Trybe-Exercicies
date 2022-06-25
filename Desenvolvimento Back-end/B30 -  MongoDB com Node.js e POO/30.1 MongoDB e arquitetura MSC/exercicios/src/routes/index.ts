import { Router } from "express";
import { ChampionsController } from "../controller/championsController";
import { ChampionsModel } from "../model/championsModel";
import { ChampionsService } from "../service/championsService";

const championsRoutes = Router()
const championsModel = new ChampionsModel()
const championsService = new ChampionsService(championsModel)
const championsController = new ChampionsController(championsService)
championsRoutes.get('/', (req,res)=>res.status(200).json({message:'online'}))
championsRoutes.get('/tournaments', championsController.getAll)
championsRoutes.post('/tournaments', championsController.create)
championsRoutes.patch('/tournaments/:id', championsController.update)
championsRoutes.delete('/tournaments/:id', championsController.delete)

export default championsRoutes