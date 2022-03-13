const fn = require('./index.js')

async function replaceNelsonFromSimpsonsJson() {
  const simpsonsArray = await fn.readFile('./simpsons.json', 'utf-8')
    .then(data => JSON.parse(data))
  const newSimpsonsArray = simpsonsArray.map(({ name, id }) => {
    if (name === 'Nelson Muntz') {
      return ({ id, name: 'Maggie Simpson' })
    }
    else {
      return ({ id, name })
    }
  }
  )

  console.log(newSimpsonsArray);
}
try {
  replaceNelsonFromSimpsonsJson()

} catch (error) {
  console.log(error.message);
}