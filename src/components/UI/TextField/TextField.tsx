export default function TextField(props: { label: string }): JSX.Element {
  return (
    <div className="flex flex-col gap-y-2">
      <div className="font-bold text-smokeyGrey uppercase">{props.label}</div>
      <input
        type="number"
        className="w-full p-4 border-2 border-gray rounded-lg text-[32px]"
      />
    </div>
  );
}
