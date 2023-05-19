import { useState, useContext, useRef, useEffect } from "react";
import { AgeContext } from "../../context/AgeContext";
import { TextField } from "../UI/TextField";
import { Divider } from "../Divider";
import { calculateAge } from "../../util";

interface Age {
  years: number;
  months: number;
  days: number;
}

// const ERROR_MESSAGE = {
//   EMPTY: "This field is required",
//   INVALID: "Must be a valid date",
//   DAY: "Must be a valid day",
//   MONTH: "Must be a valid month",
//   YEAR: "Must be a valid year",
// };

const INITIAL_ERROR_MESSAGE = {
  birthDay: "",
  month: "",
  year: "",
};

export default function AgeInput(): JSX.Element {
  const [errorMessage, setErrorMessage] = useState(INITIAL_ERROR_MESSAGE);

  // useRef Hooks for Input fields "Day", "Month", and "Year"
  const inputDayRef = useRef<HTMLInputElement>(null);
  const inputMonthRef = useRef<HTMLInputElement>(null);
  const inputYearRef = useRef<HTMLInputElement>(null);

  // User Input Birth Dates
  const [birthDay, setBirthDay] = useState("");
  const [birthMonth, setBirthMonth] = useState("");
  const [birthYear, setBirthYear] = useState("");

  // Calculated Age
  const { ageYearsValue, ageMonthsValue, ageDaysValue } =
    useContext(AgeContext);
  const [ageYears, setAgeYears] = ageYearsValue;
  const [ageMonths, setAgeMonths] = ageMonthsValue;
  const [ageDays, setAgeDays] = ageDaysValue;

  const handleButtonClick = () => {
    if (inputDayRef?.current?.value) {
      setBirthDay(inputDayRef.current.value);
    }
    if (inputMonthRef?.current?.value) {
      setBirthMonth(inputMonthRef.current.value);
    }
    if (inputYearRef?.current?.value) {
      let inputYear: string = inputYearRef.current.value;

      /**
       * Note JavaScript Date constructor will accept integer values
       * representing the year from 0 to 99 and map to the years 1900 to 1999.
       * To provide better UX, input value will auto-prefix "19-" or "190-"
       * to these situations.
       */
      if (inputYear.length === 2) {
        inputYearRef.current.value = `19${inputYear}`;
      }
      if (inputYear.length === 1) {
        inputYearRef.current.value = `190${inputYear}`;
      }
      setBirthYear(inputYear);
    }
  };

  useEffect(() => {
    // Calculate only if all fields are filled in
    if (birthDay !== "" && birthMonth !== "" && birthYear !== "") {
      const age: Age = calculateAge(
        parseInt(birthDay),
        parseInt(birthMonth),
        parseInt(birthYear)
      );

      setAgeDays(age.days);
      setAgeMonths(age.months);
      setAgeYears(age.years);
    }
  }, [birthDay, birthMonth, birthYear, setAgeDays, setAgeMonths, setAgeYears]);

  return (
    <div className="flex flex-col">
      <div className="flex flex-row gap-4 sm:gap-8">
        <TextField
          label={"Day"}
          placeholder="DD"
          max={31}
          min={1}
          errorMessage={errorMessage.birthDay}
          ref={inputDayRef}
        />
        <TextField
          label={"Month"}
          placeholder="MM"
          max={12}
          min={1}
          errorMessage={errorMessage.month}
          ref={inputMonthRef}
        />
        <TextField
          label={"Year"}
          placeholder="YYYY"
          max={99}
          min={0}
          errorMessage={errorMessage.year}
          ref={inputYearRef}
        />
      </div>
      <Divider handleClick={handleButtonClick} />
    </div>
  );
}
