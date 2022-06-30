import { Schema, model as MongooseModel } from 'mongoose';
import { MongoModel } from '.'
import { RecordStore, RecordStoreDocument } from '../types/recordStore';

export const RercordSchema = new Schema<RecordStoreDocument>({
  artist: String,
  title: String,
  format: String,
  yearPublished:Number,
  new: Boolean
})
export class RecordStoreModel extends MongoModel<RecordStore>{
  constructor(model = MongooseModel('RecordStore', RercordSchema)) {
    super(model)
  }

}