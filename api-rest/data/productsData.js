let products = [
    { id: 1, name: "Laptop", price: 999.99 },
    { id: 2, name: "Smartphone", price: 699.99 }
  ];
  
  module.exports = {
    getAllProducts: () => products,
    
    getProductById: (id) => products.find(p => p.id === id),
  
    addProduct: (product) => {
      const newProduct = { id: products.length + 1, ...product };
      products.push(newProduct);
      return newProduct;
    },
  
    updateProduct: (id, updatedProduct) => {
      const index = products.findIndex(p => p.id === id);
      if (index === -1) return null;
      products[index] = { id, ...updatedProduct };
      return products[index];
    },
  
    deleteProduct: (id) => {
      const initialLength = products.length;
      products = products.filter(p => p.id !== id);
      return products.length < initialLength;
    }
  };
  