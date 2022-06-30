import { boolean, number, string, z } from 'zod'
import {Document} from 'mongoose'
export const recordStoreZodSchema=z.object({
  artist:string(),
  title:string(),
  format:string(),
  yearPublished:number(),
  new:boolean()
})
export type RecordStore = z.infer<typeof recordStoreZodSchema>
export  interface RecordStoreDocument extends RecordStore, Document{}
