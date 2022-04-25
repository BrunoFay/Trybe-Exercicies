/* class SuperClass {
  constructor(public isSuper = true) { }
  protected sayHello() {
    console.log('ola mundo');

  }
}
class SubClass extends SuperClass {
  sayBye() {
    this.sayHello()
    console.log("adeus mundo");
  }
}

const func = (obj: SubClass) => obj.sayBye()
 const superClass = new SuperClass()
const subClass = new SubClass()
 func(superClass) 
func(subClass) */

class SuperClass {
  constructor(public isSuper = true) { }
  sayHello() {
    console.log('ola mundo');

  }
}
class SubClass extends SuperClass {
  constructor() {
    super(false)
  }
  sayBye() {
    this.sayHello()

  }
}

const func = (obj: SuperClass): void => {
  obj.sayHello()
  const checkIsSuper: string = obj.isSuper ? 'Super!' : 'Sub!'
  console.log(checkIsSuper)
}

const superClass = new SuperClass()
const subClass = new SubClass()
func(superClass)
func(subClass)
