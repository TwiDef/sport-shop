import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentItem, removeCurrentItem } from '../../redux/slices/itemsSlice';

import Spinner from '../spinner/Spinner';

import styles from './SingleBoard.module.scss';

const SingleBoard = () => {
    const params = useParams()
    const dispatch = useDispatch()

    const currentItem = useSelector(state => state.items)
    const { id } = params

    useEffect(() => {
        dispatch(setCurrentItem({ type: "boards", id }))
        return () => {
            dispatch(removeCurrentItem())
        }
    }, [id])

    if (!currentItem) return <div className={styles.spinner}><Spinner /></div>

    return (
        <div>

        </div>
    );
};

export default SingleBoard;