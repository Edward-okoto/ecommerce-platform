const express = require('express');
const app = express();
app.use(express.json());

// Basic route for testing
app.get('/', (req, res) => res.send('E-commerce API is running'));

// Route for product listing
app.get('/products', (req, res) => {
  const products = [
    { id: 1, name: 'Laptop', price: 1000 },
    { id: 2, name: 'Phone', price: 500 },
  ];
  res.json(products);
});

// Route for user login
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  res.send(`User ${username} logged in successfully.`);
});

// Route for placing an order
app.post('/orders', (req, res) => {
  const order = req.body;
  res.send(`Order placed successfully for product ${order.productId}.`);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));