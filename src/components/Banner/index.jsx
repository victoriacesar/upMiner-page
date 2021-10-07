import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

import upMinerLogo from '../../assets/logo-upminer-removebg-preview.png';

export function Banner({ bg }) {
  return (
    <div className="banner" style={{ backgroundImage: `url(${bg})` }}>
      <div className="banner__head">
        <img className="banner__head__img" src={upMinerLogo} alt="UpMiner" />
        <h2 className="banner__head__title">Histórico Empresarial</h2>
      </div>
      <p className="banner__body">
        O aplicativo Histórico Empresarial permite ao usuário ter acesso a todos
        <br />
        os fatos e acontecimentos relevantes de uma empresa desde o seu ano de
        fundação.
      </p>
      <div className="banner__footer">
        <p className="banner__footer__p">
          <span>R$</span>40,00
        </p>
        <button className="banner__footer__btn">Saiba mais</button>
      </div>
    </div>
  );
}

Banner.propTypes = {
  bg: PropTypes.string,
};
