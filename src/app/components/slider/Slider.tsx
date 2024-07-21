'use client';

import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import 'swiper/scss';
import 'swiper/css/navigation';
import {Theme, Years} from "@/mocks/dates-mock";
import styles from "./slider.module.scss";
import "./slider.scss";
import React from "react";
import {CgChevronLeft, CgChevronRight} from "react-icons/cg";
import Divider from "@/app/components/shared/divider/Divider";

interface Props {
    theme: Theme;
    events: Years;
}

export default function Slider({theme, events}: Props) {
    const years = Object.keys(events);

    return (
        <section className={styles.slider}>
            <h3 className={styles.slider__theme}>{theme}</h3>
            <hr className={styles.slider__divider} />
            <div className={styles.slider__sliderContainer}>
                <button className="slider__button_left">
                    <CgChevronLeft className={styles.slider__arrow}/>
                </button>
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={20}
                    slidesPerView={3}
                    navigation={{
                        prevEl: '.slider__button_left',
                        nextEl: '.slider__button_right',
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: "auto",
                            spaceBetween: 25,
                            loop: true
                        },
                        550: {
                            slidesPerView: 3,
                            spaceBetween: 80
                        }
                    }}
                >
                    {years.map((year) => {
                        return (
                            <SwiperSlide key={year}>
                                <h4 className={styles.slider__year}>{year}</h4>
                                <p>{events[year]}</p>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
                <button className="slider__button_right">
                    <CgChevronRight className={styles.slider__arrow}/>
                </button>
            </div>
        </section>
    );
};
