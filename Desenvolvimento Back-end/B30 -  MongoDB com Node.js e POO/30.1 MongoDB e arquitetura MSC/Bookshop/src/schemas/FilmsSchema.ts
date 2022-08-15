import { Schema } from "mongoose";

export interface Films {
  title: string
  releaseYear: number
}

export const FilmsSchema = new Schema<Films>({
  title: { type: String, required: true },
  releaseYear: { type: Number, required: true }
})