const express = require('express')
const { StatusCodes } = require('http-status-codes')
const {
  usernameValidate,
  emailValidate,
  passwordValidate,
  tokenValidate
} = require('./controllerMiddlewareEmail')
const fetch = require('./fetch')
const app = express()

app.use(express.json())
app.listen(6000, () => { console.log('server up!') })

app.post('/user/register', [
  usernameValidate,
  emailValidate,
  passwordValidate], (req, res) => {
    res.status(StatusCodes.ACCEPTED).json({ "message": "user registred" })
  })

app.post('/user/login',
  emailValidate,
  passwordValidate, (req, res) => {
    res.status(StatusCodes.ACCEPTED).json({ "message": "user loged" })
  })



