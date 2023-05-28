import React, { createContext, useState } from "react";

export const PlanContext = createContext();

export const PlanProvider = ({ children }) => {
  const [month, setMonth] = useState(12);
  const [perMonth, setPerMonth] = useState(15);

  return (
    <PlanContext.Provider value={{ month, perMonth, setMonth, setPerMonth }}>
      {children}
    </PlanContext.Provider>
  );
};
