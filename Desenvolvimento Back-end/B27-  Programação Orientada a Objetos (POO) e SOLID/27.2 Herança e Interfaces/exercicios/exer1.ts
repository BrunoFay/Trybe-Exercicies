export class Person {
  constructor(protected _name: string, protected _birthDate: string) { }
  get name() {
    return this._name
  }
  set name(value: string) {
    if (value.length >= 3) this._name = value
    else { console.log('Name must be at least 3 characters long') }
  }
  get birthDate() {
    return this._birthDate
  }
  calculateAge(value: string | Date): number {
    const today = new Date()
    const birthDate = new Date(value || this._birthDate)
    let age = today.getFullYear() - birthDate.getFullYear()
    const month = today.getMonth() - birthDate.getMonth()
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--
    }
    return age
  }
  set birthDate(value: string) {
    const regexDate = /\d{4}[\-\/\s]?((((0[13578])|(1[02]))[\-\/\s]?(([0-2][0-9])|(3[01])))|(((0[469])|(11))[\-\/\s]?(([0-2][0-9])|(30)))|(02[\-\/\s]?[0-2][0-9]))$/
    const age = this.calculateAge(value)
    console.log(regexDate.test(value));
    if (age < 120 && regexDate.test(value)) this._birthDate = value
    else { console.log(`${value} is invalid date format`) }

  }

}
 const bruno = new Person("BRUNO FAY", "2096/04/18")


bruno.birthDate = '1996-04-18' 