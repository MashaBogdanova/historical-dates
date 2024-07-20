'use client';

import styles from "./circle.module.scss";
import generatePoints from "@/utils/generatePoints";
import {useEffect, useRef, useState} from "react";
import {Period} from "@/mocks/dates-mock";

interface Props {
    offsetAngle: number;
    dates: Period[];
    setCurrentPeriodIndex: (number) => void;
    setOffsetAngle: (offset: number) => void;
}

export default function Circle({offsetAngle, dates, setCurrentPeriodIndex, setOffsetAngle}: Props) {
    // You can dynamically change number of points, for example, it may depend on backand response
    // Circle radius is calculated dynamically

    // console.log('pagination offset', offsetAngle);

    const circleElement = useRef<HTMLDivElement | null>(null);
    const [radius, setRadius] = useState(256);

    useEffect(() => {
        if (circleElement.current) {
            const width = circleElement.current?.offsetWidth;
            setRadius(width / 2);
        }
    }, []);


    function rotateCircle(index: number) {


        const totalPointNumber = dates.length;
        const oneSegmentAngle = 360 / totalPointNumber;

        const indexToAngle = {
            0: 0,
            1: -300,
            2: -240,
            3: -180,
            4: -120,
            5: -60
        }

        const rotateAngle = oneSegmentAngle * (totalPointNumber - index) % 360;

        console.log('offset angle', offsetAngle, 'rotateAngle', rotateAngle);

        if (rotateAngle > 180) {
            setOffsetAngle((360 - rotateAngle) * -1);
        } else {
            setOffsetAngle(rotateAngle);
        }

    }

    const points = generatePoints({radius, dates, setCurrentPeriodIndex, rotateCircle});
    return (
        <section style={{rotate: `${offsetAngle}deg`}} className={styles.circle} ref={circleElement}>
            {points}
        </section>
    )
}
