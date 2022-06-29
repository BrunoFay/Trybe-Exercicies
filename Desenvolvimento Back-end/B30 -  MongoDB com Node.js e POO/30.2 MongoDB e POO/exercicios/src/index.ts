// src/index.ts

import { RecordStoreController } from './controllers/recordStoreController';
import { RecordStoreModel } from './models/recordStoreModel';
import CustomRouter from './routes';
import App from './server';
import { RecordStoreService } from './services/recordStoreService';

const server = new App();
const recordStoreModel= new RecordStoreModel()
const recordStoreService = new RecordStoreService(recordStoreModel)
const recordStoreController = new RecordStoreController(recordStoreService);
const recordStoreRouter = new CustomRouter(recordStoreController.route);
recordStoreRouter.addRoute(recordStoreController);

server.addRouter(recordStoreRouter.router);

server.startServer();