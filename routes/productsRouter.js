const express = require('express');

const router = express.Router();

const productServices = require('../components/services/productsServices');
const services = new productServices();

router.get('/', async (req, res, next) => {
  const products = await services.find();
  res.json(products);
});

router.get('/filter', (req, res, next) => {
  res.send('Filtro de productos');
});

router.get('/:id', async(req, res, next) => {
  const { id } = req.params;
  const product = await services.findOne(id);
  res.json(product);
});

router.post('/', async (req, res, next) => {
  const body = req.body;
  const newProduct = await services.create(body);
  res.status(201).json(newProduct);
});

router.patch('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const product = await services.update(id, body);
    res.json(product);
  } catch (error) {
    res.status(404).json({
      message: error.message
    });
  };
});

router.delete('/:id', async (req, res, next) => {
  const { id } = req.params;
  const body = req.body;
  const rd = await services.delete(id);
  res.json(rd);
});

module.exports = router;S