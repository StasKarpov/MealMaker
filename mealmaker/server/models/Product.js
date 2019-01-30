const mongoose = require('mongoose')

let ProductSchema = new mongoose.Schema({
    name: String,
    description: String
  }
)

module.exports = mongoose.model('Product', ProductSchema)
