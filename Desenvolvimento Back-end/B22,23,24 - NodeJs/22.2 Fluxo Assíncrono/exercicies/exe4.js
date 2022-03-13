const fs = require('fs').promises

async function main() {
  const simpsonsFile = await fs.readFile('./simpsons.json', 'utf-8')
    .then(data => JSON.parse(data))

  const newSimpsonsFile = simpsonsFile
    .filter((simp) => simp.id == '4' || simp.id == '6')
  await fs.writeFile('./newsimpsons.json', JSON.stringify(newSimpsonsFile))

}
main()