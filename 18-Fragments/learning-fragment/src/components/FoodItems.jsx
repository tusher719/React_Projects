import React from 'react';
import Item from './Item';

const FoodItems = ({ items }) => {
  return (
    <ul className="list-group">
      {items.map((item, index) => (
        <Item key={index} foodItem={item} />
      ))}
    </ul>
  );
};

export default FoodItems;
