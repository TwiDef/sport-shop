import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBoards, setActiveCategory } from '../redux/slices/itemsSlice';
import Catalog from '../components/catalog/Catalog';

const BoardsCatalogPage = () => {
    const { searchValue } = useSelector(state => state.items)
    const { boards, isLoading } = useSelector(state => state.items)
    const dispatch = useDispatch()

    const filteredItems = boards.filter(item => {
        return item.name.toLowerCase().includes(searchValue)
    })

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
                items={filteredItems}
                isLoading={isLoading}
                title={"Boards"}
                paramName={'boards'} />
        </div>
    );
};

export default BoardsCatalogPage;