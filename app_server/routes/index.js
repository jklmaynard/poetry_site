var express = require('express');
var router = express.Router();
var ctrlPages = require('../controllers/pages');

/* GET home page. */
router.get('/', ctrlPages.poems);
router.get('/about', ctrlPages.about);

module.exports = router;
