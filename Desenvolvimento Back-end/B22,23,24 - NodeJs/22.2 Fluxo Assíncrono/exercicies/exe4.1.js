
const fs = require('./');
const arraysimpsonsFile= JSON.parse(simpsonsFile) 
function printName() {
return arraysimpsonsFile.map(({id,name})=>console.log(`${id} - ${name}`))
 
}
printName() 