import React from 'react'
import styles from './Slide.module.css';

interface ISlider {
    children: React.ReactNode;
    index: number;
}

const Slide = ({ children, index }: ISlider): JSX.Element => {
    return (
        <div
            className={styles.slide}
            key={index}
        >
            <div style={{ display: 'flex' }}>
                {children}
            </div>
        </div>
    );
}

export default Slide;
