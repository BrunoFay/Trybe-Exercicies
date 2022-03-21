const connection = require('./connection')

async function getAll() {
  const [books] = await connection.execute(
    'SELECT  * FROM model_example.books;',
  )
  return books
}
async function getByAuthorId(athId) {
  const [books] = await connection.execute(
    'SELECT * FROM model_example.books WHERE author_id=?;',
    [athId]
  )
  if (books.length === 0) return null
  return books
}

async function validatePostNewBook(title, author_id) {
  const [authors] = await connection.execute(
    'SELECT * FROM model_example.authors WHERE author_id=?;',
    [author_id]
  )

  if (!title || title.length < 3) return false
  else if (!author_id || authors.length === 0) return false
}
async function createNewBook(title, author_id) {
  connection.execute(
    'INSERT INTO model_example.books (title,author_id) VALUES (?,?)',
    [title, author_id]
  )
}
module.exports = {
  getAll,
  getByAuthorId,
  validatePostNewBook,
  createNewBook
}