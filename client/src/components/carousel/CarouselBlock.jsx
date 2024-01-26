import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBikes } from '../../redux/slices/itemsSlice';

import Slider from "react-slick";

import './CarouselBlock.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselBlock = () => {
    const { bikes } = useSelector(state => state.items)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchBikes())
    }, [dispatch])


    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        dots: true,
        arrows: false,
        autoplay: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    };

    return (
        <div className="carousel-wrapper">
            <h2 className="carousel-title">Most popular</h2>
            <h4 className="carousel-subtitle">hits of the season</h4>
            <div className="carousel">
                <Slider {...settings}>

                    {
                        bikes.filter(bike => bike.rating > 5)
                            .map((item) => {
                                return <div key={item._id} className='box'>
                                    <div className='box-inner'>
                                        <span>{item.name}</span>
                                        <span>{new Intl.NumberFormat('ru-Ru', {
                                            style: 'currency',
                                            currency: 'USD'
                                        }).format(item.price)}</span>
                                    </div>
                                    <img className="slide-img" src={item.image} alt={item.id} />
                                </div>

                            })
                    }

                    {/*  {carouselItems.map((item) => {
                        return <div key={item.id} className="box">
                            <div className='box-inner'>
                                <span>Upland X90 -27.5</span>
                                <span>35000</span>
                            </div>
                            <img className="slide-img" src={item.img} alt={item.id} />
                        </div>
                    })} */}

                </Slider>
            </div>

        </div>
    );

};

export default CarouselBlock;
