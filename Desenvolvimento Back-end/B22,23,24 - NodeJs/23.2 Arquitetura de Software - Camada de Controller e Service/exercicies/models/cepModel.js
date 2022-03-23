const connection = require('./connection')

const getCepByParams = async (cep) => {
  const [foundCep] = await connection.execute(`SELECT * FROM ceps WHERE cep=?`, [cep])
  return foundCep
}

const createCep = async (cep, logradouro, bairro, localidade, uf) => {
  const [newCep] = await connection.execute(`INSERT INTO ceps (cep, logradouro, bairro, localidade, uf) VALUES (?, ?, ?, ?, ?)`, [cep, logradouro, bairro, localidade, uf])
  return {id:newCep.insertId, cep, logradouro, bairro, localidade, uf}
}
module.exports = { getCepByParams, createCep }