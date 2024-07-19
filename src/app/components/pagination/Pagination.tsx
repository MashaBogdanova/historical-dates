'use client';

import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import styles from "./pagination.module.scss";

interface Props {
    currentPeriodIndex: number;
    setCurrentPeriodIndex: (number) => void;
    setOffset: (number) => void;
    totalPagesNumber: number;
}
function Pagination({currentPeriodIndex, setCurrentPeriodIndex, setOffset, totalPagesNumber}: Props) {
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        setCurrentPeriodIndex(currentPage - 1);
    }, [currentPage]);

    useEffect(() => {
        setCurrentPage(currentPeriodIndex + 1);
    }, [currentPeriodIndex])


    const arrowSize = 12.5;

    const isLeftButtonInactive = (page) => page === 1;
    const isRightButtonInactive = (page, total) => page === total;
    function handleLeftClick (){
        setCurrentPage(currentValue => currentValue > 1 ? currentValue - 1 : currentValue);
        setOffset( currentValue => currentValue + 1);
    }
    function handleRightClick (){
        setCurrentPage(currentValue => currentValue < totalPagesNumber ? currentValue + 1 : currentValue)
        setOffset( currentValue => currentValue - 1);
    }

    return (
        <div className={styles.pagination}>
            <p className={styles.pagination__currentPage}>0{currentPage}/0{totalPagesNumber}</p>
            <div className={styles.pagination__buttonsWrapper}>
                <button
                    className={`${styles.pagination__button} ${isLeftButtonInactive(currentPage) ? styles.pagination__button_inactive : ''}`}
                    onClick={handleLeftClick}
                    disabled={isLeftButtonInactive(currentPage)}
                >
                    <Image
                        src={isLeftButtonInactive(currentPage) ? "/pagination/arrow-left-inactive.svg" : "/pagination/arrow-left.svg"}
                        width={arrowSize}
                        height={arrowSize}
                        alt="previous period"
                    />
                </button>
                <button
                    className={`${styles.pagination__button} ${isRightButtonInactive(currentPage, totalPagesNumber) ? styles.pagination__button_inactive : ''}`}
                    onClick={handleRightClick}
                    disabled={isRightButtonInactive(currentPage, totalPagesNumber)}
                >
                    <Image
                        src={isRightButtonInactive(currentPage, totalPagesNumber) ? "/pagination/arrow-right-inactive.svg" : "/pagination/arrow-right.svg"}
                        width={arrowSize}
                        height={arrowSize}
                        alt="next period"
                    />
                </button>
            </div>
        </div>
    );
}

export default Pagination;
