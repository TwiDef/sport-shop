import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBikes } from '../redux/slices/itemsSlice';
import Catalog from '../components/catalog/Catalog';

const BikesCatalogPage = () => {

    const { bikes, isLoading } = useSelector(state => state.items)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchBikes())
    }, [dispatch])

    return (
        <div>
            <Catalog items={bikes} isLoading={isLoading} title={"Bikes"} />
        </div>
    );
};

export default BikesCatalogPage;