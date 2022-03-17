const express = require('express')
const { StatusCodes } = require('http-status-codes')
const { validationLogin } = require('./controllerMiddlewareEmail')
const app = express()

app.use(express.json())
app.listen(6000, () => { console.log('server up!') })

app.post('/user/register', (req, res) => {
  const { username, email, password } = req.body
  const usernameValidate = username.length > 3
  validationLogin(email, password, usernameValidate)
  res.status(StatusCodes.UNAUTHORIZED).json({ "message": "invalid data" })
})

app.post('/user/login', (req, res) => {
  const { email, password } = req.body
  validationLogin(email, password)

  res.status(StatusCodes.BAD_REQUEST).end()
})

app.get('/btc/price',(req,res)=>{})