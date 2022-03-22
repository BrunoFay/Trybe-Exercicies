const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')

async function validateData(req, res, next) {
  const {
    firstName,
    lastName,
    email,
    password } = req.body
  if (!firstName || !lastName || !email || !password) {
    return res.status(StatusCodes.NOT_ACCEPTABLE)
      .json({
        "error": true,
        "message": "verifique os campos"
      })
  }
  if (password.length < 6) {
    return res.status(StatusCodes.NOT_ACCEPTABLE).json({
      "error": true,
      "message": "O campo 'password' deve ter pelo menos 6 caracteres"
    })
  }
  next()
}
async function checkUserIdExist(req,res,next) {
  const { id } = req.params
  const getUserId = await User.getUserById(id)
  if (!getUserId.length) return res.status(StatusCodes.NOT_FOUND).json({
    "error": true,
    "message": "Usuário não encontrado"
  })
  req.user = getUserId
  next()
}
module.exports = {
  validateData,
  checkUserIdExist
}