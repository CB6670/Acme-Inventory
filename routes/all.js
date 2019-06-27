const express = require('express');
const router = express.Router();
const Products = require('../db/product');
const path = require('path');

router.get('/', async(req, res, next) => {
    try{
    const all = await Products.findAll();
    res.sendFile(path.join(__dirname,"../index.html"));
    }catch(err){
        next(err);
    }
})

module.exports = router;