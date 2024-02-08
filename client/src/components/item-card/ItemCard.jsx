import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../redux/slices/cartSlice';

import styles from './ItemCard.module.scss';

const ItemCard = ({ item, paramName }) => {
    const cartItem = useSelector(state => state.cart.cartItems
        .find(findedItem => findedItem.id === item._id))
    const addedCount = cartItem ? cartItem.count : 0

    const dispatch = useDispatch()

    const addToCart = (item) => {
        const cartItem = {
            id: item._id,
            name: item.name,
            price: item.price,
            image: item.image,
            rating: item.rating,
            count: 0
        }
        dispatch(addItemToCart(cartItem))
    }

    return (
        <div key={item._id} className={styles.card}>
            <span className={styles.rating}>{item.rating}</span>
            <Link to={`/${paramName}/${item._id}`}>
                <img src={item.image} alt={item.name} />
            </Link>
            <div className={styles.cardInfo}>
                <h5>{item.name}</h5>
                <p>{`${item.description.slice(0, 120)} . . .`}</p>
                <div className={styles.cardFooter}>
                    <p>{new Intl.NumberFormat('ru-Ru', {
                        style: 'currency',
                        currency: 'USD'
                    }).format(item.price)}</p>
                    <button onClick={() => addToCart(item)}>
                        {addedCount > 0 ? ` ${addedCount} in cart ` : 'buy'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ItemCard;