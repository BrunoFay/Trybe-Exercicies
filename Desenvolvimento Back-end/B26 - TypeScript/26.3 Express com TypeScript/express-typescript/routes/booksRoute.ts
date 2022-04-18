import { Router } from 'express';
import BooksController from '../controllers/bookController';
import validationBook from '../middlewares/bookMiddleware';

const router = Router();
const bookController = new BooksController()
const booksSlashId = '/books/:id'
router.get('/', bookController.getAll)
router.get(booksSlashId, bookController.getById);
router.post('/books/', validationBook, bookController.create);
router.put(booksSlashId, validationBook, bookController.update);
router.delete(booksSlashId,bookController.remove);

export default router;