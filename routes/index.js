const express = require('express');
const productsRouter = require('./productsRouter');
const uploadProducts = require('./uploadProductsRouter');

function routerApi(app) {  
        const router = express.Router();
        app.use('/api', router);
        router.use('/products', productsRouter);
        router.use('/uploadproducts', uploadProducts);
}

module.exports = routerApi;
