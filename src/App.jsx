import React from 'react';
import { Routes } from './routes/Routes';

import { ProductsProvider } from './contexts/ProductsContext';

import './styles/global.scss';

function App() {
  return (
    <ProductsProvider>
      <Routes />
    </ProductsProvider>
  );
}

export default App;
