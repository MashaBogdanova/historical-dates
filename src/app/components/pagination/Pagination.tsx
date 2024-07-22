"use client";

import React, { useEffect, useState } from "react";
import { CgChevronLeft, CgChevronRight } from "react-icons/cg";

import { useCurrentPeriod } from "@/context/CurrentPeriodContext";
import { useDates } from "@/context/DatesContext";

import styles from "./pagination.module.scss";

interface Props {
  // eslint-disable-next-line no-unused-vars
  setOffsetAngle: (updateFn: (currentOffsetAngle: number) => number) => void;
}

export default function Pagination({ setOffsetAngle }: Props) {
  const { dates } = useDates();
  const { currentPeriodIndex, setCurrentPeriodIndex } = useCurrentPeriod();
  const [activeDotIndex, setActiveDotIndex] = useState(0);
  const totalPagesNumber = dates.length;

  useEffect(() => {
    setActiveDotIndex(currentPeriodIndex);
  }, [currentPeriodIndex]);

  function handleLeftClick() {
    setCurrentPeriodIndex((currentValue: number) =>
      currentValue > 0 ? currentValue - 1 : currentValue,
    );
    setOffsetAngle(
      (currentValue: number) => currentValue + 360 / totalPagesNumber,
    );
  }

  function handleRightClick() {
    setCurrentPeriodIndex((currentValue) =>
      currentValue < totalPagesNumber - 1 ? currentValue + 1 : currentValue,
    );
    setOffsetAngle(
      (currentValue: number) => currentValue - 360 / totalPagesNumber,
    );
  }

  function handleDotClick(index: number) {
    setCurrentPeriodIndex(index);
  }

  return (
    <section className={styles.pagination}>
      <div>
        <p className={styles.pagination__currentPage}>
          0{currentPeriodIndex + 1}/0{totalPagesNumber}
        </p>
        <div className={styles.pagination__buttonsContainer}>
          <button
            className={`
            ${styles.pagination__button} 
            ${currentPeriodIndex === 0 ? styles.pagination__button_inactive : ""}
            `}
            onClick={handleLeftClick}
            disabled={currentPeriodIndex === 0}
          >
            <CgChevronLeft
              className={`
              ${styles.pagination__arrow} 
              ${currentPeriodIndex === 0 ? styles.pagination__arrow_inactive : ""}
              `}
            />
          </button>
          <button
            className={`
            ${styles.pagination__button} 
            ${currentPeriodIndex === totalPagesNumber - 1 ? styles.pagination__button_inactive : ""}
            `}
            onClick={handleRightClick}
            disabled={currentPeriodIndex === totalPagesNumber - 1}
          >
            <CgChevronRight
              className={`
              ${styles.pagination__arrow} 
              ${currentPeriodIndex === totalPagesNumber - 1 ? styles.pagination__arrow_inactive : ""}
              `}
            />
          </button>
        </div>
      </div>
      <div className={styles.pagination__dots}>
        {Array.from({ length: totalPagesNumber }).map((_, index) => (
          <button
            key={index}
            className={`${styles.pagination__dot} ${index === activeDotIndex ? styles.pagination__dot_active : ""}`}
            onClick={() => handleDotClick(index)}
          ></button>
        ))}
      </div>
    </section>
  );
}
