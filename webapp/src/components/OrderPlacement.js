import React, { useState } from 'react';
import axios from 'axios';

const OrderPlacement = () => {
  const [productId, setProductId] = useState('');
  const [quantity, setQuantity] = useState('');

  const placeOrder = () => {
    axios.post('/orders', { productId, quantity }) // Update the API URL as needed.
      .then((response) => alert(response.data))
      .catch((error) => console.error('Order failed:', error));
  };

  return (
    <div>
      <h2>Place an Order</h2>
      <input
        type="text"
        placeholder="Product ID"
        value={productId}
        onChange={(e) => setProductId(e.target.value)}
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <button onClick={placeOrder}>Place Order</button>
    </div>
  );
};

export default OrderPlacement;