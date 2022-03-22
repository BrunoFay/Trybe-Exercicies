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
async function getUserById(id) {
  const [user] = await connection.execute(
    `SELECT * FROM users WHERE id = ?;`,
    [id]
  )
  return user
}

async function editUserById(user) {
  const [editUser] = await connection.execute(`
  UPDATE users SET email=?, password=?, first_name=?, last_name=? WHERE id=?;`,
    [user.email, user.password, user.firstName, user.lastName, user.id])
    return editUser
}
module.exports = {
  createUserTable,
  getAllUsers,
  createNewUser,
  getUserById,
  editUserById
}