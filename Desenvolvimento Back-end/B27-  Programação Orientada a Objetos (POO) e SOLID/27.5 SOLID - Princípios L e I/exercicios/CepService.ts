// ./CepService.ts
import { IFooCepAPI } from './interface';

class CepService {

  constructor(private readonly cepApi: IFooCepAPI) {  }

  addressByCep(cep: string, num: number) {
    return this.cepApi.getAddressByCEP(cep, num);
  }

  cepByAddress(address: string, num: number) {
    return this.cepApi.getCepByAddress(address, num);
  }
}

export default CepService;