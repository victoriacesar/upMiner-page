import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

import Carousel from 'react-elastic-carousel';
import { RiArrowLeftSLine } from 'react-icons/ri';
import { api } from '../../services/api';
import { CardToSlide } from '../../components/CardToSlide';
import { useProducts } from '../../contexts/ProductsContext';

import './styles.scss';
import { Slider } from '../../components/Slider';

export function MoreDetails() {
  const { products } = useProducts();

  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    api.get(`/products/${id}`).then(response => setProduct(response.data));
  }, []);

  return (
    <div className="moredetails">
      <div className="moredetails__head">
        <Slider />
      </div>
      <div className="moredetails__body">
        <Link to="/" className="moredetails__body__title">
          <RiArrowLeftSLine color="#ff6f00" />
          {product.title}
        </Link>
        <Carousel
          itemsToShow={3}
          itemsToScroll={3}
          enableAutoPlay
          autoPlaySpeed={4500}
        >
          {products.map(product => (
            <CardToSlide
              key={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
            />
          ))}
        </Carousel>
        <p className="moredetails__body__firstP">{product.description}</p>
        <p className="moredetails__body__secondP">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          suscipit necessitatibus natus atque, rerum cumque. Nostrum, magni,
          voluptates ab ipsum commodi ut minima, cupiditate fugit maiores
          accusamus minus reiciendis architecto.
        </p>
        <div className="moredetails__body__footer">
          <p className="moredetails__body__footer__price">
            <span>R$</span> {product.price},00
          </p>
          <button className="moredetails__body__footer__btn">Habilitar</button>
        </div>
      </div>
    </div>
  );
}
