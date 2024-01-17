import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBikes } from '../../redux/slices/itemsSlice';
import styles from './Pagination.module.scss';

const PaginatedItems = ({ itemsPerPage }) => {
    function Items({ currentItems }) {
        return (
            <div style={{ display: 'flex' }}>
                {currentItems &&
                    currentItems.map((item) => (
                        <div >
                            <div>{item.name}</div>
                        </div>
                    ))}
            </div>
        );
    }

    const bikes = useSelector(state => state.items.bikes)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchBikes())
    }, [dispatch])

    /*  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]; */
    /* const items = [{ a: 2 }]; */

    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = bikes.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(bikes.length / itemsPerPage);

    console.log(bikes);


    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % bikes.length;
        setItemOffset(newOffset);
    };
    return (
        <>
            <div>PAGINATION</div>
            <hr />
            <Items currentItems={currentItems} />
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={6}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
            />
        </>
    );
};

export default PaginatedItems;