import React from 'react';
import styles from './NotFoundMsg.module.scss';

const NotFoundMsg = ({ title, subtitle }) => {
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>{title}</h2>
            <h3 className={styles.subtitle}>{subtitle}</h3>
        </div>
    );
};

export default NotFoundMsg;