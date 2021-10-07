import React from 'react';

import PropTypes from 'prop-types';

import './styles.scss';

export function Selection({ select, onChange }) {
  return (
    <div className="selection">
      <label htmlFor="option" className="selection__label">
        ORDERNAR:
      </label>

      <select
        value={select}
        name="option"
        id="option"
        className="selection__select"
        onChange={onChange}
      >
        <option value="" disabled>
          Selecione...
        </option>
        <option value="launch">Lançamento</option>
        <option value="price">Preço</option>
      </select>
    </div>
  );
}

Selection.propTypes = {
  select: PropTypes.string,
  onChange: PropTypes.func,
};
