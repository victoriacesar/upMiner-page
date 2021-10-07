import React, { createContext, useContext, useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import { api } from '../services/api';

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await api.get('/products');

    const products = response.data.map(product => {
      return {
        id: product.id,
        title: product.title,
        launchDate: new Date(product.launchDate),
        description: product.description,
        price: product.price,
      };
    });

    setProducts(products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        getProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export function useProducts() {
  const context = useContext(ProductsContext);

  return context;
}

ProductsProvider.propTypes = {
  children: PropTypes.node,
};
