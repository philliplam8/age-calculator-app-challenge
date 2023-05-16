import { TextField } from "../UI/TextField";

export default function AgeInput(): JSX.Element {
  return (
    <div className="flex flex-row gap-5">
      <TextField label={"Day"} />
      <TextField label={"Month"} />
      <TextField label={"Year"} />
    </div>
  );
}
