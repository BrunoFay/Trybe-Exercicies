const { StatusCodes } = require('http-status-codes')
const rescue = require('express-rescue')
const cepService = require('../services/cepService')

const Joi = require('joi');

const getCepByParams = async(req, res) => {
  const { cep } = req.params
  const result = await cepService.getCepByParams(cep)
  if (result.error) {
    return res.status(StatusCodes.BAD_REQUEST).json(result)
  }
  res.status(StatusCodes.OK).json(result)
}

const createCep = rescue(async(req, res,next) => {
  const { cep, logradouro, bairro, localidade, uf  } = req.body

  const requiredNonEmptyString = Joi.string().not().empty().required();
  const { error } = Joi.object({
    cep: Joi.string().regex(/\d{5}-\d{3}/).required(),
    logradouro: requiredNonEmptyString,
    bairro: requiredNonEmptyString,
    localidade: requiredNonEmptyString,
    uf: requiredNonEmptyString.length(2),
  }).validate(req.body);

  // Caso haja erro de validação, iniciamos o fluxo de erro
  if (error) return next(error);
  const result = await cepService.createCep(cep, logradouro, bairro, localidade, uf)
  if (result.error) {
    return res.status(StatusCodes.BAD_REQUEST).json(result)
  }
  res.status(StatusCodes.OK).json({ message: 'cep criado',result })

})

module.exports = { getCepByParams, createCep }