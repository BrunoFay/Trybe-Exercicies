function sum (number1, number2) {
    return number1 + number2;
  }
  
  const sumVariable = sum;
  
  console.log(sumVariable(1,4));
  //  [Function: sum]



// exemplo 2




  const sayHello = () => {
    return ('hello trybers');
  }
  
  const printGreeting = (callback) => {
      console.log(callback());
  }
  
  printGreeting(sayHello);






  //exemplo 3 






  const sumFixAmount = (amount) => {
    return (number) => amount + number;
  }
  
  const initialSum = sumFixAmount(15)
  console.log(initialSum(5));









 // exemplo estruturando uma HOF



 const repeat = (number, action) => {
    for (let count = 0; count <= number; count += 1) {
      action(count);
    }
  };
  
  const isEven = (test) => {
    if (test % 2 === 0) {
      console.log(test, 'is even');
    }
  };
  
  const isOdd = (testr) => {
    if ((testr % 2) > 0) {
      console.log(testr, 'is odd');
    }
  };
  
  repeat(7, isEven); // Testa quais números serão pares;
  repeat(5, isOdd); // Testa quais números serão ímpares;














  // exemplo numbergenerator


  const numberGenerator = () => {
    return Math.random() * 100;
  }
  
  console.log(numberGenerator());

















  // vamos praticar!!!

  const morning = () => 'acordando';
  const afternoon = () => 'Bora tomar café'
  const night = () => 'partiu dormir'
  
  const doingThings = (func) => console.log(func());
  doingThings(night)