const Sequelize = require("sequelize");
const db = require("./db");

const Inventory = db.define("inventory", {
  // DEFINE YOUR MODEL FIELDS HERE
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false
  },
  status:{
      type:Sequelize.STRING,
      defaultValue:"In Stock"
  }
});

module.exports = Inventory;