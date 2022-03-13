const fs = require('./index.js');

async function addNelsontoSimpsonsJson() {
  const simpsonsFile = await fs.readFile('./simpsons.json', 'utf-8')
    .then(data => JSON.parse(data))
    simpsonsFile.push({id:`${simpsonsFile.length + 1}`,name:'Nelson Muntz'})
    await fs.writeFile('./simpsons.json',JSON.stringify(simpsonsFile))
    console.log(simpsonsFile);
}
addNelsontoSimpsonsJson()