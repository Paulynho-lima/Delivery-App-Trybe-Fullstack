import React from 'react';
import PropTypes from 'prop-types';

function Button({ name, testid, onClick, disabled }) {
  return (
    <button
      type="button"
      data-testid={ testid }
      onClick={ onClick }
      disabled={ disabled }
    >
      { name }
    </button>
  );
}

export default Button;

Button.defaultProps = {
  disabled: false,
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.string,
};
