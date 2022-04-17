interface Dogs {
  breed: string;
  color?: string;
  dangerous: boolean
}
class Dogs {
  constructor(breed: string, color: string, dangerous: boolean) {
    this.breed = breed;
    this.color = color;
    this.dangerous = dangerous;
  }
  dogDescription() {
    return `this dog belogs to breed ${this.breed}
    ,${this.color ? `has color ${this.color},` : `,`} it's dangerous?${this.dangerous} `
  }
}
const poodle = new Dogs('poodle', 'white', false)
console.log(poodle.dogDescription());

interface Home {
  Nbedrooms: number;
  Nbathrooms: number;
  color?: string;
  hasGarden: boolean
}
class Home {
  constructor(
    Nbedrooms: number,
    Nbathrooms: number,
    hasGarden: boolean,
    color?: string,) {
    this.Nbedrooms = Nbedrooms
    this.Nbathrooms = Nbathrooms
    this.color = color
    this.hasGarden = hasGarden
  }
  colorHouse() {
    return this.color
  }
  numBathroomsHouse() {
    return this.Nbathrooms
  }

  numBedroomsHouse() {
    return this.Nbedrooms
  }
}

const casa1 = new Home(3, 2, true, 'green')
const casa2 = new Home(3, 2,false)
console.log(casa1.color,"||||",casa2.color);
