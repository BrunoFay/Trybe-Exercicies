const { questionInt } = require('readline-sync');

const distance = questionInt("what's the distance? ");
const time = questionInt("what's the time? ");
const result = distance/time


console.log(` average speed is ${result}m/s²!`);