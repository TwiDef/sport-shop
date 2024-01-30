import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import MainPage from './pages/main-page';
import BikesCatalogPage from './pages/bikes-catalog-page';
import BoardsCatalogPage from './pages/boards-catalog-page';
import NotFoundPage from './pages/not-found-page';
import SingleBikePage from './pages/single-bike-page';
import SingleBoardPage from './pages/single-board-page';
import CartPage from './pages/cart-page';

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
                <Route path="/bikes/:id" element={<div className={styles.containerXl}>
                    <SingleBikePage />
                </div>} />
                <Route path="/boards" element={<div className={styles.container}>
                    <BoardsCatalogPage />
                </div>} />
                <Route path="/boards/:id" element={<div className={styles.containerXl}>
                    <SingleBoardPage />
                </div>} />
                <Route path="/cart" element={<div className={styles.container}>
                    <CartPage />
                </div>} />

                <Route path='*' element={<NotFoundPage />} />
            </Routes>
        </div>
    );
}
export default App;
