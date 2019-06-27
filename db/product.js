const Sequelize = require("sequelize");
const db = require("./db");

const Product = db.define("product", {
  // DEFINE YOUR MODEL FIELDS HERE
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
 status:{
   type: Sequelize.STRING,
   defaultValue: "InStock"
 }
});


module.exports = Product;
