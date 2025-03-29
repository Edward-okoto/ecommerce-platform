import React from 'react';
import ProductList from './components/ProductList';
import UserLogin from './components/UserLogin';
import OrderPlacement from './components/OrderPlacement';

const App = () => {
  return (
    <div>
      <h1>E-Commerce Platform</h1>
      <ProductList />
      <UserLogin />
      <OrderPlacement />
    </div>
  );
};

export default App;
