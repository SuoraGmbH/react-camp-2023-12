import * as React from "react";
import { useState } from "react";
import TimeEntry from "../domain/TimeEntry.ts";

interface Props {
  onTimeEntryAdd: (timeEntry: TimeEntry) => void;
}

const TimeEntryForm: React.FunctionComponent<Props> = ({ onTimeEntryAdd }) => {
  const [inputValue, setInputValue] = useState("");
  // const handleChange: React.ChangeEventHandler<HTMLInputElement> = (
  //   event: React.ChangeEvent<HTMLInputElement>,
  // ) => {
  //   setInputValue(event.target.value);
  // };

  // const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {};
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onTimeEntryAdd({
      id: crypto.randomUUID(),
      start: new Date(),
      end: new Date(),
      comment: inputValue,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={(event) => setInputValue(event.target.value)} />
      <button type="submit">Speichern</button>
      <p>{inputValue}</p>
    </form>
  );
};

export default TimeEntryForm;
