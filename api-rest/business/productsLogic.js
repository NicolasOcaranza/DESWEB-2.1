const productsData = require('../data/productsData');

module.exports = {
  getProducts: () => productsData.getAllProducts(),

  getProduct: (id) => {
    const product = productsData.getProductById(id);
    if (!product) throw new Error("Producto no encontrado");
    return product;
  },

  createProduct: (product) => {
    if (!product.name || !product.price) {
      throw new Error("Name and price are required");
    }
    return productsData.addProduct(product);
  },

  updateProduct: (id, product) => {
    if (!product.name || !product.price) {
      throw new Error("Name and price are required");
    }
    const updated = productsData.updateProduct(id, product);
    if (!updated) throw new Error("Producto no encontrado");
    return updated;
  },

  removeProduct: (id) => {
    const success = productsData.deleteProduct(id);
    if (!success) throw new Error("Producto no encontrado");
  }
};
