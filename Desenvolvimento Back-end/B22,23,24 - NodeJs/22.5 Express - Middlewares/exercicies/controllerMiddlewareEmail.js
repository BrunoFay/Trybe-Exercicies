const { StatusCodes } = require('http-status-codes')
const token = require('./controllerToken.js')

function usernameValidate(req, res, next) {
  const { username } = req.body
 
  if (!username || username.length < 3) {
    return res.status(StatusCodes.BAD_REQUEST).json({ message:'invalid username' })
  }
  next()
}
function emailValidate(req, res, next) {
  const { email, } = req.body
  const regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  const checkEmail = regex.test(email)
  if ( !checkEmail ) {
    return res.status(StatusCodes.BAD_REQUEST).json({ message:'invalid email' })
  }
  next()
}
function passwordValidate(req, res, next) {
  const { password} = req.body
  const checkPassword = (password.length < 8 && password.length > 3) ? true : false

  if (!checkPassword) {
    return res.status(StatusCodes.BAD_REQUEST).json({ message:'invalid password' })
  }
  next()
}
function tokenValidate(req, res, next) {
  const { token } = req.body
  if ( token.length !== 16 ) {
    return res.status(StatusCodes.BAD_REQUEST).json({ message:'invalid token' })
  }
  next()
}
module.exports = {
  usernameValidate,
  emailValidate,
  passwordValidate,
  tokenValidate
}