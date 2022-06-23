// src/routes.ts

import { Router } from 'express';

import BookController from './controllers/BookController';
import { FilmsController } from './controllers/FilmsController';

const bookController = new BookController();
const filmsController = new FilmsController();
const routes = Router();

const booksId = '/books/:id';

routes.get(booksId, bookController.getBook);
routes.get('/books', bookController.getBooks);
routes.post('/books', bookController.create);
routes.put(booksId, bookController.updateBook);
routes.delete(booksId, bookController.deleteBook);
routes.get('/films', filmsController.getFilms);

export default routes;