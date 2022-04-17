interface Vehicle {
  motor: string;
  color: string;
}
interface Car extends Vehicle {
  Ndoors: number
}
const vehicleGereric: Vehicle = {
  motor: 'v8',
  color: 'black'
}
const genericCar: Car = {
  motor:'v13',
  Ndoors: 4,
  color:'red'
}
console.log(genericCar,vehicleGereric);
