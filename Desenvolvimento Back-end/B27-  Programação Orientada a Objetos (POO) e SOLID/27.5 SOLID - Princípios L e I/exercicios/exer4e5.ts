// ./FuturisticCar.ts
import { IVehicle, IVehicleCanFly } from './interface';

export default class FuturisticCar implements IVehicle, IVehicleCanFly {
  drive(): void { console.log('Drive a futuristic car'); }

  fly(): void { console.log('Flying a futuristic car'); }
}

class Car implements IVehicle{
  drive(): void {
    console.log('drive a classic car');
    
  }
}
class AirPlane implements IVehicleCanFly{
  fly(): void {
    console.log('flying a classic Airplane');
    
  }
}