import { useState, useEffect } from "react";

export default function TimeDisplayGroup(): JSX.Element {
  const [years, setYears] = useState("--");
  const [months, setMonths] = useState("--");
  const [days, setDays] = useState("--");

  function TimeDisplay(props: { value: string; unit: string }): JSX.Element {
    return (
      <div className="flex flex-row gap-3 font-extrabold text-left text-[60px] sm:text-[75px] md:text-[100px] italic">
        <p className="text-purple">{props.value}</p>
        <p className="text-black">{props.unit}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col leading-tight">
      <TimeDisplay value={years} unit={`year${years !== "1" ? "s" : ""}`} />
      <TimeDisplay value={months} unit={`month${months !== "1" ? "s" : ""}`} />
      <TimeDisplay value={days} unit={`day${days !== "1" ? "s" : ""}`} />
    </div>
  );
}
