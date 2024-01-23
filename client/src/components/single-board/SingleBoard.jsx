import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentItem, removeCurrentItem } from '../../redux/slices/itemsSlice';

import Button from '../UI/button/Button';
import Spinner from '../spinner/Spinner';

import styles from './SingleBoard.module.scss';

const SingleBoard = () => {
    const params = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { currentItem } = useSelector(state => state.items)
    const { id } = params


    useEffect(() => {
        dispatch(setCurrentItem({ type: "boards", id }))
        return () => {
            dispatch(removeCurrentItem())
        }
    }, [id])

    if (!currentItem) return <div className={styles.spinner}><Spinner /></div>

    return (
        <div style={{ padding: "30px" }}>
            <h3 className={styles.title}>{currentItem.name}</h3>
            <div className={styles.wrapper}>
                <div className={styles.img}>
                    <p className={styles.imageName}>{currentItem.name}</p>
                    <img src={currentItem.image} alt={currentItem.name} />
                </div>
                <div className={styles.about}>
                    <h5>цвет: </h5>
                    <p>{currentItem.color}</p>
                    <h5>длина:</h5>
                    <p>{currentItem.length} дюйм</p>
                    <h5>давление:</h5>
                    <p>{currentItem.pressue} psi</p>
                </div>
            </div>
            <p className={styles.description}>{currentItem.description}</p>
            <div className={styles.footer}>
                <p className={styles.price}>
                    {new Intl.NumberFormat('ru-Ru', {
                        style: 'currency',
                        currency: 'USD'
                    }).format(currentItem.price)}
                </p>
                <div className={styles.btnContainer}>
                    <Button pY={12} pX={60} onClick={() => alert('Bought ')} children={'buy'} />
                    <Button pY={12} pX={70} onClick={() => { navigate(-1) }} children={'back'} />
                </div>

            </div>
        </div>
    );
};

export default SingleBoard;