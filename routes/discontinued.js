const express = require('express');
const router = express.Router();
const Products = require('../db/product');

router.get('/', async(req, res, next) => {
    try{
    const discontinued = await Products.findAll({
        where:{
            status:"discontinued"
        }
    })
    res.send(discontinued);
}catch(err){
    next(err);
}
})

module.exports = router;