import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBikes } from '../../redux/slices/itemsSlice';
import ReactPaginate from 'react-paginate';

import styles from './BikesCatalog.module.scss';
import Sceleton from '../sceleton/Sceleton';

const BikesCatalog = () => {

    const { bikes, isLoading } = useSelector(state => state.items)
    const dispatch = useDispatch()

    const skeletons = [...new Array(6)].map((_, i) => <div><Sceleton key={i} /></div>)

    useEffect(() => {
        dispatch(fetchBikes())
    }, [dispatch])


    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 6;

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = bikes.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(bikes.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % bikes.length;
        setItemOffset(newOffset);
        window.scrollTo(0, 0);
    };

    if (isLoading) {
        return (
            <div className={styles.bikesCatalog}>
                <h3>Bikes catalog</h3>
                <hr />
                <div className={styles.skeletonsWrapper}>
                    {skeletons}
                </div>
                <hr />
            </div>
        )
    }

    return (
        <div className={styles.bikesCatalog}>
            <h3>Bikes catalog</h3>
            <hr className={styles.topLine} />
            <div className={styles.bikesCatalogList}>
                {currentItems.map(bike => {
                    return (
                        <div key={bike._id} className={styles.card}>
                            {/* <span>{bike.rating}</span> */}
                            <img src={bike.bikeImage} alt={bike.name} />
                            <div className={styles.cardInfo}>
                                <h5>{bike.name}</h5>
                                <p>{`${bike.description.slice(0, 120)} . . .`}</p>
                                <div className={styles.cardFooter}>
                                    <p>{new Intl.NumberFormat('ru-Ru', {
                                        style: 'currency',
                                        currency: 'USD'
                                    }).format(bike.price)}</p>
                                    <button>buy</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <ReactPaginate
                className={styles.pagination}
                breakLabel="..."
                nextLabel={<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg>}
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel={<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path></svg>}
                renderOnZeroPageCount={null}
            />
            <hr className={styles.bottomLine} />

        </div>
    );
};

export default BikesCatalog;