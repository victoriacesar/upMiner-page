import React from 'react';
import { Button } from './Button';

import PropTypes from 'prop-types';

import { FaGlobe } from 'react-icons/fa';
import { FaBriefcase } from 'react-icons/fa';
import { FaLandmark } from 'react-icons/fa';
import { FaTree } from 'react-icons/fa';
import { FaGavel } from 'react-icons/fa';
import { FaBan } from 'react-icons/fa';
import { FaGlobeAmericas } from 'react-icons/fa';
import { FaGem } from 'react-icons/fa';
import { FaMale } from 'react-icons/fa';
import { FaPiggyBank } from 'react-icons/fa';

import './styles.scss';

export function Card({ title, description, onClick, price }) {
  return (
    <div className="card">
      <div className="card__info">
        {title === 'Todos' && <FaGlobe className="navbar__btn__icon" />}
        {title === 'Profissional' && (
          <FaBriefcase className="card__info__img" />
        )}
        {title === 'Reguladores' && <FaLandmark className="card__info__img" />}
        {title === 'Sócio Ambiental' && <FaTree className="card__info__img" />}
        {title === 'Jurídico' && <FaGavel className="card__info__img" />}
        {title === 'Listas Restritivas' && (
          <FaBan className="card__info__img" />
        )}
        {title === 'Mídia / Internet' && (
          <FaGlobeAmericas className="card__info__img" />
        )}
        {title === 'Bens e Imóveis' && <FaGem className="card__info__img" />}
        {title === 'Cadastro' && <FaMale className="card__info__img" />}
        {title === 'Financeiro' && <FaPiggyBank className="card__info__img" />}
        <h2 className="card__info__title">{title}</h2>
        <p className="card__info__description">{description}</p>
      </div>
      <Button onClick={onClick} price={price} />
    </div>
  );
}

Card.propTypes = {
  price: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  onClick: PropTypes.func,
};
