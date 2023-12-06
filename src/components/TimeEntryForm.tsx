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

    // Hiermit leeren wir das inputValue
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      {/*
        Durch das value={inputValue} wird das Formularfeld eine controlled component.
        Das bedeutet, dass wir nun über unseren JS-Code zu 100% kontrollieren können,
        was im Formularfeld drinsteht und was nicht.

        */}
      <label>
        Kommentar
        <input
          value={inputValue}
          name="comment"
          onChange={(event) => {
            // console.log("on change wird aufgerufen");
            // In dieses Textfeld kann man jetzt keine 9 mehr tippen
            if (event.target.value.includes("9")) {
              return;
            }

            // In diesem Textfeld werden nun alle Buchstaben zu Großbuchstaben.
            setInputValue(event.target.value.toUpperCase());
          }}
        />
      </label>
      <button type="submit">Speichern</button>
      <p>{inputValue}</p>
    </form>
  );
};

export default TimeEntryForm;
