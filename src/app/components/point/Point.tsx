import React, {useEffect, useState} from 'react';
import styles from "./point.module.scss";
import {Theme} from "@/mocks/dates-mock";

interface Props {
    index: number;
    x: number;
    y: number;
    offsetAngle: number;
    theme: Theme;
    currentPeriodIndex: number;
    setCurrentPeriodIndex: (number) => void
    rotateCircle: (index: number) => void;
}

function Point({index, x, y, offsetAngle, theme, currentPeriodIndex, setCurrentPeriodIndex, rotateCircle}: Props) {

    function handleClick() {
        setCurrentPeriodIndex(index);
        rotateCircle(index);
    }

    return (
        <div
            className={`${styles.point} ${index === currentPeriodIndex ? styles.point_active : ''}`}
            style={{left: `${x.toFixed(5)}px`, top: `${y.toFixed(5)}px`, rotate: `${-offsetAngle}deg`}}
        >
            <p className={styles.point__number}
               onClick={handleClick}>{index + 1}</p>
            <p className={styles.point__theme}>{theme}</p>
        </div>
    );
}

export default Point;
