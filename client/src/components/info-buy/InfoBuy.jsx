import React from 'react';
import { Link } from 'react-router-dom';
import styles from './InfoBuy.module.scss';

const InfoBuy = () => {
    return (
        <div className={styles.infoBuy}>
            <div className={styles.shadow}>
                <div className={styles.block}>
                    <div className={styles.blockAbout}>
                        <h3 className={styles.title}>Huge selection of Sup boards</h3>
                        <p className={styles.description}>Every year the number of Sup fans increases, wind in the face and the opportunity to feel an exciting sense of freedom.</p>
                    </div>
                    <Link to="/boards" className={styles.blockBtn}>Shop</Link>
                </div>
            </div>
        </div>
    );
};

export default InfoBuy;