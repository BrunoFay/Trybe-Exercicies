let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge' 
  };
  for(let name in names){
      console.log("óla "+names[name]);

  };

  let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };
  for(let model in car){
      console.log(model+ ": "+ car[model]);

  }
