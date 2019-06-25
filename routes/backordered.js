const express = require('express');
const router = express.Router();
const Products = require('../db/product');

router.get('/', async(req, res, next) => {
    try{
    const backordered = await Products.findAll({
        where:{
            status:"backordered"
        }
    })
    res.send(backordered);
}catch(err){
    next(err);
}
})

module.exports = router;