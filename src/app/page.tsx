"use client";

import { useEffect, useState } from "react";

import Circle from "@/app/components/circle/Circle";
import Dates from "@/app/components/dates/Dates";
import Lines from "@/app/components/lines/Lines";
import Pagination from "@/app/components/pagination/Pagination";
import Preloader from "@/app/components/shared/preloader/Preloader";
import Slider from "@/app/components/slider/Slider";
import { DatesData, datesData } from "@/mocks/dates-mock";

import styles from "./page.module.scss";

export default function Home() {
  const [dates, setDates] = useState<DatesData>([]);
  const [currentPeriodIndex, setCurrentPeriodIndex] = useState(0);
  const [offsetAngle, setOffsetAngle] = useState(0);

  useEffect(() => {
    setDates(datesData);
  }, []);

  const currentPeriodData = dates[currentPeriodIndex];

  if (dates.length === 0) {
    return <Preloader />;
  }

  return (
    <main className={styles.main}>
      <h1 className={styles.main__title}>
        Исторические
        <br />
        даты
      </h1>
      <Lines />
      <Circle
        offsetAngle={offsetAngle}
        currentPeriodIndex={currentPeriodIndex}
        setCurrentPeriodIndex={setCurrentPeriodIndex}
        dates={dates}
        setOffsetAngle={setOffsetAngle}
      />
      <Dates
        startDate={currentPeriodData.start}
        endDate={currentPeriodData.end}
      />
      <Pagination
        currentPeriodIndex={currentPeriodIndex}
        setCurrentPeriodIndex={setCurrentPeriodIndex}
        setOffsetAngle={setOffsetAngle}
        totalPagesNumber={dates.length}
      />
      <Slider
        events={currentPeriodData.years}
        theme={currentPeriodData.theme}
      />
    </main>
  );
}
