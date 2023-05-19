import { useContext } from "react";
import { AgeContext } from "../../context/AgeContext";

export default function TimeDisplayGroup(): JSX.Element {
  const { ageYearsValue, ageMonthsValue, ageDaysValue } =
    useContext(AgeContext);
  const [ageYears, setAgeYears] = ageYearsValue;
  const [ageMonths, setAgeMonths] = ageMonthsValue;
  const [ageDays, setAgeDays] = ageDaysValue;

  function TimeDisplay(props: { value: string; unit: string }): JSX.Element {
    return (
      <div className="flex flex-row gap-3 font-extrabold text-left text-[60px] sm:text-[75px] md:text-[100px] italic">
        <p className="text-purple">{props.value}</p>
        <p className="text-black">{`${props.unit}${
          props.value !== "1" ? "s" : ""
        }`}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col leading-tight">
      <TimeDisplay value={ageYears} unit={"year"} />
      <TimeDisplay value={ageMonths} unit={"month"} />
      <TimeDisplay value={ageDays} unit={"day"} />
    </div>
  );
}
