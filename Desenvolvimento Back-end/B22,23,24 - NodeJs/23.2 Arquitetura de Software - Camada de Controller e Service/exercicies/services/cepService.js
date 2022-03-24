const CepModel = require('../models/cepModel')
const ApiViaCepModel = require('../models/apiViaCep')

const getCepByParams = async (cep) => {
  const cepDbFormat = cep.replace('-', '')
  
  const foundCep = await CepModel.getCepByParams(cepDbFormat)
  if (foundCep.length) {
    return foundCep
  }

  const getCepByViaCep = await ApiViaCepModel.getCepByViaCep(cepDbFormat)
  if (!getCepByViaCep) {
    return { "error": { "code": "notFound", "message": "CEP não encontrado" } }
  }
  return getCepByViaCep
  }

const createCep = async (cep, logradouro, bairro, localidade, uf) => {
  const cepDbFormat = cep.replace('-', '')
  const foundCep = await CepModel.getCepByParams(cepDbFormat)
  if (foundCep.length > 0) {
    return { "error": { "code": "alreadyExists", "message": "CEP já cadastrado" } }
  }
  const newCep = await CepModel.createCep(cepDbFormat, logradouro, bairro, localidade, uf)
  return newCep
}


module.exports = { getCepByParams, createCep }
