import React from 'react';
import styles from './CarouselBlock.module.scss';
import Carousel from "nuka-carousel";


const CarouselBlock = () => {

    const renderCenterRightControls = ({ nextSlide }) => {
        return (
            <button
                className={styles.sliderControlButton}
                onClick={nextSlide}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M9 18l6-6-6-6" />
                </svg>
            </button>
        );
    };

    const renderCenterLeftControls = ({ previousSlide }) => (
        <button
            className={styles.sliderControlButton}
            onClick={previousSlide}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M15 18l-6-6 6-6" />
            </svg>
        </button>
    );


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
        }
    ]

    return (
        <div className={styles.carouselWrapper}>
            <h2 className={styles.carouselTitle}>Most popular</h2>
            <h4 className={styles.carouselSubTitle}>hits of the season</h4>
            <div className={styles.carousel}>
                <Carousel
                    wrapAround={true}
                    renderCenterLeftControls={renderCenterLeftControls}
                    renderCenterRightControls={renderCenterRightControls}
                    autoplay={true}
                    style={{ marginTop: '80px' }}
                >
                    {carouselItems.map((item) => {
                        return <div className={styles.carouselItem}>
                            <div className={styles.carouselItemAbout}>
                                <h5>Upland VANGUARD 200 - 29</h5>
                                <span>35000.00</span>
                            </div>
                            <img key={item.id} className={styles.slide} src={item.img} />
                        </div>
                    })}
                </Carousel>

            </div>

        </div>
    );

};

export default CarouselBlock;
