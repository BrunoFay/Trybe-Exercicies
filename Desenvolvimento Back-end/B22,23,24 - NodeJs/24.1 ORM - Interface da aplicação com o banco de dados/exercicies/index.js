require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const books = require('./rotes')
const app = express()
const errorMiddleware = require('./middleware/errorMiddleware')
app.use(bodyParser.json())
app.use('/books', books)

app.use(errorMiddleware)
app.listen(6000, () => { console.log('servidor rodando'); })