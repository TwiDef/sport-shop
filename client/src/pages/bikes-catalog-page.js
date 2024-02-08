import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBikes, setActiveCategory } from '../redux/slices/itemsSlice';
import Catalog from '../components/catalog/Catalog';

const BikesCatalogPage = () => {
    const { searchValue } = useSelector(state => state.items)
    const { bikes, isLoading } = useSelector(state => state.items)
    const dispatch = useDispatch()

    const filteredItems = bikes.filter(item => {
        return item.name.toLowerCase().includes(searchValue)
    })

    useEffect(() => {
        dispatch(fetchBikes())
    }, [dispatch])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        dispatch(setActiveCategory(1))
    }, [dispatch])

    return (
        <div>
            <Catalog
                items={filteredItems}
                isLoading={isLoading}
                title={"Bikes"}
                paramName={'bikes'} />
        </div>
    );
};

export default BikesCatalogPage;