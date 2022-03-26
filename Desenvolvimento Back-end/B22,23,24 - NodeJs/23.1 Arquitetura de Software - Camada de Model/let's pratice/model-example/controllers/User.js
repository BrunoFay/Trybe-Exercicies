const UserModels = require('../models/User')
const { StatusCodes } = require('http-status-codes')

async function getAllUser(req,res) {
  await UserModels.createUserTable()
  const users = await UserModels.getAllUsers()
  res.status(StatusCodes.OK).json(users)
}
async function getUserById(req,res){
  const user= req.user
  res.status(StatusCodes.OK).json(user)
}
async function addNewUser(req,res){
  const {
    firstName,
    lastName,
    email,
    password } = req.body
 
  const userCreated = await UserModels.createNewUser(email, password, firstName, lastName)
  res.status(StatusCodes.CREATED).json(userCreated)
}

async function editNewUser(req,res) {
  const { id } = req.params
  const {
    firstName,
    lastName,
    email,
    password } = req.body
  const userObject = {
    id,
    firstName,
    lastName,
    email,
    password
  }
   await UserModels.editUserById(userObject)
  res.status(StatusCodes.ACCEPTED).json(userObject)
}

module.exports={
  getAllUser,
  getUserById,
  addNewUser,
  editNewUser,
}