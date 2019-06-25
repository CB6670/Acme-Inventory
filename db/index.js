'use strict'

const db = require('./db');
const Product = require('./product');
const Inventory = require('./inventory');

// The purpose of this module is to bring your Sequelize instance (`db`) together
// with your models (which you should define in separate modules in this directory).

// After you've required all of your models into this module, you should establish
// associations (https://sequelize-guides.netlify.com/association-types/) between them here as well!

Inventory.hasMany(Product);
Product.belongsTo(Inventory);

module.exports = {
  // Include your models in this exports object as well!
  db,
  Inventory,
  Product
}