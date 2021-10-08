const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  const numberOfA = names
    .reduce((acc, string) => acc + string.split('')
    .reduce((acc, letra) => (letra === 'A' || letra === 'a') ? acc += 1 : acc, 0), 0)
  return numberOfA
}


console.log(containsA());


