const fs = require('fs').promises

function readSimpsons(){
  return fs.readFile('./simpsons.json', 'utf-8')
  .then(fileContent => JSON.parse(fileContent))
}
function writeSimpsons(name){
  return fs.writeFile('./simpsons.json',JSON.stringify(name))
}

module.exports={ readSimpsons,writeSimpsons }