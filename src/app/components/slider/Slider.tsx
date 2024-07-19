'use client';

import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import 'swiper/scss';
import 'swiper/css/navigation';
import {Period, Years} from "@/mocks/dates-mock";
import styles from "./slider.module.scss";
import React from "react";


export default function Slider({events}: Years) {
    const years = Object.keys(events);

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
                            <p className={styles.slider__text}>{events[year]}</p>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    );
};
