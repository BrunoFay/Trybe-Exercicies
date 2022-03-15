const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const fs = require('fs').promises

const { readSimpsons, writeSimpsons } = require('./controllersFun.js')
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
  return res.status(500).end()
})

app.get('/simpsons/:id', async (req, res) => {
  const { id } = req.params
  const simpsons = await readSimpsons()
  const filterSimpson = simpsons.find((simp) => simp.id === id)
  if (filterSimpson) return res.status(202).json(filterSimpson)

  res.status(404).json({ message: 'simpson not found' })
})

app.post('/simpsons', async(req, res) => {
  const { id, name } = req.body
  const simpsons = await readSimpsons()
  const checkIdInSimpsonsFile = simpsons.some((simp) => simp.id === id)
  if (checkIdInSimpsonsFile) return res.status(409).json({ message: 'id already exists' })
  writeSimpsons([...simpsons,{ id, name }])
  res.status(204).end()
})