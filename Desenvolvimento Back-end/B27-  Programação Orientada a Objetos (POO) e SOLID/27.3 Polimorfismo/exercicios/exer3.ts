import { Teacher } from './exer2'

enum Assessments {
  TEST = 'PROVA',
  WORK = 'TRABALHO'
}
export class Evaluation {
  constructor(
    protected _score: number,
    protected _type: Assessments,
    protected _teacher: Teacher) { }
  get score() {
    return this._score
  }
  set score(value) {
    if (this._type === Assessments.TEST && value <= 25) {
      this._score = value
    }
    else if (this._type === Assessments.WORK && value <= 50) {
      this._score = value
    }
    else {
      console.log(`the score ${this._score} not is valid for ${this._type},
       max score is ${this._type === Assessments.TEST ? 25 : 50}`);

    }
  }
  get teacher() {
    return this._teacher
  }
  get type() {
    return this._type
  }
  set type(value) {
    if (value === Assessments.TEST || value === Assessments.WORK) {
      this._type = value
    }
  }

}

class EvaluationResult {
  constructor(
    protected _score: number,
    protected _evaluation: Evaluation) { }
  get score() { return this._score }
  set score(value) {
    if (value >= 0) this._score = value
  }
}