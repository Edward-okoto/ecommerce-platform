const request = require('supertest');
const express = require('express');
const app = express();

app.use(express.json());

// Mock routes for testing
app.get('/', (req, res) => res.send('E-commerce API is running'));
app.get('/products', (req, res) => res.json([{ id: 1, name: 'Laptop' }]));
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  res.status(200).send(`User ${username} logged in successfully.`);
});

describe('API Endpoints', () => {
  it('should return the default API response', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('E-commerce API is running');
  });

  it('should return a list of products', async () => {
    const response = await request(app).get('/products');
    expect(response.status).toBe(200);
    expect(response.body).toEqual([{ id: 1, name: 'Laptop' }]);
  });

  it('should return a login success message', async () => {
    const response = await request(app)
      .post('/login')
      .send({ username: 'testuser', password: 'testpassword' });
    expect(response.status).toBe(200);
    expect(response.text).toBe('User testuser logged in successfully.');
  });
});