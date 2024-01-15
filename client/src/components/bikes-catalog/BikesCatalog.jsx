import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBikes } from '../../redux/slices/itemsSlice';

import styles from './BikesCatalog.module.scss';
import Sceleton from '../sceleton/Sceleton';

const BikesCatalog = () => {

    const { bikes, isLoading } = useSelector(state => state.items)
    const dispatch = useDispatch()

    const skeletons = [...new Array(6)].map((_, i) => <div><Sceleton key={i} /></div>)

    useEffect(() => {
        dispatch(fetchBikes())
    }, [dispatch])

    if (isLoading) {

        console.log(skeletons);
        return (
            <div className={styles.bikesCatalog}>
                <h3>Bikes catalog</h3>
                <hr />

                <div className={styles.skeletonsWrapper}>
                    {skeletons}
                </div>

                <hr />
            </div>
        )
    }

    return (
        <div className={styles.bikesCatalog}>
            <h3>Bikes catalog</h3>
            <hr />
            <div className={styles.bikesCatalogList}>

                {bikes.map(bike => {
                    return <div key={bike._id} className={styles.card}>
                        <img src={bike.bikeImage} alt={bike.name} />
                        <div className={styles.cardInfo}>
                            <h5>{bike.name}</h5>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae beatae magnam odit reprehenderit </p>
                            <div className={styles.cardFooter}>
                                <p>{new Intl.NumberFormat('ru-Ru', {
                                    style: 'currency',
                                    currency: 'USD'
                                }).format(bike.price)}</p>
                                <button>buy</button>
                            </div>
                        </div>
                    </div>
                })}


            </div>
            <hr />
        </div>
    );
};

export default BikesCatalog;