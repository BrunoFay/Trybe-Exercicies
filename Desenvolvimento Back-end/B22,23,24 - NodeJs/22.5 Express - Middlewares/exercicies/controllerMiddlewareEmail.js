function validationLogin(email,password,username=true){
  const regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  const emailValidate = regex.test(email)
  const passwordValidate = (password.length < 8 && password.length > 3) ? true : false
  const token = require('./controllerToken.js')
  if (token().length === 16 && emailValidate && passwordValidate && username) {
    return res.status(StatusCodes.ACCEPTED).json({ email,token:token() })
  }
}
module.exports=validationLogin