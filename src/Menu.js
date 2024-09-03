import React from 'react';
import { Button, ListGroup, ListGroupItem } from 'reactstrap';

const Menu = ({ addItem }) => {
  const items = [
    { id: 1, name: 'Burger', price: 6 },
    { id: 2, name: 'Pizza', price: 4 },
    { id: 3, name: 'Soda', price: 3 },
  ];

  return (
    <div>
      <h2 className="my-4">Menu</h2>
      <ListGroup>
        {items.map(item => (
          <ListGroupItem key={item.id} className="d-flex justify-content-between align-items-center">
            {item.name} - ${item.price}
            <Button color="primary" onClick={() => addItem(item)}>
              Add
            </Button>
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
};

export default Menu;

