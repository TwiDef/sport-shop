import React from 'react';
import styles from './InfoBuy.module.scss';
import LinkTo from '../UI/link-to/LinkTo';

const InfoBuy = () => {
    return (
        <div className={styles.infoBuy}>
            <div className={styles.shadow}>
                <div className={styles.block}>
                    <div className={styles.blockAbout}>
                        <h3 className={styles.title}>Huge selection of Sup boards</h3>
                        <p className={styles.description}>Every year the number of Sup fans increases, wind in the face and the opportunity to feel an exciting sense of freedom.</p>
                    </div>
                    <LinkTo to="/boards" children="Shop" />
                </div>
            </div>
        </div>
    );
};

export default InfoBuy;