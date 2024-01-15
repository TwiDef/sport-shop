import React from "react"
import ContentLoader from "react-content-loader"

import styles from './Sceleton.module.scss';

const Sceleton = (props) => (
    <div>
        <ContentLoader
            speed={2}
            width={350}
            height={460}
            viewBox="0 0 350 460"
            backgroundColor="#666666"
            foregroundColor="#9e9e9e"
            {...props}
        >
            <rect x="-1" y="-1" rx="27" ry="27" width="350" height="450" />
            <rect x="195" y="278" rx="0" ry="0" width="12" height="38" />
            <rect x="197" y="319" rx="0" ry="0" width="11" height="24" />
        </ContentLoader>
    </div>
)

export default Sceleton
