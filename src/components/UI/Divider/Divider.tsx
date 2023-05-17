function Button(): JSX.Element {
  return (
    <div className="w-full -translate-y-9 absolute flex justify-center sm:justify-end">
      <button className="w-[70px] h-[70px] p-5 flex justify-center items-center rounded-full bg-purple hover:bg-offBlack">
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
      </button>
    </div>
  );
}

export default function Divider(): JSX.Element {
  return (
    <div className="relative my-14 flex flex-col">
      <div className="w-full h-[1px] bg-lightGrey"></div>
      <Button />
    </div>
  );
}
