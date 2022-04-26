class Subject {
  constructor(protected _name: string) { }
  get name(): string {
    return this._name
  }
  set name(value) {
    if (value.length >= 3) this._name = value
    else { console.log('Name must be at least 3 characters long') }
  }
}