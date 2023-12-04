import React, { Component } from 'react';
import Filters from './Filters';
import ProductTable from './ProductTable';
import ProductForm from './ProductForm';

const RESET_VALUES = { id: '', category: '', price: '', name: '' };

const PRODUCTS = {
  '1': { id: 1, category: 'Music', price: '$459.99', name: 'Clarinet' },
  '2': {id: 2, category: 'Music', price: '$5,000', name: 'Cello'},
  '3': {id: 3, category: 'Music', price: '$4,500', name: 'Tuba'},
  '4': {id: 4, category: 'Furniture', price: '$799', name: 'Chaise Lounge'},
  '5': {id: 5, category: 'Furniture', price: '$1,300', name: 'Dining Table'},
  '6': {id: 6, category: 'Furniture', price: '$100', name: 'Bean Bag'}
};

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      products: PRODUCTS,
    };
  }

  handleFilter = (filterInput) => {
    this.setState(filterInput);
  };

  handleDestroy = (productId) => {
    this.setState((prevState) => {
      const products = { ...prevState.products };
      delete products[productId];
      return { products };
    });
  };

  handleSave = (product) => {
    if (!product.id) {
      product.id = new Date().getTime();
    }
    this.setState((prevState) => {
      const products = { ...prevState.products };
      products[product.id] = product;
      return { products };
    });
  };

  render() {
    return (
      <div className="container mt-4">
        <h1 className="mb-4">My Inventory</h1>
        <Filters onFilter={this.handleFilter} />
        <ProductTable
          products={this.state.products}
          onDestroy={this.handleDestroy}
        />
        <ProductForm onSave={this.handleSave} />
      </div>
    );
  }
}

export default Product;

