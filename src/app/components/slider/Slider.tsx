'use client';

import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import 'swiper/scss';
import 'swiper/css/navigation';
import {Period, Years} from "@/mocks/dates-mock";
import styles from "./slider.module.scss";
import React from "react";
import {CgChevronLeft, CgChevronRight} from "react-icons/cg";


export default function Slider({events}: Years) {
    const years = Object.keys(events);

    return (
        <section className={styles.slider}>
            <button className={`${styles.slider__button} ${styles["slider__button_left"]}`}>
                <CgChevronLeft className={styles.slider__arrow}/>
            </button>
            <Swiper
                modules={[Navigation]}
                spaceBetween={80}
                slidesPerView={3}
                navigation={{prevEl: '.slider__arrow_left', nextEl: '.slider__arrow_right'}}
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
            <button className={`${styles.slider__button} ${styles["slider__button_right"]}`}>
                <CgChevronRight className={styles.slider__arrow}/>
            </button>
        </section>
    );
};
