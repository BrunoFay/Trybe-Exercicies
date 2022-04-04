const express = require('express')
const bookRote = express.Router()
const controller = require('../controllers/bookController')

bookRote.get('/', controller.getAllBooks)
bookRote.get('/:id', controller.getBookById)
bookRote.post('/', controller.createBook)
bookRote.put('/:id', controller.UpdateBook)
bookRote.delete('/:id', controller.RemoveBook)


module.exports = bookRote