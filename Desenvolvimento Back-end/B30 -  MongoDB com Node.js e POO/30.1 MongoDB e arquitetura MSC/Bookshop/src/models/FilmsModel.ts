import { model } from 'mongoose'
import { Films, FilmsSchema } from '../schemas/FilmsSchema'
class FilmsModel {
  constructor(private filmModel = model<Films>('movies', FilmsSchema)) { }
  async getFilms() {
   const films= await this.filmModel.find()
    return films
  }
}
export default FilmsModel