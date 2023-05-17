function TimeDisplay(props: {
  numValue: number;
  textValue: string;
}): JSX.Element {
  return (
    <div className="flex flex-row gap-3 font-extrabold text-left text-[60px] sm:text-[75px] md:text-[100px] italic">
      <p className="text-purple">{props.numValue}</p>
      <p className="text-black">{props.textValue}</p>
    </div>
  );
}

export default function TimeDisplayGroup(): JSX.Element {
  return (
    <div className="flex flex-col leading-tight">
      <TimeDisplay numValue={38} textValue="years" />
      <TimeDisplay numValue={3} textValue="months" />
      <TimeDisplay numValue={26} textValue="days" />
    </div>
  );
}
