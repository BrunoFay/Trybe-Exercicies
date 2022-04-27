import { Teacher } from './exer2'


export class Evaluation {
  constructor(
    protected _score: number,
    protected _teacher: Teacher) { }

  get score() {
    return this._score
  }
  set score(value) {
    if (value >= 0) this._score = value
    else { console.log(`the score ${this._score} cannot be negative`); }
  }
  get teacher() {
    return this._teacher
  }

}

class Exam extends Evaluation {
  constructor(protected _score: number, protected _teacher: Teacher) {
    super(_score, _teacher)
  }
  get score(): number {
    return this._score
  }
  set score(value: number) {
    if (value >= 0 && value <= 25) this._score = value
    else{console.log(`value ${value} isn't valid`);}

  }
  get teacher(): Teacher {
    return this._teacher
  }
}

class Work extends Evaluation {
  constructor(protected _score: number, protected _teacher: Teacher) {
    super(_score, _teacher)
  }
  get score(): number {
    return this._score
  }
  set score(value: number) {
    if (value >= 0 && value <= 50) this._score = value
    else{console.log(`value ${value} isn't valid`);}
  }
  get teacher(): Teacher {
    return this._teacher
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