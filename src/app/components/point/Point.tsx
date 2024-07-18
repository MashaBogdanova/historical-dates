import React from 'react';
import styles from "./point.module.scss";
import {Theme} from "@/mocks/dates-mock";

interface Props {
    index: number;
    x: number;
    y: number;
    theme: Theme;
    setCurrentPeriodIndex: (number) => void
}

function Point({index, x, y, theme, setCurrentPeriodIndex}: Props) {
    
    return (
        <div
            className={styles.point}
            style={{left: `${x.toFixed(5)}px`, top: `${y.toFixed(5)}px`}}
        >
            <p className={styles.point__number} onClick={() => setCurrentPeriodIndex(index)}>{index + 1}</p>
            <p className={styles.point__theme}>{theme}</p>
        </div>
    );
}

export default Point;
