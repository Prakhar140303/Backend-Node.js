const express = require('express');
const router  = express.Router();
const {createBook,createAuthor,getBookWithAuthor} =  require('../controllers/book-controller');

router.post('/author', createAuthor);
router.post('/book', createBook);
router.get('/book/:id', getBookWithAuthor);

module.exports = router;