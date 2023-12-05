import * as React from "react";
import { useState } from "react";

const TimeEntryForm: React.FunctionComponent = () => {
  const [inputValue, setInputValue] = useState("");
  // const handleChange: React.ChangeEventHandler<HTMLInputElement> = (
  //   event: React.ChangeEvent<HTMLInputElement>,
  // ) => {
  //   setInputValue(event.target.value);
  // };

  // const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {};
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Hello World");
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
