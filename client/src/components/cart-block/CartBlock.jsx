import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItemFromCart, plusItem, minusItem, clearCart } from '../../redux/slices/cartSlice';
import LinkTo from '../UI/link-to/LinkTo';

import styles from './CartBlock.module.scss';

const CartBlock = () => {
    const dispatch = useDispatch()
    const { cartItems, totalPrice } = useSelector(state => state.cart)

    if (cartItems.length === 0) {
        return (
            <div style={{ color: "#fff", height: "100vh", display: 'flex', justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                <div style={{ height: "400px", backgroundImage: "url('https://static.insales-cdn.com/images/products/1/5908/538515220/large_large_large_hit_4.png')", backgroundSize: "contain", backgroundRepeat: "no-repeat", textShadow: "4px 4px 7px #000" }}>
                    <h2 style={{ textAlign: "center", fontSize: "120px" }}>SORRY</h2>
                    <h3 style={{ textAlign: "center", fontSize: "60px" }} >You cart is empty, please buy something
                    </h3>
                    <div style={{ textAlign: "center", marginTop: "30px" }}>
                        <svg stroke="currentColor" fill="#fff" stroke-width="0" viewBox="0 0 16 16" height="90px" width="90px" xmlns="http://www.w3.org/2000/svg"><path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path></svg>
                    </div>
                </div>
                <LinkTo to="/" children="Home" />
            </div>
        )
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.top}>
                <h3 className={styles.title}>
                    Cart
                    <svg stroke="currentColor" fill="#fff" strokeWidth="0" viewBox="0 0 16 16" height="55px" width="55px" xmlns="http://www.w3.org/2000/svg"><path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path></svg>
                </h3>
                <button
                    className={styles.clearBtn}
                    onClick={() => dispatch(clearCart())}>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="55px" width="55px" xmlns="http://www.w3.org/2000/svg"><path d="M7 6V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7ZM13.4142 13.9997L15.182 12.232L13.7678 10.8178L12 12.5855L10.2322 10.8178L8.81802 12.232L10.5858 13.9997L8.81802 15.7675L10.2322 17.1817L12 15.4139L13.7678 17.1817L15.182 15.7675L13.4142 13.9997ZM9 4V6H15V4H9Z"></path></svg>
                </button>
            </div>

            <hr className={styles.topLine} />

            <div className={styles.cartItemWrapper}>
                {cartItems.map(item => {
                    return (
                        <article className={styles.cartItem}>
                            <img src={item.image} alt="cart-item" />
                            <span className={styles.cartItemRating}>{item.rating}</span>
                            <div className={styles.cartItemInfo}>
                                <h6 className={styles.cartItemName}>{item.name}</h6>
                                <div className={styles.cartItemQuantity}>
                                    <button onClick={() => dispatch(minusItem(item))}>
                                        <span>-</span>
                                    </button>
                                    <span>{item.count}</span>
                                    <button onClick={() => dispatch(plusItem(item))}>
                                        <span>+</span>
                                    </button>
                                </div>
                            </div>
                            <div className={styles.cartItemAbout}>
                                <span className={styles.cartItemPrice}>{new Intl.NumberFormat('ru-Ru', {
                                    style: 'currency',
                                    currency: 'USD'
                                }).format(item.price)}</span>
                                <button
                                    className={styles.removeFromCartBtn}
                                    onClick={() => dispatch(removeItemFromCart(item.id))}>
                                    <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 15 15" height="55px" width="55px" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M0.877075 7.49988C0.877075 3.84219 3.84222 0.877045 7.49991 0.877045C11.1576 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1576 14.1227 7.49991 14.1227C3.84222 14.1227 0.877075 11.1575 0.877075 7.49988ZM7.49991 1.82704C4.36689 1.82704 1.82708 4.36686 1.82708 7.49988C1.82708 10.6329 4.36689 13.1727 7.49991 13.1727C10.6329 13.1727 13.1727 10.6329 13.1727 7.49988C13.1727 4.36686 10.6329 1.82704 7.49991 1.82704ZM9.85358 5.14644C10.0488 5.3417 10.0488 5.65829 9.85358 5.85355L8.20713 7.49999L9.85358 9.14644C10.0488 9.3417 10.0488 9.65829 9.85358 9.85355C9.65832 10.0488 9.34173 10.0488 9.14647 9.85355L7.50002 8.2071L5.85358 9.85355C5.65832 10.0488 5.34173 10.0488 5.14647 9.85355C4.95121 9.65829 4.95121 9.3417 5.14647 9.14644L6.79292 7.49999L5.14647 5.85355C4.95121 5.65829 4.95121 5.3417 5.14647 5.14644C5.34173 4.95118 5.65832 4.95118 5.85358 5.14644L7.50002 6.79289L9.14647 5.14644C9.34173 4.95118 9.65832 4.95118 9.85358 5.14644Z" fill="currentColor"></path></svg>
                                </button>
                            </div>
                        </article>
                    )
                })}

            </div>

            <hr className={styles.bottomLine} />

            <div className={styles.footer}>
                <div className={styles.totalQuantity}>
                    Total goods: <p>{cartItems.reduce((sum, item) => {
                        return sum + item.count
                    }, 0)} th </p>
                </div>
                <div className={styles.totalPrice}>
                    Total price: <p>{new Intl.NumberFormat('ru-Ru', {
                        style: 'currency',
                        currency: 'USD'
                    }).format(totalPrice)}</p>
                </div>
            </div>
        </div>
    );
};

export default CartBlock;