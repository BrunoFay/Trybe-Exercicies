enum Color {
  red,
  silver,
  black,
  white
}
enum Doors {
  door1 = 1,
  door2,
  door3,
  door4
}
enum Turn{
  Leaft,
  Right
}
class Car {
  _doors: number
  _brand: string
  _color: Color
  constructor(brand: string, doors: number, color: Color) {
    this._brand = brand
    this._color = color
    this._doors = doors
  }
  honk() {
    console.log('bip bip');
  }
  openTheDoor(door: Doors) {
    console.log(`open door ${door}`);
  }
  closeTheDoor(door: Doors) {
    console.log(`close door ${door}`);
  }
  turnOn() {
    console.log('car on');
  }
  turnOff() {
    console.log('car off');
  }
  speedUp() {
    console.log('speeding up');
  }
  speedDown() {
    console.log('slowing down');
  }
  stop() {
    console.log('stop car');
  }
  turn(side:Turn) {
    console.log(`turn to ${side} direction`);
  }
}
const myCar = new Car('ferrari',4,3)
myCar.stop()