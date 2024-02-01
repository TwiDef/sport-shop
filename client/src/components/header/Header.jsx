import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveCategory } from '../../redux/slices/itemsSlice';

import { FaHome, FaPhoneSquare } from "react-icons/fa";
import { MdDirectionsBike, MdOutlineSurfing } from "react-icons/md";

import styles from './Header.module.scss';

const Header = () => {

    const categories = [
        {
            to: "/",
            icon: <FaHome />,
            children: "Home",
            active: false
        },
        {
            to: "/bikes",
            icon: <MdDirectionsBike />,
            children: "Bikes",
            active: false
        },
        {
            to: "/boards",
            icon: <MdOutlineSurfing />,
            children: "Boards",
            active: false
        },
        {
            to: "/contacts",
            icon: <FaPhoneSquare />,
            children: "Contacts",
            active: false
        },
    ]

    const { activeCategory } = useSelector(state => state.items)
    const { cartItems } = useSelector(state => state.cart)
    const dispatch = useDispatch()

    const handleClick = (i) => {
        dispatch(setActiveCategory(i))
        categories.forEach(category => {
            category.active = true
        })
    }

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <Link to="/" className={styles.logo} onClick={() => window.scrollTo(0, 0)}>
                    <img src="https://cdn-icons-png.flaticon.com/512/694/694693.png" alt="logo" />
                </Link>
                <ul className={styles.category}>
                    {
                        categories.map((category, i) => {
                            const className = activeCategory === i ? styles.categoryItemActive : styles.categoryItem
                            return <Link key={i} to={category.to} className={styles.categoryItemLink}>
                                <li className={className}
                                    onClick={() => handleClick(i)}>
                                    {category.icon}{category.children}
                                </li>
                            </Link>
                        })
                    }
                </ul>
            </nav>
            <Link className={styles.cart}
                to="/cart">
                <svg stroke="currentColor" fill="#fff" strokeWidth="0" viewBox="0 0 16 16" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
                </svg>

                <div className={styles.cartCount}>
                    {cartItems.reduce((sum, item) => {
                        return sum + item.count
                    }, 0)}
                </div>
            </Link>

        </header >
    );
};

export default Header;