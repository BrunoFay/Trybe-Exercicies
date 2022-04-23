

class TV {
  private _brand: string
  private _size: number
  private _resolution: string
  private _connections: string[]
  private _connectedTo?: string

  constructor(b: string, s: number, r: string, c: string[]) {
    this._brand = b;
    this._resolution = r
    this._size = s
    this._connections = c
  }
  public turnOn() {
    console.log(`tv brand is ${this._brand},your size is ${this._size},resolution ${this._resolution},main connection is ${this._connections}`);
  }


  get connectTo(): string{
    return this._connectedTo as string
  }
  set connectTo(newValue: string) {
    if (this._connections.includes(newValue)) {
      this._connectedTo = newValue
      console.log(this._connectedTo);
    }
    else {
      console.log('Sorry, connection unavailable!');
    }
  }
}

const samsungTv = new TV('samsung', 50, "1920 x 1720", ['HDMI', 'ETHERNET', 'WI-FI'])
samsungTv.turnOn()
samsungTv.connectTo = 'HDMI'
console.log(samsungTv.connectTo);


/* class Person {
  name: string;
  private _weight: number;
  private _age: number;
  readonly height: number;

  constructor(name: string, height: number, weight: number, age: number) {
    this.name = name;
    this._weight = weight;
    this._age = age;
    this.height = height;
  }

  getWeight() {
    return this._weight;
  }

// esta sintaxe permite acessar o valor retornado via person.age (como se fosse um atributo normal)
  get age() {
    return this._age;
  }

// do mesmo modo, esta sintaxe permite modificar o valor com uma simples atribuição: person.age = 42
  set age(newValue: number) {
    if (newValue >= 0 && newValue < 200) {
      this._age = newValue;
    }
  }

  birthday() {
    this._age += 1;
  }

}

const p1 = new Person('Maria', 171, 58, 19);
const p2 = new Person('João', 175, 66, 18);
console.log(p1.age);

p1.age= 66
console.log(p1.age);
p1.age= 882
console.log(p1.age);
 */


