import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

export function Button({ onClick, price }) {
  return (
    <button className="card__btn" onClick={onClick}>
      <p>R$ {price},00</p>
      <p> Saiba mais</p>
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  price: PropTypes.number,
};
