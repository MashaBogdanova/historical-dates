"use client";

import "swiper/scss";
import "swiper/css/navigation";
import "./slider.scss";

import React from "react";
import { CgChevronLeft, CgChevronRight } from "react-icons/cg";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { NavigationOptions } from "swiper/types";

import { useCurrentPeriod } from "@/context/CurrentPeriodContext";

import styles from "./slider.module.scss";

export default function Slider() {
  const { currentPeriod } = useCurrentPeriod();
  const years = Object.keys(currentPeriod.eventsSet);

  return (
    <section className={styles.slider}>
      <h3 className={styles.slider__theme}>{currentPeriod.periodTheme}</h3>
      <hr className={styles.slider__divider} />
      <div className={styles.slider__sliderContainer}>
        <button className="slider__button_left">
          <CgChevronLeft className={styles.slider__arrow} />
        </button>
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={3}
          navigation={
            {
              prevEl: ".slider__button_left",
              nextEl: ".slider__button_right",
            } as NavigationOptions
          }
          breakpoints={{
            320: {
              slidesPerView: "auto",
              spaceBetween: 25,
              loop: true,
            },
            550: {
              slidesPerView: 3,
              spaceBetween: 80,
            },
          }}
        >
          {years.map((year) => {
            return (
              <SwiperSlide key={year}>
                <h4 className={styles.slider__year}>{year}</h4>
                <p>{currentPeriod.eventsSet[year]}</p>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <button className="slider__button_right">
          <CgChevronRight className={styles.slider__arrow} />
        </button>
      </div>
    </section>
  );
}
