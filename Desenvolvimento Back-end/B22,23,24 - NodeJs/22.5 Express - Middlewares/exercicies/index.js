const express = require('express')
const app = express()
app.use(express.json())
app.listen(6000, () => { console.log('server up!') })
app.post('/user/register', (req, res) => {
  const { username, email, password } = req.body
  const regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  const emailValidate = regex.test(email)
  const passwordValidate = (password.length < 8 && password.length > 3) ? true : false
  if (username.length > 3 && emailValidate && passwordValidate) {
    return res.status(201).json({ "message": "user created" })
  }
   res.status(400).json( { "message": "invalid data" } )
})