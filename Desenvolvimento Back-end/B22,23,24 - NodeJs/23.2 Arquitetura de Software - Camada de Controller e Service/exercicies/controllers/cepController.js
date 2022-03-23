const { StatusCodes } = require('http-status-codes')
const Joi = require('joi');
const cepService = require('../services/cepService')

const getCepByParams = async(req, res) => {
  const { cep } = req.params
  const result = await cepService.getCepByParams(cep)
  if (result.error) {
    return res.status(StatusCodes.BAD_REQUEST).json(result)
  }
  res.status(StatusCodes.OK).json({ message: 'cep válido' })
}

const createCep = async(req, res) => {
  const { cep, logradouro, bairro, localidade, uf  } = req.body
  const result = await cepService.createCep(cep, logradouro, bairro, localidade, uf)
  if (result.error) {
    return res.status(StatusCodes.BAD_REQUEST).json(result)
  }
  res.status(StatusCodes.OK).json({ message: 'cep criado',result })

}

module.exports = { getCepByParams, createCep }