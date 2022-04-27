import { Person } from './exer1'

interface Enrollment {
  enrollment: string,
  generateEnrollment(): string
}

class Student extends Person implements Enrollment {
  _enrollment: string
  private _evaluationsResults: number[] = []
  constructor(
    public _name: string,
    public _birthDate: string,
  ) {
    super(_name, _birthDate)
    this._enrollment = this.generateEnrollment()
  }
  generateEnrollment() {
    const stringRandom = Math.random().toString(36).substring(1, 10)
    return stringRandom
  }
  get enrollment(): string {
    return this._enrollment
  }
  get evaluationsResults(): number[] {
    return this._evaluationsResults
  }
  sumGrades(): number {
    return this._evaluationsResults.reduce((acc, curr) => acc += curr, 0)
  }
  sumAverageGrade(): number {
    const allGrades = [...this._evaluationsResults]
    const result: number = (allGrades.reduce((acc, curr) => acc += curr, 0) / allGrades.length)
    return Number(result.toFixed(2))
  }
  addEvaluationResult(value:number) {
    this._evaluationsResults.push(value)
  }
  toString(): string {
    return `the student is ${this._name}, have ${this.calculateAge(this._birthDate)} years, your enrollment is ${this._enrollment}, the average grade is ${this.sumAverageGrade()}  `
  }
}
/* const brunoAluno = new Student("bruno", "1996/04/18", 'matematica', [5, 6, 8, 10], [5, 5])
const lanaAluno = new Student("lana", "1998/06/28", 'portugues', [9, 6, 9, 10], [2, 10])
const eminemAluno = new Student("eminem", "2012/12/12", 'musica', [10, 10, 10, 10], [9.9, 10])
console.log(`${brunoAluno}, ${lanaAluno}, ${eminemAluno}`); */



export class Employee extends Person implements Enrollment {
  enrollment: string
  protected _salary: number
  _admissionDate: string | Date = new Date()

  constructor(_nome: string, _birthDate: string, salary: number) {
    super(_nome, _birthDate)
    this.enrollment = this.generateEnrollment()
    this._salary = salary
  }
  get admissionDate() {
    return this._admissionDate
  }
  set admissionDate(value: string | Date) {
    const checkadmissionDate = this.calculateAge(value)
    if (checkadmissionDate > 0) this._admissionDate = value
    else { console.log('Admission date cannot be a future date') }
  }
  generateEnrollment() {
    const stringRandom = Math.random().toString(36).substring(2, 15)
    return stringRandom
  }
}
enum Subject {
  MATH = 'math',
  HIST = 'history',
  ING = 'english'
}

export class Teacher extends Employee {
  private _registration: string
  constructor(
    protected _name: string,
    protected _birthDate: string,
    protected _salary: number,
    private _subject: Subject,
    _admissionDate: string | Date) {
    super(_name, _birthDate, _salary)
    this._registration = this.generateRegistration()
  }

  get subject() {
    return this._subject
  }
  set subject(value: Subject) {
    this._subject = value
  }
  get registration(): string {
    return this._registration
  }
  set registration(value) {
    if (value.length >= 16) this._registration = value
    else { console.log('Registration must be at least 16 characters long') }
  }
  get salary(): number {
    return this._salary
  }
  set salary(value) {
    if (value > 0) this._salary = value
    else { console.log('Salary must be greater than 0') }
  }
  generateRegistration(): string {
    const stringRandom = Math.random().toString(36).substring(2, 15)
    return stringRandom
  }

}

const brunoF = new Student('bruno fay', '1996/04/18', )
const alessandraR = new Student('alessandra Rebello', '1991/06/03', )
const emilio = new Teacher('emilio', '1976/04/13', 20000, Subject.MATH, '2015/07/03')
const marcia = new Teacher('marcia mainardi', '1976/04/13', 4000, Subject.HIST, new Date())
