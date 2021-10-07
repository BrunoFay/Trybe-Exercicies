//com o for 
const numbers = [32, 15, 3, 2, -5, 56, 10];
let sumNumbers = 0;
// A variável 'acumula', a cada iteração do for, o resultado da operação feita lá!

for (let index = 0; index < numbers.length; index += 1) {
    sumNumbers += numbers[index];
}
console.log(sumNumbers); // 113



//com reduce


const numbers = [32, 15, 3, 2, -5, 56, 10];

const sumNumbers = numbers.reduce((result, number) => result + number); // O parâmetro `result` é o acumulador. Ele recebe, do `reduce`, o retorno da função a cada iteração.
console.log(sumNumbers); // 113

// Ou seja:

const getSum = (result, number) => result + number;
const sumNumbers = numbers.reduce(getSum);
console.log(sumNumbers); // 113




// ex 2



const collection = [1, 2, 3, 4, 5];

const getSum = (accumulator, number) => {
    console.log(accumulator); // 1 3 6 10
    return accumulator + number;
};

const sumNumbers = collection.reduce(getSum);
console.log(sumNumbers); // 15






//ex 3



const numbers = [32, 15, 3, 2, -5, 56, 10];

const getSum = (result, number) => {
    console.log(result); // 32 47 50 52 47 103
    return result + number;
};

const sumNumbers = numbers.reduce(getSum);
console.log(sumNumbers); // 113




// adicionando um segundo parametro para o reduce




const numbers = [32, 15, 3, 2, -5, 56, 10];

const getSum = (result, number) => {
    console.log(result); // 0 32 47 50 52 47 103
    return result + number;
};
const sumNumbers = numbers.reduce(getSum, 0); // Parâmetro adicionado ao reduce: o "0"
console.log(sumNumbers); // 113




//colocando outro valor no segundo parametro para observar o que acontece com o resultado







