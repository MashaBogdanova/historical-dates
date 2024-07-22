"use client";

import React, { createContext, ReactNode, useContext, useState } from "react";

import { dates, Period } from "@/mocks/dates-mock";

interface CurrentPeriodContextInterface {
  currentPeriod: Period | null;
  currentPeriodIndex: number;
  setCurrentPeriodIndex: React.Dispatch<React.SetStateAction<number>>;
}

// In a real project, it would be more appropriate to use Redux for state management.
// However, in this case, we're using Context because the state is small and simple.

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
