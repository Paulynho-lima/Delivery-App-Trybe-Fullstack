import React from 'react';
import PropTypes from 'prop-types';

function Input({ type, label, value, name, onChange, testid }) {
  return (
    <div>
      <label htmlFor={ name } className="label">
        {label}
        <input
          type={ type }
          value={ value }
          name={ name }
          data-testid={ testid }
          onChange={ onChange }
          required
          id={ name }
        />
      </label>
    </div>
  );
}

export default Input;

Input.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
