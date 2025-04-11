let products = [
    { id: 1, name: "Laptop", price: 999.99 },
    { id: 2, name: "Smartphone", price: 699.99 }
  ];
  
  module.exports = {
    getAllProducts: () => products,
    addProduct: (product) => {
      const newProduct = { id: products.length + 1, ...product };
      products.push(newProduct);
      return newProduct;
    },
    deleteProduct: (id) => {
      products = products.filter(p => p.id !== id);
      return products;
    }
  };