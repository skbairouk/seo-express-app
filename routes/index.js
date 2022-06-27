var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/contact', function (req, res, next) {
  res.render('contact', { title: 'Contact-us' });
});

module.exports = router;
