import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBoards } from '../redux/slices/itemsSlice';
import Catalog from '../components/catalog/Catalog';

const BoardsCatalogPage = () => {

    const { boards, isLoading } = useSelector(state => state.items)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchBoards())
    }, [dispatch])

    return (
        <div>
            <Catalog items={boards} isLoading={isLoading} title={"Boards"} />
        </div>
    );
};

export default BoardsCatalogPage;