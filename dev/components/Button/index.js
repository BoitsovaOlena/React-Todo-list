import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.css';

const Button = ({type, children, ...otherProps}) => (
    <button 
     className={type ? `${styles[`button_${type}`]}` : `${styles.button}`}
     {...otherProps}
    >
        {children}
    </button>
);

Button.propTypes = {
    type: PropTypes.oneOf(['small', '']),
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired
};

Button.defaultProps = {
    type: '',
};

export default Button;