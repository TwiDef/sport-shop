import React from 'react';

import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.phones}>
                <span className={styles.city}>
                    Moscow:
                    <a className={styles.cityPhone}
                        href="tel:+79442244465">
                        +7 944 224-44-65
                    </a>
                    <a className={styles.cityPhone}
                        href="tel:+79442244275">
                        +7 944 224-42-75
                    </a>
                    Vladivostok:
                    <a className={styles.cityPhone}
                        href="tel:+73441244275">
                        +7 344 124-42-75
                    </a>
                </span>
            </div>

            <div className={styles.socialWrapper}>
                <div className={styles.social}>
                    <span className={styles.socialItem}>
                        <a href="telegram/away">
                            <img src="https://cdn-icons-png.flaticon.com/512/3536/3536661.png" alt="" />
                        </a>
                    </span>
                    <span className={styles.socialItem}>
                        <a href="instagram/away">
                            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="" />
                        </a>
                    </span>
                    <span className={styles.socialItem}>
                        <a href="twitter/away">
                            <img src="https://cdn-icons-png.flaticon.com/512/3256/3256013.png" alt="" />
                        </a>
                    </span>
                </div>
            </div>
            <div className={styles.address}>
                <address>
                    <span>Russia</span>
                    <span>Kaliningrad 9</span>
                    <span>79115 Asdwea</span>
                </address>
            </div>
        </footer>
    );
};

export default Footer;