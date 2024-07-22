"use client";

import { useEffect, useRef, useState } from "react";

import { useDates } from "@/context/DatesContext";
import generatePoints from "@/utils/generatePoints";
import calculateRemainder from "@/utils/math";

import styles from "./circle.module.scss";

interface Props {
  offsetAngle: number;
  // eslint-disable-next-line no-unused-vars
  setOffsetAngle: (offsetAngle: number) => void;
}

export default function Circle({ offsetAngle, setOffsetAngle }: Props) {
  const { dates } = useDates();
  const [radius, setRadius] = useState(256);
  const circleElement = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Circle radius is calculated dynamically
    if (circleElement.current) {
      const width = circleElement.current?.offsetWidth;
      setRadius(width / 2);
    }
  }, []);

  function rotateCircle(index: number) {
    // You can dynamically change number of points, for example, it may depend on backand response
    const totalPointNumber = dates.length;
    const oneSegmentAngle = 360 / totalPointNumber;
    const rotateAngle = oneSegmentAngle * (totalPointNumber - index);

    setOffsetAngle(((currentOffsetAngle) => {
      // difAngle is calculated to find the closest direction to rotate
      const difAngle = calculateRemainder(rotateAngle - currentOffsetAngle);

      if (difAngle <= 180) {
        return currentOffsetAngle + difAngle;
      } else {
        return currentOffsetAngle - (360 - difAngle);
      }
    }) as number);
  }

  const points = generatePoints({
    radius,
    dates,
    offsetAngle,
    rotateCircle,
  });

  return (
    <section
      style={{ rotate: `${offsetAngle}deg` }}
      className={styles.circle}
      ref={circleElement}
    >
      {points}
    </section>
  );
}
