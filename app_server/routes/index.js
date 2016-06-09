var express = require('express');
var router = express.Router();
var ctrlPages = require('../controllers/pages');

/* GET home page. */
router.get('/', ctrlPages.home);
router.get('/about', ctrlPages.about);
router.get('/poems', ctrlPages.poems);
router.get('/books', ctrlPages.books);

module.exports = router;
