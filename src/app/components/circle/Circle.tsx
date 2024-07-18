'use client';

import styles from "./circle.module.scss";
import generatePoints from "@/utils/generatePoints";
import {useEffect, useRef, useState} from "react";

export default function Circle({setCurrentPeriodIndex}: (number) => void) {
    // You can dynamically change number of points, for example, it may depend on backand response
    // Circle radius is calculated dynamically

    const circleElement = useRef<HTMLDivElement | null>(null);
    const [radius, setRadius] = useState(256);

    useEffect(() => {
        if (circleElement.current) {
            const width = circleElement.current?.offsetWidth;
            setRadius(width / 2);
        }
    }, []);

    const points = generatePoints(radius, setCurrentPeriodIndex);

    return (
        <section className={styles.circle} ref={circleElement}>
            {points}
        </section>
    )
}
