require('dotenv').config();
const express = require('express')
const bodyParser = require('body-parser')
const { StatusCodes } = require('http-status-codes')
const controller = require('./controllers/cepController')
const app = express()
const PORT = 2020

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('cep exercicio')
})
app.get('/ping', (req, res) => {
  res.status(StatusCodes.OK).json({ message: 'pong' })
})
app.get('/cep/:cep', controller.getCepByParams)

app.post('/cep',controller.createCep)


app.listen(PORT, () => console.log('servidor rodando'))