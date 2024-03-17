import React from 'react';
import styles from './Button.module.scss';

const Button = ({ children, onClick, pY, pX, width, type }) => {
    return (
        <button
            className={styles.btn}
            type={type}
            style={{ padding: `${pY}px ${pX}px`, width: `${width}px` }}
            onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;