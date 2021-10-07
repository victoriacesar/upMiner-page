import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { Card } from '../../components/Card';
import { Navbar } from '../../components/Navbar';
import { Selection } from '../../components/Selection';
import { Slider } from '../../components/Slider';
import { useProducts } from '../../contexts/ProductsContext';
import { api } from '../../services/api';

import './styles.scss';

export function Home() {
  const { products, setProducts } = useProducts();
  const [oneProduct, setOneProduct] = useState([]);
  const [select, setSelect] = useState('');
  const { id } = useParams();
  const history = useHistory();
  const priceArr = [...products];
  const launchDateArr = [...products];

  const priceOrdered = priceArr.sort((a, b) => {
    if (a.price < b.price) {
      return -1;
    } else {
      return true;
    }
  });

  const launchDateOrdered = launchDateArr.sort(function (a, b) {
    if (a.launchDate < b.launchDate) {
      return -1;
    } else {
      return true;
    }
  });

  const handleOpenPage = id => {
    history.push(`/about/${id}`);
  };

  const handleSelectChange = e => {
    setSelect(e.target.value);

    if (e.target.value === 'launch') {
      setProducts(launchDateOrdered);
    } else {
      setProducts(priceOrdered);
    }
  };

  useEffect(() => {
    if (id) {
      api.get(`/products/${id}`).then(response => setOneProduct(response.data));
    }
  }, [id]);

  useEffect(() => {
    if (select === 'launch') {
      setProducts(launchDateOrdered);
    } else {
      setProducts(priceOrdered);
    }
  }, [select]);

  return (
    <div className="home">
      <div className="home__head">
        <Slider />
      </div>
      <div className="home__body">
        <Navbar />
        <Selection select={select} onChange={handleSelectChange} />
        <div className="home__body__cards">
          {id ? (
            <Card
              price={oneProduct.price}
              title={oneProduct.title}
              description={oneProduct.description}
              icon={oneProduct.icon}
              onClick={() => handleOpenPage(oneProduct.id)}
            />
          ) : (
            products.map(product => {
              return (
                <Card
                  key={product.id}
                  price={product.price}
                  icon={product.icon}
                  title={product.title}
                  description={product.description}
                  onClick={() => handleOpenPage(product.id)}
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
