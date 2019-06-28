const express = require('express');
const app = express();
//const router = express.Router();
//const Products = require('../db/product');
//const path = require('path');
const {models} = require('./db');
const {Product} = models;

const port = process.env.PORT || 3000;

app.listen(port);

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/', (req,res,next) => {
    res.sendFile('index.html', { root: __dirname })
    console.log(`listening in on port ${port}`);
})

app.get('/api/products',async(req,res,next) => {
    const all = await Product.findAll();
    res.send(all);
})


module.exports = app;