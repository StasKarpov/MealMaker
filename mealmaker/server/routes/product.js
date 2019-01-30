const productsController = require('./../controllers/product.ctrl')

module.exports = (router) => {
  router.get('/products', productsController.getProducts),
  router.post('/product', productsController.addProduct)
}
