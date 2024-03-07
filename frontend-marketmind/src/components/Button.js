import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = {
  primary: 'btn--primary',
  outline: 'btn--outline',
  test: 'btn--test',
  logout: 'btn--logout' // New logout style
};

const SIZES = {
  medium: 'btn--medium',
  large: 'btn--large'
};

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {
  const checkButtonStyle = STYLES[buttonStyle] || STYLES.primary;
  const checkButtonSize = SIZES[buttonSize] || SIZES.medium;

  return (
    <Link to='/sign-up' className='btn-mobile'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
