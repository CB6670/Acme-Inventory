const express = require('express');
const app = express();

app.use(express.urlencoded());
app.use(express.json());

app.use('/',require('./all'));
app.use('/in-stock',require('./inStock'));
app.use('/discontinued',require('./discontinued'));
app.use('/backordered', require('./backordered'));

module.exports = app;