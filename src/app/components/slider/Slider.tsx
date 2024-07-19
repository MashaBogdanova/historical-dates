'use client';

import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import 'swiper/scss';
import 'swiper/css/navigation';
import {Period} from "@/mocks/dates-mock";
import styles from "./slider.module.scss";
import React from "react";

export default function Slider({period}: Period) {
    const years = Object.keys(period.years);

    return (
        <section className={styles.slider}>
            <Swiper
                modules={[Navigation]}
                spaceBetween={80}
                slidesPerView={3}
                navigation
            >
                {years.map((year) => {
                    return (
                        <SwiperSlide key={year}>
                            <h4 className={styles.slider__title}>{year}</h4>
                            <p className={styles.slider__text}>{period.years[year]}</p>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    );
};
