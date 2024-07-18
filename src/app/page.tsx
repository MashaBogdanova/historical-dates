'use client';

import styles from "./page.module.scss";
import Circle from "@/app/components/circle/Circle";
import Lines from "@/app/components/lines/Lines";
import Dates from "@/app/components/dates/Dates";
import Pagination from "@/app/components/pagination/Pagination";
import Slider from "@/app/components/slider/Slider";
import {dates} from "@/mocks/dates-mock";
import {useState} from "react";


export default function Home() {
    const [currentPeriodIndex, setCurrentPeriodIndex] = useState(0);
    const currentPeriodData = dates[currentPeriodIndex];

    return (
        <main className={styles.main}>
            <h1 className={styles.main__title}>Исторические<br/>даты</h1>
            <Lines/>
            <Circle setCurrentPeriodIndex={setCurrentPeriodIndex}/>
            <Dates/>
            <Pagination currentPeriodIndex={currentPeriodIndex} setCurrentPeriodIndex={setCurrentPeriodIndex}/>
            <Slider period={currentPeriodData}/>
        </main>
    );
}
