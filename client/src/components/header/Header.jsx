import React from 'react';

import { FaHome } from "react-icons/fa";
import { MdDirectionsBike } from "react-icons/md";
import { MdOutlineSurfing } from "react-icons/md";
import { FaPhoneSquare } from "react-icons/fa";
import styles from './Header.module.scss';

const Header = () => {

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.logo}>
                    <img src="https://cdn-icons-png.flaticon.com/512/694/694693.png" alt="logo" />
                </div>
                <ul className={styles.category}>
                    <a href="#" className="categoryItemLink">
                        <li className={styles.categoryItem}>
                            <FaHome />Home
                        </li>
                    </a>
                    <a href="#" className="categoryItemLink">
                        <li className={styles.categoryItem}>
                            <MdDirectionsBike />Bikes
                        </li>
                    </a>
                    <a href="#" className="categoryItemLink">
                        <li className={styles.categoryItem}>
                            <MdOutlineSurfing />Boards
                        </li>
                    </a>
                    <a href="#" className="categoryItemLink">
                        <li className={styles.categoryItem}>
                            <FaPhoneSquare />Contacts
                        </li>
                    </a>
                </ul>
            </nav>
            <a className={styles.cart}
                href='#'>
                <svg stroke="currentColor" fill="#fff" strokeWidth="0" viewBox="0 0 16 16" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
                </svg>

                <div className={styles.cartCount}>
                    0
                </div>
            </a>

        </header>
    );
};

export default Header;