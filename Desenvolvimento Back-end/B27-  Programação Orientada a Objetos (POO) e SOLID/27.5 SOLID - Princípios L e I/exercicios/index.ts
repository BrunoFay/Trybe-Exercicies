// ./index.ts
import CepService from './CepService';
import FooCepAPI, { MockFooApi } from './FooCepAPI';

async function main() {
  const FooCep =new FooCepAPI()
  const mocked =new MockFooApi()
  const cepSvc = new CepService(mocked);

  console.log(
    'get address by cep', 
    '->', 
    await cepSvc.addressByCep('xx.xxx-xx', 10),
  );
  console.log(
    'get cep by address', 
    '->', 
    await cepSvc.cepByAddress('street foo, between bar and baz', 10),
  );
}

main();