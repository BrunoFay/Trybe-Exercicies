const Author = require('../services/Authors');

const isValid = (req, res, next) => {
  const { firstName, middleName, lastName } = req.body
  switch (true) {
    case (!firstName):

      return res.status(404).json({ message: 'firstName é obrigatorio' });
    case (typeof firstName !== 'string'):

      return res.status(404).json({ message: 'firstName é precisa ser do tipo string' });
    case (!lastName):

      return res.status(404).json({ message: 'lastName é obrigatorio' });
    case (typeof lastName !== 'string'):

      return res.status(404).json({ message: 'lastName é precisa ser do tipo string' });
    case (middleName && typeof middleName !== 'string'):

      return res.status(404).json({ message: 'middleName é precisa ser do tipo string' });
    default:
      return next();
  } 
}

const validateAuthorBYId = (req,res,next) => {
  const { id } = req.params;

  const author = await Author.findById(id);

  if (!author) return res.status(404).json({ message: 'Author not found' });
  next()
}

module.exports = {
  isValid,
  validateAuthorBYId
}