var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Home' , pageName :"home" });
});

router.get('/contact', function (req, res, next) {
  res.render('contact', { title: 'Contact-us', pageName :"contact" });
});

module.exports = router;
