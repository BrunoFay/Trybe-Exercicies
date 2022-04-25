interface Logger {
  log(param: string): void
}

class ConsoleLogger implements Logger {
  log(something: string) {
    console.log(`${something} class 1`);
  }
}

class ConsoleLogger2 implements Logger {
  log(something: string) {
    console.log(`${something} class 2`);

  }
}
interface DataBase {
  attribute: Logger
  save(key: string, value: string): void
}
class ExampleDataBase implements DataBase {
  constructor(public attribute = new ConsoleLogger()) { }
  save(key: string, value: string) {
    this.attribute.log(` saved key ${key} and value ${value}`)

  }
}
const logger1 = new ConsoleLogger()
const logger2 = new ConsoleLogger2()
const exampleDataBase = new ExampleDataBase(logger1)
const exampleDataBase2 = new ExampleDataBase(logger2)
const exampleDataBase3 = new ExampleDataBase()

exampleDataBase.save('chave 1', 'valor 1');
exampleDataBase2.save('chave 2', 'valor 2');
exampleDataBase3.save('chave 3', 'valor 3');