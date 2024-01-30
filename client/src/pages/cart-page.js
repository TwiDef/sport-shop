import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setActiveCategory } from '../redux/slices/itemsSlice';

import CartBlock from '../components/cart-block/CartBlock';

const CartPage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setActiveCategory(null))
    }, [])

    return (
        <CartBlock />
    );
};

export default CartPage;