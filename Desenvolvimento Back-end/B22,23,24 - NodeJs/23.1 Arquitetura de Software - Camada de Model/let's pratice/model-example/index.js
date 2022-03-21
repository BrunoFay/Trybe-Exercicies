// index.js

const express = require('express');
const Author = require('./models/Author');
const Book = require('./models/Book');
const app = express();
app.use(express.json())
const PORT = process.env.PORT || 3000;

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;

  const author = await Author.findById(id);

  if (!author) return res.status(404).json({ message: 'Not found' });

  res.status(200).json(author);
});

app.get('/books/:author_id', async (req, res) => {
  const { author_id } = req.params
  const books = await Book.getByAuthorId(author_id);
  if (books.length === 0) return res.status(404).json({ message: 'not found' })
  res.status(200).json(books);
});

app.get('/books/', async (_req, res) => {
  const books = await Book.getAll();
  res.status(200).json(books);
});
app.post('/books', async (req, res) => {
  const { title, author_id } = req.body
  if (!Book.validatePostNewBook) return res.status(400).json({ message: 'dados invalidos' })
  await Book.createNewBook(title, author_id)
  res.status(200).json({ message: 'livro adicionado' })
})
app.post('/authors', async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  if (!Author.isValid(first_name, middle_name, last_name)) {
    return res.status(400).json({ message: 'Dados inválidos' });
  }

  await Author.create(first_name, middle_name, last_name);

  res.status(201).json({ message: 'Autor criado com sucesso! ' });
});

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});