const { question, questionFloat, questionInt } = require('readline-sync');

const name = question('Qual seu nome? ');

const altura = questionFloat('Qual sua altura?');

const peso = questionInt('Qual seu peso? ');
const result = (peso / (altura ** 2)).toFixed(2)
const imgCategory = (imc) => {
  if (imc > 0 && imc < 18.5) { return 'Abaixo do peso (magreza)' }
  else if (imc > 18.5 && imc < 24.9) { return ' Peso normal' }
  else if (imc > 25.0 && imc < 29.9) { return 'Acima do peso (sobrepeso)' }
  else if (imc > 30.0 && imc < 34.9) { return 'Obesidade grau I' }
  else if (imc > 35.0 && imc < 39.9) { return 'Obesidade grau II' }
  else {
    return 'Obesidade graus III e IV';
  }

}

console.log(`Hello, ${name}! You IMC is ${result} ${imgCategory(result)}!`);