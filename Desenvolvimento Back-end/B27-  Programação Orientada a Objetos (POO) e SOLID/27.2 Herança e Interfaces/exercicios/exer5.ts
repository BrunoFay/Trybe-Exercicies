import { Person } from './exer1'
import { Employee } from './interface'

class Teacher extends Person implements Employee {

  constructor(
    protected _name: string,
    protected _birthDate: string,
    protected _salary: number,
    private _subject: Subject,
    private _admissionDate: string | Date,
    private _registration: string) {
    super(_name, _birthDate)
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
  get admissionDate() {
    return this._admissionDate
  }
  set admissionDate(value: string | Date) {
    const checkadmissionDate = this.calculateAge(value)
    if (checkadmissionDate > 0) this._admissionDate = value
    else { console.log('Admission date cannot be a future date') }
  }

}
const math = new Subject("matematica")
const roseTeacher = new Teacher("rose", "1976-03-10", 2000, math, "2007-03-03", '00003')
console.log(roseTeacher.subject);
