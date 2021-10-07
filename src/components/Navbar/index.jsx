import React from 'react';
import { NavLink } from 'react-router-dom';

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

import { useProducts } from '../../contexts/ProductsContext';

import './styles.scss';

export function Navbar() {
  const { getProducts } = useProducts();

  return (
    <div className="navbar">
      <NavLink
        to="/"
        exact
        className="navbar__btn"
        activeClassName="navbar__btn--active"
        onClick={getProducts}
      >
        <FaGlobe className="navbar__btn__icon" />
        <p className="navbar__btn__p">Todos</p>
      </NavLink>
      <NavLink
        to="/1"
        activeClassName="navbar__btn--active"
        className="navbar__btn"
      >
        <FaBriefcase className="navbar__btn__icon" />
        <p className="navbar__btn__p">Profissional</p>
      </NavLink>
      <NavLink
        to="/2"
        activeClassName="navbar__btn--active"
        className="navbar__btn"
      >
        <FaLandmark className="navbar__btn__icon" />
        <p className="navbar__btn__p">Reguladores</p>
      </NavLink>
      <NavLink
        to="/3"
        activeClassName="navbar__btn--active"
        className="navbar__btn"
      >
        <FaTree className="navbar__btn__icon" />
        <p className="navbar__btn__p">Sócio Ambiental</p>
      </NavLink>
      <NavLink
        to="/4"
        activeClassName="navbar__btn--active"
        className="navbar__btn"
      >
        <FaGavel className="navbar__btn__icon" />
        <p className="navbar__btn__p">Jurídico</p>
      </NavLink>
      <NavLink
        to="/5"
        activeClassName="navbar__btn--active"
        className="navbar__btn"
      >
        <FaBan className="navbar__btn__icon" />
        <p className="navbar__btn__p">Listas Restritivas</p>
      </NavLink>
      <NavLink
        to="/6"
        activeClassName="navbar__btn--active"
        className="navbar__btn"
      >
        <FaGlobeAmericas className="navbar__btn__icon" />
        <p className="navbar__btn__p">Mídia / Internet</p>
      </NavLink>
      <NavLink
        to="/7"
        activeClassName="navbar__btn--active"
        className="navbar__btn"
      >
        <FaGem className="navbar__btn__icon" />
        <p className="navbar__btn__p">Bens e Imóveis</p>
      </NavLink>
      <NavLink
        to="/8"
        activeClassName="navbar__btn--active"
        className="navbar__btn"
      >
        <FaMale className="navbar__btn__icon" />
        <p className="navbar__btn__p">Cadastro</p>
      </NavLink>
      <NavLink
        to="/9"
        activeClassName="navbar__btn--active"
        className="navbar__btn"
      >
        <FaPiggyBank className="navbar__btn__icon" />
        <p className="navbar__btn__p">Financeiro</p>
      </NavLink>
    </div>
  );
}
