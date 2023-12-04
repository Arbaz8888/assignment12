// ProductTable.js
import React from 'react';
import ProductRow from './ProductRow';

const ProductTable = ({ products, onDestroy }) => {
  const rows = Object.keys(products).map((productId, index) => (
    <ProductRow
      key={productId}
      product={products[productId]}
      index={index}
      onDestroy={onDestroy}
    />
  ));

  return (
    <table className="table">
      <thead>
        <tr style={{ background: 'black', color: 'white' }}>
          <th>Name</th>
          <th>Category</th>
          <th>Price</th>
          <th></th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default ProductTable;
