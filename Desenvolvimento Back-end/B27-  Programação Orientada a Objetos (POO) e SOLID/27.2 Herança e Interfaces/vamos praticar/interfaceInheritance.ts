interface MyInterface {
  myNumber: number
  myFunc(param: number): string
}
class MyClass implements MyInterface {
  constructor(public myNumber = 0) { }
  myFunc(param: number): string {
    const result = this.myNumber + param
    return `the result sum is ${result}`
  }
}
const sum = new MyClass(2)
console.log(sum.myFunc(2));
