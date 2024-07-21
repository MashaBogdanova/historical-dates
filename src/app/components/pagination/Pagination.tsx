'use client';

import React, {useEffect, useState} from 'react';
import styles from "./pagination.module.scss";
import {CgChevronLeft, CgChevronRight} from "react-icons/cg";

interface Props {
    currentPeriodIndex: number;
    setCurrentPeriodIndex: (number) => void;
    setOffsetAngle: (offsetAngle: number) => void;
    totalPagesNumber: number;
}
function Pagination({currentPeriodIndex, setCurrentPeriodIndex, setOffsetAngle, totalPagesNumber}: Props) {
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        setCurrentPeriodIndex(currentPage - 1);
    }, [currentPage]);

    useEffect(() => {
        setCurrentPage(currentPeriodIndex + 1);
    }, [currentPeriodIndex])

    const isLeftButtonInactive = (page) => page === 1;
    const isRightButtonInactive = (page, total) => page === total;
    function handleLeftClick (){
        setCurrentPage(currentValue => currentValue > 1 ? currentValue - 1 : currentValue);
        setOffsetAngle( (currentValue => currentValue + 360 / totalPagesNumber) as number);
    }
    function handleRightClick (){
        setCurrentPage(currentValue => currentValue < totalPagesNumber ? currentValue + 1 : currentValue)
        setOffsetAngle( (currentValue => currentValue - 360 / totalPagesNumber) as number);
    }

    return (
        <div className={styles.pagination}>
            <p className={styles.pagination__currentPage}>0{currentPage}/0{totalPagesNumber}</p>
            <div className={styles.pagination__buttonsWrapper}>
                <button
                    className={`${styles.pagination__button} ${currentPage === 1 ? styles.pagination__button_inactive : ''}`}
                    onClick={handleLeftClick}
                    disabled={isLeftButtonInactive(currentPage)}
                >
                    <CgChevronLeft className={`${styles.pagination__arrow} ${currentPage === 1 ? styles.pagination__arrow_inactive : ''}`}/>
                </button>
                <button
                    className={`${styles.pagination__button} ${currentPage === totalPagesNumber ? styles.pagination__button_inactive : ''}`}
                    onClick={handleRightClick}
                    disabled={isRightButtonInactive(currentPage, totalPagesNumber)}
                >
                    <CgChevronRight className={`${styles.pagination__arrow} ${currentPage === totalPagesNumber ? styles.pagination__arrow_inactive : ''}`}/>
                </button>
            </div>
        </div>
    );
}

export default Pagination;
