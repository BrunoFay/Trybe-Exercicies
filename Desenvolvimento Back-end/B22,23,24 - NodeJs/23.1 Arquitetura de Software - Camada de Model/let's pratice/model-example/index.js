// index.js

const express = require('express');
const Author = require('./models/Author');
const Book = require('./models/Book');
const User = require('./models/User')
const { StatusCodes } = require('http-status-codes')
const app = express();
app.use(express.json())

const PORT = process.env.PORT || 3000;

app.get('/users', async (req, res) => {
  await User.createUserTable()
  const users = await User.getAllUsers()
  res.status(StatusCodes.OK).json(users)

})

app.get('/users/:id', async (req, res) => {
  const { id } = req.params
  const user = await User.getUserById(id)
  if (!user.length) return res.status(StatusCodes.NOT_FOUND).json({
    "error": true,
    "message": "Usuário não encontrado"
  })
  await User.createUserTable()
  res.status(StatusCodes.OK).json(user)
})

app.post('/users', async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    password } = req.body
  if (!firstName || !lastName || !email || !password) {
    return res.status(StatusCodes.NOT_ACCEPTABLE)
      .json({
        "error": true,
        "message": "verifique os campos"
      })
  }
  if (password.length < 6) {
    return res.status(StatusCodes.NOT_ACCEPTABLE).json({
      "error": true,
      "message": "O campo 'password' deve ter pelo menos 6 caracteres"
    })
  }
  const userCreated = await User.createNewUser(email, password, firstName, lastName)
  res.status(StatusCodes.CREATED).json(userCreated)
})

app.put('/users/:id', async (req, res) => {
  const { id } = req.params
  const {
    firstName,
    lastName,
    email,
    password } = req.body
  const userObject = {
    id,
    firstName,
    lastName,
    email,
    password
  }
  const getUserId = await User.getUserById(id)
  if (!getUserId.length) return res.status(StatusCodes.NOT_FOUND).json({
    "error": true,
    "message": "Usuário não encontrado"
  })
   await User.editUserById(userObject)
  res.status(StatusCodes.ACCEPTED).json(userObject)
})


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