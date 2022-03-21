const connection = require('./connection')

async function getAll(){
const [books]= await connection.execute(
  'SELECT  * FROM model_example.books;',
)
return books
}
async function getByAuthorId(athId){
  const [books]= await connection.execute(
    'SELECT * FROM model_example.books WHERE author_id=?;',
    [athId]
  )
  if (books.length === 0) return null
  return books
}

module.exports={
  getAll,
  getByAuthorId
}