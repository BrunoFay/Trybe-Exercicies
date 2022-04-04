const { Book } = require('../models')
const getAllBooks = async (req, res, next) => {
  try {
    const books = await Book.findAll()
    return res.status(200).json(books)
  } catch (error) {
    console.log(error.message);
    next(error)
  }
}
const getBookById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const bookFiltred = await Book.findByPk(id);
    if (!bookFiltred) return res.status(404).json({ message: 'Livro não encontrado' });
    return res.status(200).json(bookFiltred)
  } catch (error) {
    console.log(error.message);
    next(error)

  }
}
const RemoveBook = async (req, res, next) => {
  try {
    const { id } = req.params
    const bookRemoved = await Book.destroy({ where: { id } })
    if (!bookRemoved) return res.status(404).json({ message: 'Livro não encontrado' });

    return res.status(200).json('livro removido com sucesso')
  } catch (error) {
    console.log(error.message);
    next(error)
  }
}
const createBook = async (req, res, next) => {
  try {
    const { title, author } = req.body
    const bookCreated = await Book.create({ title, author, pageQuantity, test })
    console.log(bookCreated.dataValues);
    return res.status(204).json(bookCreated.dataValues)

  } catch (error) {
    console.log(error.message);
    next(error)

  }
}
const UpdateBook = async (req, res, next) => {
  try {
    const {
      body: { title, author, pageQuantity, test },
      params: { id }
    } = req
    const bookUpdated = await Book.update({ title, author, pageQuantity, test }, { where: { id } })
    if (!bookUpdated) return res.status(404).json({ message: 'Livro não encontrado' });
    return res.status(222).json(bookUpdated)
  } catch (error) {
    console.log(error.message);
    next(error)

  }
}

module.exports = {
  getAllBooks,
  getBookById,
  RemoveBook,
  createBook,
  UpdateBook,
}
