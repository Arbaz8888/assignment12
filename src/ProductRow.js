// ProductRow.js
import React from 'react';

const ProductRow = ({ product, index, onDestroy }) => {
  const rowStyle = {
    background: index % 2 === 0 ? 'white' : '#f2f2f2',
    color: index % 2 === 0 ? 'black' : 'black', // Change text color as needed
  };

  return (
    <tr style={rowStyle}>
      <td>{product.name}</td>
      <td>{product.category}</td>
      <td>{product.price}</td>
      <td>
        <button
          className="btn btn-danger"
          onClick={() => onDestroy(product.id)}
          style={{ background: '#18a4bc', color: 'white' }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ProductRow;
