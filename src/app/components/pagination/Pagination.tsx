"use client";

import React, { useEffect, useState } from "react";
import { CgChevronLeft, CgChevronRight } from "react-icons/cg";

import { useCurrentPeriod } from "@/context/CurrentPeriodContext";
import { useDates } from "@/context/DatesContext";

import styles from "./pagination.module.scss";

interface Props {
  // eslint-disable-next-line no-unused-vars
  setOffsetAngle: (offsetAngle: number) => void;
}

export default function Pagination({ setOffsetAngle }: Props) {
  const { dates } = useDates();
  const { currentPeriodIndex, setCurrentPeriodIndex } = useCurrentPeriod();
  const [currentPage, setCurrentPage] = useState(1);
  const [activeDotIndex, setActiveDotIndex] = useState(0);
  const totalPagesNumber = dates.length;

  useEffect(() => {
    setCurrentPeriodIndex(currentPage - 1);
    setActiveDotIndex(currentPage - 1);
  }, [currentPage]);

  useEffect(() => {
    setCurrentPage(currentPeriodIndex + 1);
  }, [currentPeriodIndex]);

  function handleLeftClick() {
    setCurrentPage((currentValue) =>
      currentValue > 1 ? currentValue - 1 : currentValue,
    );
    setOffsetAngle(
      ((currentValue) => currentValue + 360 / totalPagesNumber) as number,
    );
  }

  function handleRightClick() {
    setCurrentPage((currentValue) =>
      currentValue < totalPagesNumber ? currentValue + 1 : currentValue,
    );
    setOffsetAngle(
      ((currentValue) => currentValue - 360 / totalPagesNumber) as number,
    );
  }

  function handleDotClick(page) {
    setCurrentPage(page);
  }

  return (
    <section className={styles.pagination}>
      <div>
        <p className={styles.pagination__currentPage}>
          0{currentPage}/0{totalPagesNumber}
        </p>
        <div className={styles.pagination__buttonsContainer}>
          <button
            className={`${styles.pagination__button} ${currentPage === 1 ? styles.pagination__button_inactive : ""}`}
            onClick={handleLeftClick}
            disabled={currentPage === 1}
          >
            <CgChevronLeft
              className={`${styles.pagination__arrow} ${currentPage === 1 ? styles.pagination__arrow_inactive : ""}`}
            />
          </button>
          <button
            className={`
            ${styles.pagination__button} 
            ${currentPage === totalPagesNumber ? styles.pagination__button_inactive : ""}
            `}
            onClick={handleRightClick}
            disabled={currentPage === totalPagesNumber}
          >
            <CgChevronRight
              className={`
              ${styles.pagination__arrow} 
              ${currentPage === totalPagesNumber ? styles.pagination__arrow_inactive : ""}
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
            onClick={() => handleDotClick(index + 1)}
          ></button>
        ))}
      </div>
    </section>
  );
}
