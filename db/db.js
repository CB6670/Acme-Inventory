const Sequelize = require('sequelize');
const db = new Sequelize(`postgres://localhost:5432/inventory`, {
  logging: false
});

module.exports = db;
