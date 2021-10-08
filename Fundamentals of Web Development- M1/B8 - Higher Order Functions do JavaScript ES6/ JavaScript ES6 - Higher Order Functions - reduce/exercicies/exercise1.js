const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  function flatten() {
    // escreva seu código aqui
   const array = arrays.reduce((acc,array)=> acc.concat(array))
    return array
  }
  console.log(flatten());