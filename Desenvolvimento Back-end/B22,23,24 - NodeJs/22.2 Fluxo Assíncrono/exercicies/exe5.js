const fs = require('./index.js')

const array = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!']
let fileNames = []

async function writeAndReadFiles(array) {
  let fileRead = []
  for (let index = 0; index < array.length; index++) {
    fileNames.push(`file${index + 1}.txt`)
    fileRead.push(fs.readFile(`file${index + 1}.txt`, 'utf-8'))
    fs.writeFile(`file${index + 1}.txt`, array[index])
  }
  const promiseFiles = await Promise.all(fileRead)
  promiseFiles.forEach(file => console.log(file))
}
try {
  writeAndReadFiles(array)
}
catch (err) {
  console.log(err)
}

async function fileAll() {
  const build = await Promise.all(fileNames.map(file => fs.readFile(file, 'utf-8')))

  await fs.writeFile('fileAll.txt', build.join(' '))
}
try {
  fileAll()
  console.log('fileAll created');
} catch (error) {
  console.log(error);
}