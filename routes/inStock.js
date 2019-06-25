const express = require('express');
const router = express.Router();
const Products = require('../db/product');

router.get('/', async(req, res, next) => {
    try{
    const inStock = await Products.findAll({
        where:{
            status:"inStock"
        }
    })
    res.send(inStock);
}catch(err){
    next(err);
}
})

module.exports = router;