import React, { useState } from 'react';
import Menu from './Menu';
import Order from './Order';
import ThemeToggle from './ThemeToggle';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [order, setOrder] = useState([]);
  const [theme, setTheme] = useState('light');

  const addItem = (item) => {
    const existingItem = order.find(orderItem => orderItem.id === item.id);
    if (existingItem) {
      setOrder(order.map(orderItem =>
        orderItem.id === item.id
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
      ));
    } else {
      setOrder([...order, { ...item, quantity: 1 }]);
    }
  };

  const changeQuantity = (item, action) => {
    setOrder(order.map(orderItem =>
      orderItem.id === item.id
        ? {
            ...orderItem,
            quantity: action === 'increase'
              ? orderItem.quantity + 1
              : orderItem.quantity - 1 > 0 ? orderItem.quantity - 1 : 1
          }
        : orderItem
    ));
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const total = order.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className={`App ${theme}`}>
      <div className="container">
        <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
        <div className="row">
          <div className="col-md-6">
            <Menu addItem={addItem} />
          </div>
          <div className="col-md-6">
            <Order order={order} changeQuantity={changeQuantity} total={total} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
