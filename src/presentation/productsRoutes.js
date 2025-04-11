const express = require('express');
const router = express.Router();
const productsLogic = require('../business/productsLogic');

router.get('/', (req, res) => {
  res.json(productsLogic.getProducts());
});

router.post('/', (req, res) => {
  try {
    const newProduct = productsLogic.createProduct(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete('/:id', (req, res) => {
  productsLogic.removeProduct(parseInt(req.params.id));
  res.status(204).send();
});

module.exports = router;