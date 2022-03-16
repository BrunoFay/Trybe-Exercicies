const { questionInt } = require('readline-sync');

const num = questionInt("insert a number to know factorial ");
const factorial = (num) => (num <= 0) ? 1: num * factorial(num - 1);



console.log(`factoril of ${num} is ${factorial(num)}`);