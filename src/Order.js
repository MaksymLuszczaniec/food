import React from 'react';
import { Button, ListGroup, ListGroupItem } from 'reactstrap';

const Order = ({ order, changeQuantity, total }) => {
  return (
    <div>
      <h2 className="my-4">Your Order</h2>
      <ListGroup>
        {order.map((item, index) => (
          <ListGroupItem key={index} className="d-flex justify-content-between align-items-center">
            {item.name} - ${item.price} x {item.quantity}
            <div>
              <Button color="success" size="sm" onClick={() => changeQuantity(item, 'increase')}>+</Button>{' '}
              <Button color="danger" size="sm" onClick={() => changeQuantity(item, 'decrease')}>-</Button>
            </div>
          </ListGroupItem>
        ))}
      </ListGroup>
      <h3 className="my-4">Total: ${total}</h3>
    </div>
  );
};

export default Order;
