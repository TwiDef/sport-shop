import React from 'react';
import styles from './Button.module.scss';

const Button = ({ children, onClick, pY, pX }) => {
    return (
        <button style={{ padding: `${pY}px ${pX}px` }} onClick={onClick} className={styles.btn}>
            {children}
        </button>
    );
};

export default Button;