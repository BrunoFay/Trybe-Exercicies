import { NextFunction, Request, Response } from "express";

export interface Controller {
  route:string
  create(req: Request, res: Response, next: NextFunction): Promise<any>
  read(_req: Request, res: Response, next: NextFunction): Promise<any>
  readOne(req: Request, res: Response, next: NextFunction): Promise<any>;
  update(req: Request, res: Response, next: NextFunction): Promise<any>;
  delete(req: Request, res: Response, next: NextFunction): Promise<any>;
}