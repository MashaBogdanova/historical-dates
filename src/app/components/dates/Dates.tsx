import React from 'react';
import styles from "./dates.module.scss";
import {dates} from "@/mocks/dates-mock";

const Dates = () => {
    return (
        <section className={styles.dates}>
            <h2 className={styles.dates__start}>{dates[0].start}</h2>
            <h2 className={styles.dates__end}>{dates[0].end}</h2>
        </section>
    );
};

export default Dates;
