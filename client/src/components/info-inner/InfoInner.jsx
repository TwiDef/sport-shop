import React from 'react';
import styles from './InfoInner.module.scss';

const InfoInner = () => {
    return (
        <div className={styles.inner}>
            <div className={styles.shadow}>
                <h1 className={styles.title}>Sport shop</h1>
                <h3 className={styles.subTitle}>
                    Here you can purchase the highest quality <br /> bikes and sup-boards
                </h3>
            </div>
        </div>
    );
};

export default InfoInner;