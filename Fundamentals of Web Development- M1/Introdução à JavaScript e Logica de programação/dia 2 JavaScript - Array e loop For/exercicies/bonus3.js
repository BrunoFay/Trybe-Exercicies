let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
  let novoArray = []
  
    for(let index = 0;index < array.length;index +=1 ){
        if (index +1 < array.length){
            novoArray.push(array[index +1] * array[index] )
        }

    }
  
  console.log(novoArray);
