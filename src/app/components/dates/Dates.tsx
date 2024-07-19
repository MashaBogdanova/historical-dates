import React from 'react';
import styles from "./dates.module.scss";

interface Props {
    start: number;
    end: number;
}
const Dates = ({startDate, endDate}: Props) => {
    return (
        <section className={styles.dates}>
            <h2 className={styles.dates__start}>{startDate}</h2>
            <h2 className={styles.dates__end}>{endDate}</h2>
        </section>
    );
};

export default Dates;
