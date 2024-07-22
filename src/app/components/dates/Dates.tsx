"use client";

import React, { useEffect, useState } from "react";

import { useCurrentPeriod } from "@/context/CurrentPeriodContext";
import updateDatesValue from "@/utils/updateDatesValue";

import styles from "./dates.module.scss";

export default function Dates() {
  const { currentPeriod } = useCurrentPeriod();
  const [displayStartDate, setDisplayStartDate] = useState<number>(
    currentPeriod.startDate,
  );
  const [displayEndDate, setDisplayEndDate] = useState<number>(
    currentPeriod.endDate,
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateDatesValue(
        displayStartDate,
        currentPeriod.startDate,
        setDisplayStartDate,
      );
      updateDatesValue(
        displayEndDate,
        currentPeriod.endDate,
        setDisplayEndDate,
      );
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
