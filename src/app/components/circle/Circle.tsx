'use client';

import styles from "./circle.module.scss";
import generatePoints from "@/utils/generatePoints";
import {useEffect, useRef, useState} from "react";
import {Period} from "@/mocks/dates-mock";

interface Props {
    offset: number;
    dates: Period[];
    setCurrentPeriodIndex: (number) => void;
}

export default function Circle({offset, dates, setCurrentPeriodIndex}: Props) {
    // You can dynamically change number of points, for example, it may depend on backand response
    // Circle radius is calculated dynamically

    const circleElement = useRef<HTMLDivElement | null>(null);
    const [radius, setRadius] = useState(256);
    const [rotateOffset, setRotateOffset] = useState(0);

    useEffect(() => {
        if (circleElement.current) {
            const width = circleElement.current?.offsetWidth;
            setRadius(width / 2);
        }
    }, []);

    useEffect(() => {
        setRotateOffset(360 / dates.length * offset);
    }, [offset]);

    const points = generatePoints({radius, dates, setCurrentPeriodIndex});
    return (
        <section style={{ rotate: `${rotateOffset}deg` }} className={styles.circle} ref={circleElement}>
            {points}
        </section>
    )
}
