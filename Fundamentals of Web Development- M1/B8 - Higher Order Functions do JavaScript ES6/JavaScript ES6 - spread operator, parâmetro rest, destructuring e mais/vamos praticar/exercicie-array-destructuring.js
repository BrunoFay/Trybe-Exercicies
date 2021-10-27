const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring
const [saudacao,funcao] =saudacoes
console.log(saudacao);





//ex2
let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';


// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo
[animal,bebida,comida]=[comida,animal,bebida]
console.log(comida, animal, bebida); // arroz gato água





//ex3

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

[,,,...numerosPares]= numerosPares
console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo[]