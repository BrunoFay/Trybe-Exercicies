const { questionInt } = require('readline-sync');

const guess = questionInt("what's your guess between 1 and 10? ");
const ramdomNum=()=> Math.floor(Math.random() * 10 + 1)
const drawnNum=ramdomNum()
const result = guess===drawnNum?'wooow congrats':'sorry, maybe next time'


console.log(`${result},your guess ${guess} number drawn ${drawnNum}`);