import { Model as M, Document } from 'mongoose';

export interface Model<T> {
  read(): Promise<T[]>
  readOne(id: string): Promise<T | null>
  create(data: T): Promise<T>
  createMany(data: T[]): Promise<T[]>
  update(id: string, data: T): Promise<T | null>
  delete(id: string): Promise<void>
}

export abstract class MongoModel<T> implements Model<T>{
  constructor(protected model: M<T & Document>) { }

  read = async () => this.model.find();

  readOne = async (id: string) => this.model.findOne({ id });

  create = async (data: T): Promise<T | any> => this.model.create({ ...data });

  createMany = async (data: T[]): Promise<T[] | any> => this.model.insertMany(data);

  update = async (id: string, data: T) => {
    return this.model.findByIdAndUpdate({ id }, data, { returnNewDocument: true })
  };

  delete = async (id: string): Promise<void | any> => this.model.deleteOne({ id });
}

