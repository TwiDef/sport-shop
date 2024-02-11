import React from 'react';

import styles from './AboutUs.module.scss';

const AboutUs = () => {
    return (
        <div className={styles.about}>
            <h3 className={styles.title}>About us</h3>
            <h5 className={styles.subtitle}>How it all started...</h5>
            <p className={styles.text}>
                It all started in September 2007. Nelson and Denis, both passionate loves supboards, were studying and noticed that there wasn't a real shop for supboard gear. One thing led to another and in September 2007 the company Sport Shop was a fact. From their attic room they started their first online web shop, sport-shop went live.

                In the beginning of 2007, the attic room was simply too small and they received the keys of their first real office in Aspen. After hard work and a healthy growth Nelson and Denis decided to focus full-time on Sport Shop in 2008. While they made this decision they moved again to a new office with a warehouse in Kaliningrad.

                In the years that followed Sport Shop grew 20% to 30% yearly and the number of shops and countries they operated in increased. Due to the increase in employees and stock, it again became clear that we needed another place to settle. After a long search, we became the owner of a new office with a warehouse in 2016. This location has a surface of 2500 m2 with the possibility to grow another 500m2. The three-story high warehouse offers space for 20.000 products which we can deliver right from our warehouse.
            </p>
            <h5 className={styles.subtitle}>How it all started...</h5>
            <p className={styles.text}>
                To continue our international growth and name recognition in the future we said goodbye to the name Sport Shop on the first of October 2016 and we continued as sport-shop We are proud that we went from our attic room to a 2500m2 office building with a warehouse. But we are especially proud of the fact that we have an office in 2 countries, 6 shops, and 25 colleagues.
            </p>
            <img
                className={styles.img}
                src="https://www.vek-krovli.ru/komplect/stenovye-trehsloynye-sendvich-paneli-s-vidimym-krepleniem-z-lock/stenovye-trehsloynye-sendvich-paneli-s-vidimym-krepleniem-z-lock_877-2-4978660.jpg" alt="" />
        </div>
    );
};

export default AboutUs;