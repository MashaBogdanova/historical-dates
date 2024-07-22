"use client";

import React, { createContext, ReactNode, useContext } from "react";

import { dates, Period } from "@/mocks/dates-mock";

interface DatesContextType {
  dates: Period[];
}

// In a real project, it would be more appropriate to use Redux for state management.
// However, in this case, we're using Context because the state is small and simple.

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
