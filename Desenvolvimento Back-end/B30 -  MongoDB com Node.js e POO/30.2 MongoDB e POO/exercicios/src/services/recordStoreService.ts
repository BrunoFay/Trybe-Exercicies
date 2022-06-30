import { ZodError } from "zod";
import { Services } from ".";
import { Model } from "../models";
import { RecordStore, recordStoreZodSchema } from "../types/recordStore";

export class RecordStoreService extends Services<RecordStore>{
  constructor(model: Model<RecordStore>) {
    super(model)
  }
  create = async (obj: RecordStore): Promise<RecordStore | { error: ZodError }> => {

    const parsed = recordStoreZodSchema.safeParse(obj);
    if (!parsed.success) {
      return { error: parsed.error };
    }
    return await this.model.create(obj);
  };
  createMany = async (array: RecordStore[]) => {
    return await this.model.createMany(array)
  }
  update = async (id: string, obj: RecordStore): Promise<RecordStore | null | { error: ZodError }> => {
    const parsed = recordStoreZodSchema.safeParse(obj);
    if (!parsed.success) {
      return { error: parsed.error };
    }
    const dataToUpdate = obj!
    return await this.model.update(id, dataToUpdate);
  };
  delete = async (id: string): Promise<void> => {
    this.model.delete(id);
  };
}