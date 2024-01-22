import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentItem } from '../../redux/slices/itemsSlice';

import styles from './SingleBike.module.scss';
import Button from '../UI/button/Button';

const SingleBike = () => {
    const params = useParams()
    const dispatch = useDispatch()

    const { currentItem } = useSelector(state => state.items)
    const { id } = params


    useEffect(() => {
        dispatch(setCurrentItem(id))
    }, [id])

    if (!currentItem) return <div>Loading...</div>

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
                    <h5>вес:</h5>
                    <p>{currentItem.weight} кг</p>
                    <h5>описание: </h5>
                    <p>{currentItem.description}</p>
                </div>
            </div>
            <div className={styles.footer}>
                <p className={styles.price}>
                    {new Intl.NumberFormat('ru-Ru', {
                        style: 'currency',
                        currency: 'USD'
                    }).format(currentItem.price)}
                </p>
                <Button onClick={() => alert('Bought ')} children={'buy'} />
            </div>
        </div>
    );
};

export default SingleBike;