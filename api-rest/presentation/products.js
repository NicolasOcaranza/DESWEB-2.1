const express = require('express');
const router = express.Router();
const productsLogic = require('../business/productsLogic');

// GET /productos
router.get('/', (req, res) => {
  res.json(productsLogic.getProducts());
});

// GET /productos/:id
router.get('/:id', (req, res) => {
  try {
    const product = productsLogic.getProduct(parseInt(req.params.id));
    res.json(product);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// POST /productos
router.post('/', (req, res) => {
  try {
    const newProduct = productsLogic.createProduct(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// PUT /productos/:id
router.put('/:id', (req, res) => {
  try {
    const updatedProduct = productsLogic.updateProduct(parseInt(req.params.id), req.body);
    res.json(updatedProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE /productos/:id
router.delete('/:id', (req, res) => {
  try {
    productsLogic.removeProduct(parseInt(req.params.id));
    res.status(204).send();
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = router;
