import React from 'react';

import Header from './components/header/Header';
import InfoInner from './components/info-inner/InfoInner';
import InfoBuy from './components/info-buy/InfoBuy';

import styles from './App.module.scss';
import CarouselBlock from './components/carousel/CarouselBlock';

function App() {

    return (
        <div className={styles.App}>
            <Header />
            <InfoInner />
            <div className={styles.container}>

            </div>
            <CarouselBlock />
            <InfoBuy />
        </div>
    );
}
export default App;
