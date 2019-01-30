const Product = require('./../models/Product')

module.exports = {
  addProduct: (req, res) => {
    console.log(req.body);
    let newProduct = new Product(req.body)
    newProduct.save((err, product) => {
      if(err)
        res.send(err)
      else
        res.json(req.body)
    })
  },
  getProducts: (req, res) => {
    Product.find({}, (err, contact) => {
      if(err)
        res.send(err)
      else
        res.json(contact)
    })
  }
}
