export default function TextField(props: {
  label: string;
  placeholder: string;
  max: number;
  min?: number;
  error?: boolean;
  errorMessage?: string;
}): JSX.Element {
  return (
    <div className="flex flex-col gap-y-2">
      {/* Input Field Label */}
      <div
        className={`text-xs sm:text-sm font-bold text-smokeyGrey uppercase tracking-[3px] ${
          props.error && "text-lightRed"
        }`}
      >
        {props.label}
      </div>

      {/* Input Field */}
      <input
        id={props.label}
        name={props.label}
        type="number"
        className="w-full max-w-[160px] px-4 sm:px-6 py-3 border-[1px] border-lightGrey focus:border-purple active:border-purple outline-none rounded-lg text-xl sm:text-[32px] placeholder:text-smokeyGrey"
        placeholder={props.placeholder}
        max={props.max}
        min={props.min}
      />

      {/* Error Validation */}
      {props.error && (
        <div className="italic text-lightRed">{props.errorMessage}</div>
      )}
    </div>
  );
}
