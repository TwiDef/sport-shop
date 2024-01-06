import React from 'react';

import Header from './components/header/Header';
import InfoInner from './components/info-inner/InfoInner';

import styles from './App.module.scss';

function App() {
    return (
        <div className={styles.App}>
            <Header />
            <InfoInner />
        </div>
    );
}

export default App;
