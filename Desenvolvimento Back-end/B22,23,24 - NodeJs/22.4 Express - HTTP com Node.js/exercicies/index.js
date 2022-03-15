const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const fs = require('fs').promises

app.use(bodyParser.json())

app.listen(3003, () => {
  console.log('servidor rodando na porta 3003');
})
app.get('/ping', (req, res) => {
  const pong = { message: 'pong' }
  return res.status(200).json(pong)
})
app.post('/hello', (req, res) => {
  const { name } = req.body
  const message = { message: `hello,${name}` }
  res.status(201).json(message)
})

app.post('/greetings', (req, res) => {
  const { name, age } = req.body
  if (age > 17) return res.status(200).json({ message: `hello,${name}` })
  res.status(401).json({ message: `Unauthorized` })
})

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params
  const message = { message: `Seu nome é ${name} e você tem ${age} anos de idade` }
  res.status(201).json(message)
})

app.get('/simpsons', async (req, res) => {
  const simpsonsFile = await fs.readFile('./simpsons.json', 'utf-8')
    .then(fileContent => JSON.parse(fileContent));
  if (simpsonsFile) return res.status(200).json(simpsonsFile)
  return res.status(500)
})