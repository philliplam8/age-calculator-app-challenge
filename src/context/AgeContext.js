import { createContext, useState } from "react";

const DEFAULT_TIME_VALUE = "--"

export const AgeContext = createContext();

export const AgeProvider = (props) => {
  const [ageYears, setAgeYears] = useState(DEFAULT_TIME_VALUE);
  const [ageMonths, setAgeMonths] = useState(DEFAULT_TIME_VALUE);
  const [ageDays, setAgeDays] = useState(DEFAULT_TIME_VALUE);

  return (
    <AgeContext.Provider
      value={{
        ageYearsValue: [ageYears, setAgeYears],
        ageMonthsValue: [ageMonths, setAgeMonths],
        ageDaysValue: [ageDays, setAgeDays],
      }}
    >
      {props.children}
    </AgeContext.Provider>
  );
};
