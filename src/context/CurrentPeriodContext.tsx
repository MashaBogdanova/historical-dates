"use client";

import React, { createContext, ReactNode, useContext, useState } from "react";

import { dates, Period } from "@/mocks/dates-mock";

interface CurrentPeriodContextInterface {
  currentPeriod: Period | null;
  currentPeriodIndex: number;
  setCurrentPeriodIndex: React.Dispatch<React.SetStateAction<number>>;
}

const CurrentPeriodContext =
  createContext<CurrentPeriodContextInterface | null>(null);

export const CurrentPeriodProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [currentPeriodIndex, setCurrentPeriodIndex] = useState(0);

  return (
    <CurrentPeriodContext.Provider
      value={{
        currentPeriod: dates[currentPeriodIndex],
        currentPeriodIndex,
        setCurrentPeriodIndex,
      }}
    >
      {children}
    </CurrentPeriodContext.Provider>
  );
};

export const useCurrentPeriod = () => {
  return useContext(CurrentPeriodContext);
};
