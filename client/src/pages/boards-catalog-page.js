import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBoards, setActiveCategory } from '../redux/slices/itemsSlice';
import Catalog from '../components/catalog/Catalog';

const BoardsCatalogPage = () => {

    const { boards, isLoading } = useSelector(state => state.items)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchBoards())
    }, [dispatch])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        dispatch(setActiveCategory(2))
    }, [dispatch])


    return (
        <div>
            <Catalog
                items={boards}
                isLoading={isLoading}
                title={"Boards"}
                paramName={'boards'} />
        </div>
    );
};

export default BoardsCatalogPage;