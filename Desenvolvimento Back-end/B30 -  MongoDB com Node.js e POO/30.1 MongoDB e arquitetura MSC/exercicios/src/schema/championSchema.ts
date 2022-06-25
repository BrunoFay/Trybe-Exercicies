import mongoose from 'mongoose';
import { Champions } from '../types/champions';
const { Schema } = mongoose;

export const championsSchema = new Schema<Champions>({
  year: Number,
  hostCountry: String,
  champions: String,
  runnerUp: String,
  editionGoals: Number,
  editionStrikers: [String],
  bestPlayer: String,
  bestGoalkeeper: String,
  bestYoungPlayer: String,
});
