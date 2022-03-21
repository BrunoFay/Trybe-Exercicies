// index.js

const express = require('express');
const Author = require('./models/Author');
const Book =require('./models/Book');
const { query } = require('./models/connection');
const app = express();

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
  const {author_id} = req.params
  const books = await Book.getByAuthorId(author_id);
  if(books.length === 0)return res.status(404).json({message:'not found'})
  res.status(200).json(books);
});

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});