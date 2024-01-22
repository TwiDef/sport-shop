import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveCategory } from '../redux/slices/itemsSlice';
import LinkTo from '../components/UI/link-to/LinkTo';

const NotFoundPage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setActiveCategory(null))
    })

    return (
        <div style={{ color: "#fff", height: "100vh", display: 'flex', justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            <div style={{ height: "400px", backgroundImage: "url('https://static.insales-cdn.com/images/products/1/5908/538515220/large_large_large_hit_4.png')", backgroundSize: "contain", backgroundRepeat: "no-repeat", textShadow: "4px 4px 7px #000" }}>
                <h2 style={{ textAlign: "center", fontSize: "160px" }}>404</h2>
                <h3 style={{ textAlign: "center", fontSize: "60px" }} >SORRY we couldn't find that page</h3>
            </div>
            <LinkTo to="/" children="Home" />
        </div >
    );
};

export default NotFoundPage;