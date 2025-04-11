const express = require('express');
const productsRouter = require('./presentation/productsRoutes');

const app = express();
app.use(express.json());
app.use('/products', productsRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
