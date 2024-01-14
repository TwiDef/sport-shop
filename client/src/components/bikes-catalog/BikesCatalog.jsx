import React, { useEffect, useState } from 'react';
import styles from './BikesCatalog.module.scss';
import axios from 'axios';
const BikesCatalog = () => {

    const [bikes, setBikes] = useState([])

    useEffect(() => {
        const getBikes = async () => {
            const bikes = await axios.get("api/bikes")
            setBikes(bikes.data)
        }

        getBikes()
    }, [])

    console.log('Bikecatalog render');
    console.log(bikes);
    return (
        <div className={styles.bikesCatalog}>
            <h3>Bikes catalog</h3>
            <hr />
            <div className={styles.bikesCatalogList}>

                <div className={styles.card}>
                    <img src="https://static.insales-cdn.com/r/yir9mXn9vOw/rs:fit:700:700:1/plain/images/products/1/3212/538922124/kupit-gornyj-velosiped-27-5-twitter-fehtbajk-zhenskij-vzroslyj-podrostkovyj-easy-rider-0.jpg@webp" alt="" />
                    <div className={styles.cardInfo}>
                        <h5>TWITTER Storm 2.0 27.5</h5>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae beatae magnam odit reprehenderit </p>
                        <div className={styles.cardFooter}>
                            <span>1350$</span>
                            <button>buy</button>
                        </div>
                    </div>
                </div>

            </div>
            <hr />
        </div>
    );
};

export default BikesCatalog;