export interface Employee {
  registration: string,
  salary: number,
  admissionDate: string | Date
  generateRegistration(): string
}