"use client";

import React, { useEffect, useState } from "react";

import { useCurrentPeriod } from "@/context/CurrentPeriodContext";

import styles from "./dates.module.scss";

export default function Dates() {
  const { currentPeriod } = useCurrentPeriod();
  const [displayStartDate, setDisplayStartDate] = useState(
    currentPeriod.startDate,
  );
  const [displayEndDate, setDisplayEndDate] = useState(currentPeriod.endDate);

  useEffect(() => {
    const updateValue = (currentValue, targetValue, setValue) => {
      if (currentValue !== targetValue) {
        const increment = currentValue < targetValue ? 1 : -1;
        setTimeout(() => setValue(currentValue + increment), 15);
      }
    };

    const intervalId = setInterval(() => {
      updateValue(
        displayStartDate,
        currentPeriod.startDate,
        setDisplayStartDate,
      );
      updateValue(displayEndDate, currentPeriod.endDate, setDisplayEndDate);
    }, 50);

    return () => clearInterval(intervalId);
  }, [
    currentPeriod.startDate,
    currentPeriod.endDate,
    displayStartDate,
    displayEndDate,
  ]);

  return (
    <section className={styles.dates}>
      <h2 className={styles.dates__start}>{displayStartDate}</h2>
      <h2 className={styles.dates__end}>{displayEndDate}</h2>
    </section>
  );
}
