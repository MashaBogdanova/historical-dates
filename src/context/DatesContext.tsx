"use client";

import React, { createContext, ReactNode, useContext } from "react";

import { dates, Period } from "@/mocks/dates-mock";

interface DatesContextType {
  dates: Period[];
}

const DatesContext = createContext<DatesContextType | null>(null);

export const DatesProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <DatesContext.Provider value={{ dates }}>{children}</DatesContext.Provider>
  );
};

export const useDates = () => {
  return useContext(DatesContext);
};
