"use client";

import React, { useEffect, useState } from "react";

import styles from "./dates.module.scss";

interface Props {
  startDate: number;
  endDate: number;
}
export default function Dates({ startDate, endDate }: Props) {
  const [displayStartDate, setDisplayStartDate] = useState(startDate);
  const [displayEndDate, setDisplayEndDate] = useState(endDate);

  useEffect(() => {
    const updateValue = (currentValue, targetValue, setValue) => {
      if (currentValue !== targetValue) {
        const increment = currentValue < targetValue ? 1 : -1;
        setTimeout(() => setValue(currentValue + increment), 15);
      }
    };

    const intervalId = setInterval(() => {
      updateValue(displayStartDate, startDate, setDisplayStartDate);
      updateValue(displayEndDate, endDate, setDisplayEndDate);
    }, 50);

    return () => clearInterval(intervalId);
  }, [startDate, endDate, displayStartDate, displayEndDate]);

  return (
    <section className={styles.dates}>
      <h2 className={styles.dates__start}>{displayStartDate}</h2>
      <h2 className={styles.dates__end}>{displayEndDate}</h2>
    </section>
  );
}
