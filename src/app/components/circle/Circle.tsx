'use client';

import styles from "./circle.module.scss";
import generatePoints from "@/utils/generatePoints";
import {useEffect, useRef, useState} from "react";
import {Period} from "@/mocks/dates-mock";

interface Props {
    offsetAngle: number;
    dates: Period[];
    currentPeriodIndex: number;
    setCurrentPeriodIndex: (number) => void;
    setOffsetAngle: (offset: number) => void;
}

export default function Circle({offsetAngle, dates, currentPeriodIndex, setCurrentPeriodIndex, setOffsetAngle}: Props) {
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


    function rotateCircle(index: number) {

        const totalPointNumber = dates.length;
        const oneSegmentAngle = 360 / totalPointNumber;
        const rotateAngle = oneSegmentAngle * (totalPointNumber - index);

        setOffsetAngle(((currentOffsetAngle) => {
            // difAngle is calculated to find the closest direction to rotate
            const difAngle = divisionRemainder(rotateAngle - currentOffsetAngle);
            console.log('rotateAngle', rotateAngle, 'currentOffsetAngle', currentOffsetAngle)

            if (difAngle <= 180) {
                return currentOffsetAngle + difAngle;
            } else {
                return currentOffsetAngle - (360 - difAngle);
            }
        }) as number);
    }

    const points = generatePoints({radius, dates, offsetAngle, currentPeriodIndex, setCurrentPeriodIndex, rotateCircle});

    return (
        <section style={{rotate: `${offsetAngle}deg`}} className={styles.circle} ref={circleElement}>
            {points}
        </section>
    )

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder
    function divisionRemainder(angle){
        return ((angle % 360) + 360) % 360;
    }
}
