import React from 'react';
import PropTypes from 'prop-types';

function Button({ name, testid, onClick, value }) {
  return (
    <button
      type="button"
      data-testid={ testid }
      onClick={ onClick }
      disabled={ value }
    >
      { name }
    </button>
  );
}

export default Button;

Button.defaultProps = {
  value: true,
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  value: PropTypes.bool,
};
