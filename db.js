const Sequelize = require("sequelize");
//const pg = require('pg');
//const slugify = require('slugify');
const db = new Sequelize(
  process.env.DATABASE_URL || `postgres://localhost:5432/inventory`
);

const Product = db.define("product", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: true
  },
  status: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: "in stock"
  }
});

const syncAndSeed = async () => {
  await db.sync({ force: true });
  //console.log("hi from syncAndSeed");
  const products = [
    { name: "foo", status: "discontinued" },
    { name: "bar", status: "in stock" },
    { name: "bazz", status: "back ordered" },
    {name:'buzz'}
  ];
  const [foo, bar, bazz,buzz] = await Promise.all(
    products.map(product => {
      const name = product.name;
      const status = product.status;
      Product.create({ name, status });
    })
  );
  //console.log(foo);
};

// syncAndSeed()
//   .then(async () => {
//     const getFoo = await Product.findAll()
//     console.log("gettin foo",getFoo);
//   })
//   .catch(err => {
//     console.log(err);
//   });

module.exports = {
  db,
  syncAndSeed,
  models: {
    Product
  }
};
