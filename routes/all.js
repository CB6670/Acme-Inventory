const express = require('express');
const router = express.Router();
const Products = require('../db/product');

router.get('/', async(req, res, next) => {
    try{
    const all = await Products.findAll();
    res.send(all);
    }catch(err){
        next(err);
    }
})

module.exports = router;