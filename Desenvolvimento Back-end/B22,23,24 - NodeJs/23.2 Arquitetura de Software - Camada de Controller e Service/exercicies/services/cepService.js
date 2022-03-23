const CepModel = require('../models/cepModel')

const getCepByParams = async (cep) => {
const cepDbFormat = cep.replace('-', '')
  const cepRegex = /^\d{5}-?\d{3}$/
  if (!cepRegex.test(cep)) {
    return { "error": { "code": "invalidData", "message": "CEP inválido" } }
  }
  const foundCep = await CepModel.getCepByParams(cepDbFormat)

  if (!foundCep) {
    return { "error": { "code": "notFound", "message": "CEP não encontrado" } }
  }
  return foundCep
}

const createCep = async (cep, logradouro, bairro, localidade, uf) => {
 const cepDbFormat = cep.replace('-', '') 
 const cepRegex = /^\d{5}-?\d{3}$/;
 if (!cepRegex.test(cep)) {
   return { "error": { "code": "invalidData", "message": "CEP inválido" } }
  }
  const foundCep = await CepModel.getCepByParams(cepDbFormat)
  if (foundCep.length > 0) {
    return { "error": { "code": "alreadyExists", "message": "CEP já cadastrado" } }
  } 
  const newCep = await CepModel.createCep(cepDbFormat, logradouro, bairro, localidade, uf)
  console.log(newCep);
  return newCep
}


module.exports = { getCepByParams, createCep }