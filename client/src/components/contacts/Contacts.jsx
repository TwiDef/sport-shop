import React from 'react';
import styles from './Contacts.module.scss';

const Contacts = () => {
    return (
        <div className={styles.contacts}>
            <h3 className={styles.title}>Our address</h3>
            <h5 className={styles.subtitle}>st. Hertsena, 4, Zelenogradsk, Kaliningrad region, 238326</h5>
            <div className={styles.phone}>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path></svg>
                <p>Call or text us</p>
                <a className={styles.number} href="tel:+77359338401">+7 735 933 84 01</a>
            </div>
            <iframe className={styles.contactsMap}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2290.78643912796!2d20.480972912241537!3d54.959306454204444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e344f78954f089%3A0x4072ddf1d36578dd!2z0YPQuy4g0JPQtdGA0YbQtdC90LAsIDQsINCX0LXQu9C10L3QvtCz0YDQsNC00YHQuiwg0JrQsNC70LjQvdC40L3Qs9GA0LDQtNGB0LrQsNGPINC-0LHQuy4sIDIzODMyNg!5e0!3m2!1sru!2sru!4v1707478099420!5m2!1sru!2sru" width="350" height="250" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    );
};

export default Contacts;