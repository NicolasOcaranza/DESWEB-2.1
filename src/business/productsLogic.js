const productsData = require('../data/productsData');

module.exports = {
  getProducts: () => productsData.getAllProducts(),
  createProduct: (product) => {
    if (!product.name || !product.price) {
      throw new Error("Name and price are required");
    }
    return productsData.addProduct(product);
  },
  removeProduct: (id) => productsData.deleteProduct(id)
};