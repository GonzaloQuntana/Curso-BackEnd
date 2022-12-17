const express = require('express');
const productsRouter = require('./productsRouter');
const uploadProducts = require('./uploadProductsRouter');
const chat = require('./chatRouter');

function routerApi(app) {  
        const router = express.Router();
        app.use('/api', router);
        router.use('/products', productsRouter);
        router.use('/uploadproducts', uploadProducts);
        router.use('/chat', chat);
}

module.exports = routerApi;
