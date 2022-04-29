

export interface IFooCepAPI{
  getAddressByCEP(cep: string, number: number): Promise<string>

  getCepByAddress(address: string, number: number): Promise<string> 
}

export interface IVehicle {
  drive(): void;
}

export interface IVehicleCanFly {
  fly(): void;
}
