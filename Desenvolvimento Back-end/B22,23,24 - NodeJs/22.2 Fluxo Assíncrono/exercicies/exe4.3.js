const fs = require('./index.js');
// my answer
async function main() {
  const simpsonsFile = fs.readFile('./simpsons.json', 'utf8') 
    const arraysimpsonsFile= await JSON.parse(simpsonsFile)
     const newSimpsonsFile =  arraysimpsonsFile
     .filter((simp) => simp.id !== '6' && simp.id !== '10')
      await fs.writeFile('./simpsons.json', JSON.stringify(newSimpsonsFile))
   
  }
    main()
  // trybe answer

  
   async function filterSimpsons() {
     const simpsons = await fs
       .readFile('./simpsons.json', 'utf-8')
       .then((fileContent) => JSON.parse(fileContent));
  
     const newArray = simpsons.filter(simpson => simpson.id !== '10' && simpson.id !== '6');
  
  await fs.writeFile('./simpsons.json', JSON.stringify(newArray));
   }