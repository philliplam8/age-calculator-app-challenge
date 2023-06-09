import { useContext } from "react";
import { AgeContext } from "../../context/AgeContext";
import { MouseEventHandler } from "react";

const DEFAULT_VALUE = "--";

function IconSubmit(): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="46"
      height="44"
      viewBox="0 0 46 44"
    >
      <g fill="none" stroke="#FFF" strokeWidth="2">
        <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
      </g>
    </svg>
  );
}

function IconReset(): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="46"
      height="46"
      viewBox="0 0 20 20"
    >
      <g
        fill="none"
        fillRule="evenodd"
        stroke="#FFF"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3.578 6.487A8 8 0 112.5 10.5M7.5 6.5h-4v-4" />
      </g>
    </svg>
  );
}

export default function Divider(props: {
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}): JSX.Element {
  const { ageYearsValue, ageMonthsValue, ageDaysValue } =
    useContext(AgeContext);
  const [ageYears, setAgeYears] = ageYearsValue;
  const [ageMonths, setAgeMonths] = ageMonthsValue;
  const [ageDays, setAgeDays] = ageDaysValue;

  function Button(): JSX.Element {
    return (
      <div className="w-full -translate-y-9 lg:-translate-y-12 absolute flex justify-center sm:justify-end">
        <button
          className="w-[70px] h-[70px] lg:w-[95px] lg:h-[95px] p-5 flex justify-center items-center rounded-full bg-purple hover:bg-offBlack"
          onClick={props.handleClick}
        >
          {ageYears === DEFAULT_VALUE &&
          ageMonths === DEFAULT_VALUE &&
          ageDays === DEFAULT_VALUE ? (
            <IconSubmit />
          ) : (
            <IconReset />
          )}
        </button>
      </div>
    );
  }

  return (
    <div className="relative my-14 flex flex-col">
      <div className="w-full h-[1px] bg-lightGrey"></div>
      <Button />
    </div>
  );
}
