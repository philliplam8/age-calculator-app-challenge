import { useState, useRef, useEffect } from "react";
import { TextField } from "../UI/TextField";
import { Divider } from "../Divider";
import { calculateAge } from "../../util";

// const ERROR_MESSAGE = {
//   EMPTY: "This field is required",
//   INVALID: "Must be a valid date",
//   DAY: "Must be a valid day",
//   MONTH: "Must be a valid month",
//   YEAR: "Must be a valid year",
// };

const INITIAL_ERROR_MESSAGE = {
  day: "",
  month: "",
  year: "",
};

export default function AgeInput(): JSX.Element {
  const [errorMessage, setErrorMessage] = useState(INITIAL_ERROR_MESSAGE);
  const inputDayRef = useRef<HTMLInputElement>(null);
  const inputMonthRef = useRef<HTMLInputElement>(null);
  const inputYearRef = useRef<HTMLInputElement>(null);

  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [final, setFinal] = useState("");

  const handleButtonClick = () => {
    if (inputDayRef?.current?.value) {
      setDay(inputDayRef.current.value);
    }
    if (inputMonthRef?.current?.value) {
      setMonth(inputMonthRef.current.value);
    }
    if (inputYearRef?.current?.value) {
      setYear(inputYearRef.current.value);
    }
  };

  useEffect(() => {
    if (day !== "" && month !== "" && year !== "") {
      setFinal(calculateAge(parseInt(day), parseInt(month), parseInt(year)));
    }
  }, [day, month, year]);

  return (
    <div className="flex flex-col">
      <div className="mb-12 flex flex-col justify-between border-purple border-2">
        <input type="text" ref={inputDayRef} />
        <div>Your age is {final}</div>
      </div>
      <div className="flex flex-row gap-4 sm:gap-8">
        <TextField
          label={"Day"}
          placeholder="DD"
          max={31}
          min={1}
          errorMessage={errorMessage.day}
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
          placeholder="YY"
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
