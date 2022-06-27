var express = require('express');
var router = express.Router();

/* GET product list page. */
router.get('/', function (req, res, next) {
  res.render('productList', { title: 'Express', products: getAllProducts(), pageName: "products" });
});

// get product detail page
router.get('/:pid', function (req, res, next) {
  const productId = req.params.pid;
  const product = getProductByCode(productId);
  if (product) {
    res.render('productDetails', { title: `Fiche produit ${productId}`, product });
    return;
  }
  res.redirect("/404");
});


function getProductByCode(pid) {
  const produts = getAllProducts();
  return produts.find(product => product.code == pid)
}


function getAllProducts() {
  return [{
    code: "1",
    name: "name 1",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem",
    price: "41 €",
  },
  {
    code: "2",
    name: "name 2",
    description: "enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iu",
    price: "25 €",
  }, {
    code: "3",
    name: "name 3",
    description: " extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally",
    price: "50 €",
  }, {
    code: "4",
    name: "name 4",
    description: " extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally",
    price: "50 €",
  }, {
    code: "5",
    name: "name 5",
    description: " extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally",
    price: "50 €",
  }, {
    code: "6",
    name: "name 6",
    description: " extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally",
    price: "50 €",
  }];
}


module.exports = router;

