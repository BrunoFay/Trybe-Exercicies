/* //ex 4



// com for

const numbers = [50, 85, -30, 3, 15];
let biggerN = 0;
for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > biggerN) biggerN = numbers[i]
}
console.log(biggerN);




//com reduce



const numbers = [50, 85, -30, 3, 15];
const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);

const bigger = numbers.reduce(getBigger, 0);
console.log(bigger); // 85





//ex 5


// com filter e reduce]

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const evenNumbersSum = numbers.filter((par) => (par % 2 === 0)).reduce((soma, acc) => soma + acc)
console.log(evenNumbersSum);



// só reduce 


const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumEvenNumbers = numbers.reduce((acc, number) => (number % 2 === 0) ? acc + number : acc)

console.log(sumEvenNumbers);





 */

//ex 5

const estudantes = [
    {
      nome: 'Jorge',
      sobrenome: 'Silva',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 67 },
        { name: 'Português', nota: 79 },
        { name: 'Química', nota: 70 },
        { name: 'Biologia', nota: 65 },
      ],
    },
    {
      nome: 'Mario',
      sobrenome: 'Ferreira',
      idade: 15,
      turno: 'Tarde',
      materias: [
        { name: 'Matemática', nota: 59 },
        { name: 'Português', nota: 80 },
        { name: 'Química', nota: 78 },
        { name: 'Biologia', nota: 92 },
      ],
    },
    {
      nome: 'Jorge',
      sobrenome: 'Santos',
      idade: 15,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 76 },
        { name: 'Português', nota: 90 },
        { name: 'Química', nota: 70 },
        { name: 'Biologia', nota: 80 },
      ],
    },
    {
      nome: 'Maria',
      sobrenome: 'Silveira',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 91 },
        { name: 'Português', nota: 85 },
        { name: 'Química', nota: 92 },
        { name: 'Biologia', nota: 90 },
      ],
    },
    {
      nome: 'Natalia',
      sobrenome: 'Castro',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 70 },
        { name: 'Português', nota: 70 },
        { name: 'Química', nota: 60 },
        { name: 'Biologia', nota: 50 },
      ],
    },
    {
      nome: 'Wilson',
      sobrenome: 'Martins',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 80 },
        { name: 'Português', nota: 82 },
        { name: 'Química', nota: 79 },
        { name: 'Biologia', nota: 75 },
      ],
    },
  ];
/* resultado esperado 
  [
    { name: 'Jorge', materia: 'Português' },
    { name: 'Mario', materia: 'Biologia' },
    { name: 'Jorge', materia: 'Português' },
    { name: 'Maria', materia: 'Química' },
    { name: 'Natalia', materia: 'Português' },
    { name: 'Wilson', materia: 'Português' },
  ] */

  const studantBestNote = estudantes.map((studant)=> ({nome:studant.nome, materia: studant.materias.reduce((acc,stundantNote)=> (acc.nota >stundantNote.nota)? acc:stundantNote ).name}))
  
  console.log(studantBestNote)


/*   .reduce((acc,stundantNote)=> (acc.materia.nota >stundantNote.materia.nota)? acc.materia.materias.name:stundantNote.materia.materias.name) */