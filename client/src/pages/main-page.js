import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setActiveCategory } from '../redux/slices/itemsSlice';

import InfoInner from '.././components/info-inner/InfoInner';
import InfoBuy from '.././components/info-buy/InfoBuy';
import CarouselBlock from '.././components/carousel/CarouselBlock';
import Footer from '.././components/footer/Footer';

import styles from '../App.module.scss';

const MainPage = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setActiveCategory(0))
    }, [])

    return (
        <div>
            <InfoInner />
            <CarouselBlock />
            <InfoBuy />
            <div className={styles.container}>
                <Footer />
            </div>
        </div>
    );
};

export default MainPage;