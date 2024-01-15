import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import MainPage from './pages/main-page';
import BikesCatalogPage from './pages/bikes-catalog-page';

import styles from './App.module.scss';

function App() {

    return (
        <div className={styles.App}>
            <Header />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/bikes" element={<div className={styles.container}>
                    <BikesCatalogPage />
                </div>} />
            </Routes>
        </div>
    );
}
export default App;
