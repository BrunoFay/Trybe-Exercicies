const fetch = require('node-fetch');
const getCepByViaCep = async (cep) => {
  const url = `https://viacep.com.br/ws/${cep}/json/`
  const response = await fetch(url) 
  const json = await response.json()
  return json
}

module.exports = { getCepByViaCep }