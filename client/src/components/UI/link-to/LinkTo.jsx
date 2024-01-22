import React from 'react';
import { Link } from 'react-router-dom';

import styles from './LinkTo.module.scss';

const LinkTo = ({ to, children }) => {
    return (
        <Link to={to} className={styles.lnk}>{children}</Link>
    );
};

export default LinkTo;