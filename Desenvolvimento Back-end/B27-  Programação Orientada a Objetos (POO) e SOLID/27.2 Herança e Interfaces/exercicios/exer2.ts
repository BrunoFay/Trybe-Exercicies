import { Person } from './exer1'

class Student extends Person {
  constructor(
    public _name: string,
    public _birthDate: string,
    private _enrollment: string,
    private _examsGrades: number[],
    private _worksGrades: number[]
  ) {
    super(_name, _birthDate)
  }
  get enrollment(): string {
    return this._enrollment
  }
  get examsGrades(): number[] {
    return this._examsGrades
  }
  get worksGrades(): number[] {
    return this._worksGrades
  }
  set enrollment(value: string) {
    if (value.length >= 16) this._enrollment = value
    else { console.log('Enrollment must be at least 16 characters long') }
  }
  set examsGrades(value: number[]) {
    if (value.length <= 4) this._examsGrades = value
    else { console.log('Exams grades must be at least 4') }
  }
  set worksGrades(value: number[]) {
    if (value.length <= 2) this._worksGrades = value
    else { console.log('Works grades must be at least 2') }
  }
  sumGrades(): number {
    const allGrades = [...this._examsGrades, ...this._worksGrades]
    return allGrades.reduce((acc, curr) => acc += curr, 0)
  }
  sumAverageGrade(): number {
    const allGrades = [...this._examsGrades, ...this._worksGrades]
    const result: number = (allGrades.reduce((acc, curr) => acc += curr, 0) / allGrades.length)
    return Number(result.toFixed(2))
  }
  toString(): string {
    return `the student is ${this._name}, have ${this.calculateAge(this._birthDate)} years, your enrollment is ${this._enrollment}, the average grade is ${this.sumAverageGrade()}  `
  }
}
const brunoAluno = new Student("bruno", "1996/04/18", 'matematica', [5, 6, 8, 10], [5, 5])
const lanaAluno = new Student("lana", "1998/06/28", 'portugues', [9, 6, 9, 10], [2, 10])
const eminemAluno = new Student("eminem", "2012/12/12", 'musica', [10, 10, 10, 10], [9.9, 10])
console.log(`${brunoAluno}, ${lanaAluno}, ${eminemAluno}`); 

