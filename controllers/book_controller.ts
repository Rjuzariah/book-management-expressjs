// routes/book.routes.ts
import { Router } from 'express';
import Book from '../models/book_model';

const router = Router();

// GET all books
router.get('/books', async (req, res) => {
  try {
    const books = await Book.findAll();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve books.' });
  }
});

// POST a new book
router.post('/books', async (req, res) => {
  try {
    console.log('qqqqqqqq')
    console.log('qqqqqqqq')
    console.log(req.query)
    console.log(req.body)
    req.body = {title:"Book1"}
    const newBook = await Book.create(req.body);
    res.status(201).json(newBook);
  } catch (error) {
    console.log(error)
    res.status(400).json({ message: 'Failed to create book.' });
  }
});

// GET a book by ID
router.get('/books/:id', async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (book) {
      res.status(200).json(book);
    } else {
      res.status(404).json({ message: 'Book not found.' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve book.' });
  }
});

// PUT (update) a book by ID
router.put('/books/:id', async (req, res) => {
  try {
    const [updated] = await Book.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const updatedBook = await Book.findByPk(req.params.id);
      res.status(200).json(updatedBook);
    } else {
      res.status(404).json({ message: 'Book not found.' });
    }
  } catch (error) {
    res.status(400).json({ message: 'Failed to update book.' });
  }
});

// DELETE a book by ID
router.delete('/books/:id', async (req, res) => {
  try {
    const deleted = await Book.destroy({
      where: { id: req.params.id },
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Book not found.' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete book.' });
  }
});

export default router;
