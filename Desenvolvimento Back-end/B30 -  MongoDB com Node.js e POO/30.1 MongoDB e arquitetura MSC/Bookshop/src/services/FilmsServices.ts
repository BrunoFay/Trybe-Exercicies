import FilmsModel from "../models/FilmsModel";
import { Films } from "../schemas/FilmsSchema";

export class FilmsServices {
  constructor(private model = new FilmsModel()) { }
  async getFilms(): Promise<Films[]> {
    const films = await this.model.getFilms()
    return films
  }
}