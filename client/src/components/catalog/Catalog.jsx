import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchValue } from '../../redux/slices/itemsSlice';
import { RxCross2 } from "react-icons/rx";

import ReactPaginate from 'react-paginate';
import Sceleton from '../sceleton/Sceleton';
import ItemCard from '../item-card/ItemCard';
import NotFoundMsg from '../not-found-msg/NotFoundMsg';

import styles from './Catalog.module.scss';

const Catalog = ({ items, isLoading, title, paramName }) => {

    useEffect(() => {
        return () => {
            dispatch(setSearchValue(""))
        }
    }, [])

    const dispatch = useDispatch()
    const { searchValue, isError } = useSelector(state => state.items)
    const skeletons = [...new Array(6)].map((_, i) => <div key={i}><Sceleton /></div>)

    const [itemOffset, setItemOffset] = useState(0);
    const [activePaginatePage, setActivePaginatePage] = useState(0)
    let itemsPerPage = 6;

    let endOffset = itemOffset + itemsPerPage;
    let currentItems = items.slice(itemOffset, endOffset);
    let pageCount = Math.ceil(items.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        setActivePaginatePage(event.selected)

        if (event.selected >= activePaginatePage) {
            setActivePaginatePage(event.selected)
        } else {
            setActivePaginatePage(activePaginatePage - 1)
        }
        setItemOffset(newOffset);
        window.scrollTo(0, 0);
    };

    const onChangeSearchValue = (e) => {
        dispatch(setSearchValue((e.target.value).toLowerCase()))
        setItemOffset(0);
        if (!e.target.value) {
            setActivePaginatePage(0)
        }
    }

    const onClearSearch = () => {
        dispatch(setSearchValue(""))
    }

    if (isLoading) {
        return (
            <div className={styles.Catalog}>
                <h3 className={styles.title}>{title} catalog</h3>
                <hr />
                <div className={styles.skeletonsWrapper}>
                    {skeletons}
                </div>
                <hr />
            </div>
        )
    }

    if (isError) {
        return (
            <div className={styles.Catalog}>
                <h3 className={styles.title}>{title} catalog</h3>
                <hr />
                <NotFoundMsg title={"SORRY"} subtitle={"Something went wrong, try again later"} />
                <hr />
            </div>
        )
    }

    return (
        <div className={styles.Catalog}>
            <div className={styles.header}>
                <h3 className={styles.title}>{title} catalog</h3>
                <div style={{ position: "relative" }}>
                    <input
                        className={styles.search}
                        value={searchValue}
                        onChange={onChangeSearchValue}
                        placeholder='search...'
                        type="text"
                    />
                    {searchValue ? <span onClick={onClearSearch} className={styles.removeSearch}><RxCross2 /></span> : null}
                </div>
            </div>

            <hr className={styles.topLine} />
            {!items.length ?
                <div className={styles.CatalogListEmpty}>
                    <NotFoundMsg title={"SORRY"} subtitle={"nothing was found for your request"} />
                </div> :
                <div className={styles.CatalogList}>
                    {
                        currentItems.map(item => {
                            return (
                                <ItemCard key={item._id} item={item} paramName={paramName} />
                            )
                        })
                    }
                </div>
            }
            <ReactPaginate
                className={styles.pagination}
                breakLabel="..."
                nextLabel={<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg>}
                onPageChange={handlePageClick}
                pageRangeDisplayed={6}
                pageCount={pageCount}
                forcePage={activePaginatePage}
                previousLabel={<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path></svg>}
                renderOnZeroPageCount={null}
            />
            <hr className={styles.bottomLine} />

        </div>
    );
};

export default Catalog;