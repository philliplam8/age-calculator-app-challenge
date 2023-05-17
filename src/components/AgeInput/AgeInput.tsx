import { TextField } from "../UI/TextField";

export default function AgeInput(): JSX.Element {
  return (
    <div className="flex flex-row gap-8">
      <TextField label={"Day"} placeholder="DD" />
      <TextField label={"Month"} placeholder="MM" />
      <TextField label={"Year"} placeholder="YY" />
    </div>
  );
}
