// ProductForm.js
import React, { useState } from 'react';

const RESET_VALUES = { id: '', category: '', price: '', name: '' };

const ProductForm = ({ onSave }) => {
  const [product, setProduct] = useState({ ...RESET_VALUES });

  const handleSave = (e) => {
    onSave(product);
    setProduct({ ...RESET_VALUES });
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  return (
    <form className="mt-4">
      <div className="mb-3 row">
        <label htmlFor="name" className="col-sm-2 col-form-label">
          Name
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={product.name}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="mb-3 row">
        <label htmlFor="category" className="col-sm-2 col-form-label">
          Category
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="category"
            name="category"
            value={product.category}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="mb-3 row">
        <label htmlFor="price" className="col-sm-2 col-form-label">
          Price
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="price"
            name="price"
            value={product.price}
            onChange={handleChange}
          />
        </div>
      </div>

      <button
        type="button"
        className="btn btn-primary"
        onClick={handleSave}
        style={{ background: '#18a4bc', color: 'white', border: 'none' }}
      >
        Save
      </button>
    </form>
  );
};

export default ProductForm;
