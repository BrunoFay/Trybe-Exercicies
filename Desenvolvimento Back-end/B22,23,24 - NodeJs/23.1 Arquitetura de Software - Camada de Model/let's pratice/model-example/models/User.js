const connection = require('./connection')

async function createUserTable() {
  await connection.execute(
    `CREATE TABLE IF NOT EXISTS users
  (id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(150) not null,
  password VARCHAR(15) not null,
  first_name VARCHAR(150) not null,
  last_name VARCHAR(150) not null);`
  )
}

async function getAllUsers() {
  const [users] = await connection.execute(
    'SELECT * FROM users'
  )
  return users
}
async function createNewUser(email, password, first_name, last_name) {
  const [result] = await connection.execute(
    `INSERT INTO users (email,password,first_name,last_name) VALUES (?,?,?,?);`,
    [email, password, first_name, last_name]
  )
  return {
    id: result.insertId,
    email,
    password,
    first_name,
    last_name
  }
}


module.exports = {
  createUserTable,
  getAllUsers,
  createNewUser
}