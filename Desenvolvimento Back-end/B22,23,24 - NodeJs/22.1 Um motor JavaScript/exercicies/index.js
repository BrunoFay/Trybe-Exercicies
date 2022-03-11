const { question, questionFloat,questionInt } = require('readline-sync');

const name = question('Qual seu nome? ');

const altura = questionFloat('Qual sua altura?');

const peso = questionInt('Qual seu peso? ');
const result = peso/(altura**2)


console.log(`Hello, ${name}! You IMC is ${result}!`);