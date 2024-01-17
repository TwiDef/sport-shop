import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchBoards } from '../../redux/slices/itemsSlice';
import styles from './BoardsCatalog.module.scss';

const BoardsCatalog = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchBoards())
    }, [])

    return (
        <div>
            Boards-catalog
        </div>
    );
};

export default BoardsCatalog;