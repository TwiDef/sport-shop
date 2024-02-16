import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setActiveCategory } from '../redux/slices/itemsSlice';

import Contacts from '../components/contacts/Contacts';

const ContactsPage = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    useEffect(() => {
        dispatch(setActiveCategory(3))
    }, [dispatch])

    return (
        <Contacts />
    );
};

export default ContactsPage;