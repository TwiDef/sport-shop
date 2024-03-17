import React, { useRef } from 'react';
import { useFormik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { onBuyItems } from '../../redux/slices/userdataSlice';
import { clearCart } from '../../redux/slices/cartSlice';
import * as Yup from 'yup';

import { MdOutlineEmail } from "react-icons/md";
import { IoPhonePortraitOutline } from "react-icons/io5";

import Button from '../UI/button/Button';

import styles from './Popup.module.scss';


const Popup = ({ setPopUp }) => {
    const { cartItems } = useSelector(state => state.cart)
    const dispatch = useDispatch()

    const emailField = useRef(null)
    const phoneField = useRef(null)

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const formik = useFormik({
        initialValues: {
            email: '',
            phone: ''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Incorrect email")
                .required("Required field"),
            phone: Yup.string()
                .matches(phoneRegExp, "Phone number is not valid")
                .required("Required field")
        }),
        onSubmit: (values) => {
            emailField.current.value = ""
            phoneField.current.value = ""
            dispatch(onBuyItems([cartItems, JSON.parse(JSON.stringify(values, null, 2))]))
            setTimeout(() => {
                setPopUp(false)
                dispatch(clearCart())
            }, 1000)
        }
    })

    return (
        <article className={styles.overlay}>
            <form
                className={styles.modal}
                onSubmit={formik.handleSubmit}>

                <svg onClick={() => setPopUp(false)} className={styles.closeBtn} stroke="red" fill="#ee173c" strokeWidth="0" viewBox="0 0 24 24" height="50px" width="50px" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path></svg>

                <h4 className={styles.title}>Please fill the form for feedback</h4>

                <div className={styles.inputBlock}>
                    <label htmlFor="email">your email <MdOutlineEmail /></label>
                    <input
                        ref={emailField}
                        placeholder='example@email.com'
                        id='email'
                        name='email'
                        type="text"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} />
                    {formik.errors.email && formik.touched.email ?
                        <div className={styles.errorMsg}>{formik.errors.email}</div> :
                        null}
                </div>

                <div className={styles.inputBlock}>
                    <label htmlFor="phone">your phone <IoPhonePortraitOutline /></label>
                    <input
                        ref={phoneField}
                        placeholder='89099998888'
                        id='phone'
                        name='phone'
                        type="tel"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} />
                    {formik.errors.phone && formik.touched.phone ?
                        <div className={styles.errorMsg}>{formik.errors.phone}</div> :
                        null}
                </div>
                <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
                    <Button
                        type='submit'
                        children={'Send'}
                        width={140}
                        pY={10}
                        pX={10} />
                </div>

            </form>
        </article>
    );
};

export default Popup;