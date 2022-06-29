// src/routes/Router.ts

import { Router } from 'express';
import { Controller } from '../controllers';

class CustomRouter {
  public router: Router;
  public route: string
  constructor(route: string) {
    this.router = Router();
    this.route=route
  }

  public addRoute(controller: Controller) {
    this.router.post(this.route, controller.create);
    this.router.get(this.route, controller.read);
    this.router.get(`${this.route}/:id`, controller.readOne);
    this.router.put(this.route, controller.update);
    this.router.delete(`${this.route}/:id`, controller.delete);
  }
}

export default CustomRouter;