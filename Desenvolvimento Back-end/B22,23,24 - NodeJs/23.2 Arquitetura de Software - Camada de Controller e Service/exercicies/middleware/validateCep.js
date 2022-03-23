const Joi = require('joi');
const validateValidCep = (req, res, next) => {
  const { cep } = req.params || req.body;
  const cepRegex = /^\d{5}-?\d{3}$/
  if (!cepRegex.test(cep)) {

    return res.status(400).json({ "error": { "code": "invalidData", "message": "CEP inválido" } })
  }
  next()
}

module.exports = { validateValidCep }