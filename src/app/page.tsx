"use client";

import { useState } from "react";

import Circle from "@/app/components/circle/Circle";
import Dates from "@/app/components/dates/Dates";
import Lines from "@/app/components/lines/Lines";
import Pagination from "@/app/components/pagination/Pagination";
import Preloader from "@/app/components/shared/preloader/Preloader";
import Slider from "@/app/components/slider/Slider";
import { CurrentPeriodProvider } from "@/context/CurrentPeriodContext";
import { useDates } from "@/context/DatesContext";

import styles from "./page.module.scss";

export default function Home() {
  const [offsetAngle, setOffsetAngle] = useState(0);
  const { dates } = useDates();

  if (!dates) {
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
      <CurrentPeriodProvider>
        <Circle offsetAngle={offsetAngle} setOffsetAngle={setOffsetAngle} />
        <Dates />
        <Pagination setOffsetAngle={setOffsetAngle} />
        <Slider />
      </CurrentPeriodProvider>
    </main>
  );
}
