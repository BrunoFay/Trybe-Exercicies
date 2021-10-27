// Faça uma lista com as suas frutas favoritas
const specialFruit = ['kiwi', 'banana', 'ameixa'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['iogurte', 'granola', ' maça'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  return [...fruit,...additional]
};

console.log(fruitSalad(specialFruit, additionalItens));