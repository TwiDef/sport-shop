import React from 'react';

import Header from './components/header/Header';
import InfoInner from './components/info-inner/InfoInner';
import InfoBuy from './components/info-buy/InfoBuy';

import styles from './App.module.scss';
import CarouselBlock from './components/carousel/CarouselBlock';
import Footer from './components/footer/Footer';

function App() {

    return (
        <div className={styles.App}>
            <Header />
            <InfoInner />

            <CarouselBlock />
            <InfoBuy />
            <div className={styles.container}>
                <Footer />
            </div>
        </div>
    );
}
export default App;
