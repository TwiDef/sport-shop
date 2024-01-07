import React from 'react';

import Header from './components/header/Header';
import InfoInner from './components/info-inner/InfoInner';
import CarouselBikes from './components/carousel/CarouselBikes';

import styles from './App.module.scss';

function App() {

    return (
        <div className={styles.App}>
            <Header />
            <InfoInner />
            <div className={styles.container}>
                <CarouselBikes />
            </div>
        </div>
    );
}

export default App;
