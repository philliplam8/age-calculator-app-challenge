const ERROR_MESSAGE: string = "This field is required";

function ErrorMessage(): JSX.Element {
  return <div className="italic text-lightRed">{ERROR_MESSAGE}</div>;
}

export default function TextField(props: {
  label: string;
  placeholder: string;
  error?: boolean;
}): JSX.Element {
  return (
    <div className="flex flex-col gap-y-2">
      {/* Input Field Label */}
      <div
        className={`font-bold text-smokeyGrey uppercase tracking-widest ${
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
        className="w-full max-w-[160px] px-6 py-2 border-[1px] border-lightGrey focus:border-purple active:border-purple outline-none rounded-lg text-[32px] placeholder:text-smokeyGrey"
        placeholder={props.placeholder}
      />

      {/* Error Validation */}
      {props.error && <ErrorMessage />}
    </div>
  );
}
