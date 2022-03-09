import React from 'react';
import PropTypes from 'prop-types';

function Button({ label, name, id, testid, onClick, value }) {
  return (
    <button
      type="button"
      name={ name }
      id={ id }
      data-testid={ testid }
      onClick={ onClick }
      disabled={ value }
    >
      { label }
    </button>
  );
}

export default Button;

Button.defaultProps = {
  value: true,
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  testid: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  value: PropTypes.bool,
};
