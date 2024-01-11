import React from 'react';
import './CarouselBlock.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const CarouselBlock = () => {

    const carouselItems = [
        {
            id: 1,
            img: "https://static.insales-cdn.com/r/HTNvnKkxUww/rs:fit:700:700:1/plain/images/products/1/2652/532458076/kupit-gornyj-velosiped-27-5-upland-fehtbajk-zhenskij-vzroslyj-podrostkovyj-easy-rider-0.jpg@webp"
        },
        {
            id: 2,
            img: "https://static.insales-cdn.com/r/wBh1LyWdlPU/rs:fit:700:700:1/plain/images/products/1/5584/529970640/DSCF1162.jpg@webp"
        },
        {
            id: 3,
            img: "https://static.insales-cdn.com/r/K0cig0Zrrks/rs:fit:700:700:1/plain/images/products/1/2608/532400688/kupit-gornyj-velosiped-27-5-upland-fehtbajk-zhenskij-vzroslyj-podrostkovyj-easy-rider-0.jpg@webp"
        },
        {
            id: 4,
            img: "https://static.insales-cdn.com/r/HTNvnKkxUww/rs:fit:700:700:1/plain/images/products/1/2652/532458076/kupit-gornyj-velosiped-27-5-upland-fehtbajk-zhenskij-vzroslyj-podrostkovyj-easy-rider-0.jpg@webp"
        },
        {
            id: 5,
            img: "https://static.insales-cdn.com/r/wBh1LyWdlPU/rs:fit:700:700:1/plain/images/products/1/5584/529970640/DSCF1162.jpg@webp"
        },
        {
            id: 6,
            img: "https://static.insales-cdn.com/r/K0cig0Zrrks/rs:fit:700:700:1/plain/images/products/1/2608/532400688/kupit-gornyj-velosiped-27-5-upland-fehtbajk-zhenskij-vzroslyj-podrostkovyj-easy-rider-0.jpg@webp"
        }
    ]

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        dots: true,
        arrows: false,
        autoplay: true
    };

    return (
        <div className="carousel-wrapper">
            <h2 className="carousel-title">Most popular</h2>
            <h4 className="carousel-subtitle">hits of the season</h4>
            <div className="carousel">
                <Slider {...settings}>

                    {carouselItems.map((item) => {
                        return <div key={item.id} className="box">
                            <div className='box-inner'>
                                <span>Upland X90 -27.5</span>
                                <span>35000</span>
                            </div>
                            <img className="slide-img" src={item.img} alt={item.id} />
                        </div>
                    })}
                    {/* <div className={styles.box}>
                        <img className={styles.slideImg} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlxCvC68F3M6hoI9pUUaw_ZBsAhajSx1GZ2wPjMvd-5FIMf3mmQ9Brrt5I1wFbVPuWDc0&usqp=CAU" alt="" />
                    </div>
                    <div className={styles.box}>
                        <img className={styles.slideImg} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlxCvC68F3M6hoI9pUUaw_ZBsAhajSx1GZ2wPjMvd-5FIMf3mmQ9Brrt5I1wFbVPuWDc0&usqp=CAU" alt="" />
                    </div>
                    <div className={styles.box}>
                        <img className={styles.slideImg} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlxCvC68F3M6hoI9pUUaw_ZBsAhajSx1GZ2wPjMvd-5FIMf3mmQ9Brrt5I1wFbVPuWDc0&usqp=CAU" alt="" />
                    </div>

                    <div className={styles.box}>
                        <img className={styles.slideImg} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlxCvC68F3M6hoI9pUUaw_ZBsAhajSx1GZ2wPjMvd-5FIMf3mmQ9Brrt5I1wFbVPuWDc0&usqp=CAU" alt="" />
                    </div>
                    <div className={styles.box}>
                        <img className={styles.slideImg} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlxCvC68F3M6hoI9pUUaw_ZBsAhajSx1GZ2wPjMvd-5FIMf3mmQ9Brrt5I1wFbVPuWDc0&usqp=CAU" alt="" />
                    </div> */}
                </Slider>
            </div>

        </div>
    );

};

export default CarouselBlock;
