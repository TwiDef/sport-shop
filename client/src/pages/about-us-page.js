import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setActiveCategory } from '../redux/slices/itemsSlice';

import AboutUs from '../components/about-us/AboutUs';

const AboutUsPage = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setActiveCategory(4))
    }, [dispatch])

    return (
        <AboutUs />
    );
};

export default AboutUsPage;