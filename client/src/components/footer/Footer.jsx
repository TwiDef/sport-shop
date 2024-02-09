import React from 'react';

import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <h6 className={styles.title}>about us</h6>
                    <ul className={styles.list}>
                        <a className={styles.link} href="#">
                            <li className={styles.item}>about us</li>
                        </a>
                        <a className={styles.link} href="#">
                            <li className={styles.item}> contacts</li>
                        </a>
                    </ul>
                </div>
                <div className={styles.content}>
                    <h6 className={styles.title}>choose your sport</h6>
                    <ul className={styles.list}>
                        <a className={styles.link} href="#">
                            <li className={styles.item}>supboarding</li>
                        </a>
                        <a className={styles.link} href="#">
                            <li className={styles.item}>cycling</li>
                        </a>
                    </ul>
                </div>
                <div className={styles.content}>
                    <h6 className={styles.title}>we are in social network</h6>
                    <ul className={styles.linkList}>
                        <a className={styles.socialLink} href="telegram/away">
                            <li className={styles.LinkItem}>
                                <img src="https://cdn-icons-png.flaticon.com/512/3536/3536661.png" alt="" />
                                telegram
                            </li>
                        </a>
                        <a className={styles.socialLink} href="instagram/away">
                            <li className={styles.LinkItem}>
                                <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="" />
                                instagram
                            </li>
                        </a>
                        <a className={styles.socialLink} href="twitter/away">
                            <li className={styles.LinkItem}>
                                <img src="https://cdn-icons-png.flaticon.com/512/3256/3256013.png" alt="" />
                                twitter
                            </li>
                        </a>
                    </ul>
                </div>
                <div className={styles.content}>
                    <h6 className={styles.title}>our address</h6>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2290.78643912796!2d20.480972912241537!3d54.959306454204444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e344f78954f089%3A0x4072ddf1d36578dd!2z0YPQuy4g0JPQtdGA0YbQtdC90LAsIDQsINCX0LXQu9C10L3QvtCz0YDQsNC00YHQuiwg0JrQsNC70LjQvdC40L3Qs9GA0LDQtNGB0LrQsNGPINC-0LHQuy4sIDIzODMyNg!5e0!3m2!1sru!2sru!4v1707478099420!5m2!1sru!2sru" width="350" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </footer>
    );
};

export default Footer;